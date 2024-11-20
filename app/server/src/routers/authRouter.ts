import { Router, Response, Request } from "express";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import { authMiddleware } from "../middlewares/authMiddleware";
import crypto from "crypto";

interface VerificationData {
  code: string;
  expiryTime: number;
  currentEmail?: string;
}

interface UserPayload {
  email: string;
}

interface AuthRequest extends Request {
  user?: UserPayload;
}

const router = Router();

// In-memory store for verification codes
const verificationCodes: Map<string, VerificationData> = new Map();

// Email configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER as string,
    pass: process.env.EMAIL_PASSWORD as string,
  },
});

// JWT middleware


// Generate and send verification code
const sendVerificationCode = async (email: string): Promise<string> => {
  const code = crypto.randomInt(100000, 999999).toString();
  const expiryTime = Date.now() + 10 * 60 * 1000; // 10 minutes

  verificationCodes.set(email, {
    code,
    expiryTime,
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER as string,
      to: email,
      subject: "Your Taskera Verification Code",
      text: `Your Taskera verification code is: ${code}. Valid for 10 minutes. Do not share with anyone`,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send verification email");
  }

  return code;
};

// Routes
router.post(
  "/email",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { email } = req.body as { email: string };
      if (!email || !email.includes("@")) {
        res.status(400).json({ error: "Invalid email" });
        return;
      }

      await sendVerificationCode(email);
      res.json({ message: "Verification code sent" });
    } catch (error) {
      res.status(500).json({ error: "Failed to send verification code" });
      console.log(error);
    }
  }
);

router.post(
  "/verify",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, code } = req.body as { email: string; code: string };
      const storedData = verificationCodes.get(email);

      if (!storedData || storedData.code !== code) {
        res.status(400).json({ error: "Invalid code" });
        return;
      }

      if (Date.now() > storedData.expiryTime) {
        verificationCodes.delete(email);
        res.status(400).json({ error: "Code expired" });
        return;
      }

      const token = jwt.sign({ email }, process.env.JWT_SECRET as string, {
        expiresIn: "24h",
      });
      verificationCodes.delete(email);

      res.json({ token });
    } catch (error) {
      res.status(500).json({ error: "Verification failed" });
    }
  }
);

router.post(
  "/change-email",
  authMiddleware,
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { newEmail } = req.body as { newEmail: string };
      if (!newEmail || !newEmail.includes("@")) {
        res.status(400).json({ error: "Invalid email" });
        return;
      }

      await sendVerificationCode(newEmail);

      verificationCodes.set(newEmail, {
        ...(verificationCodes.get(newEmail) as VerificationData),
        currentEmail: (req as AuthRequest).user?.email,
      });
      res.json({ message: "Verification code sent to new email" });
    } catch (error) {
      res.status(500).json({ error: "Failed to initiate email change" });
    }
  }
);

router.put(
  "/change-email",
  authMiddleware,
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { newEmail, code } = req.body as { newEmail: string; code: string };
      const storedData = verificationCodes.get(newEmail);

      if (!storedData || storedData.code !== code) {
        res.status(400).json({ error: "Invalid code" });
        return;
      }

      if (Date.now() > storedData.expiryTime) {
        verificationCodes.delete(newEmail);
        res.status(400).json({ error: "Code expired" });
        return;
      }

      if (storedData.currentEmail !== (req as AuthRequest).user?.email) {
        res.status(400).json({ error: "Unauthorized email change" });
        return;
      }

      const token = jwt.sign(
        { email: newEmail },
        process.env.JWT_SECRET as string,
        { expiresIn: "24h" }
      );
      verificationCodes.delete(newEmail);

      res.json({ token });
    } catch (error) {
      res.status(500).json({ error: "Email change failed" });
    }
  }
);

export { router as authRouter };
