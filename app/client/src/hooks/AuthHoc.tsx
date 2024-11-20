import axios from "axios";
import { useEffect, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/vars";

interface AuthHOCProps {
  children: ReactNode;
}

const AuthHOC = ({ children }: AuthHOCProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function verifyToken() {
      const token = localStorage.getItem('token');
      if (!token) {
        setIsAuthenticated(false);
        navigate("/signup");
        return;
      }

      try {
        const response = await axios.post(
          `${BASE_URL}/api/v1/auth/validate`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const { ok } = response.data;
        if (!ok) {
          setIsAuthenticated(false);
          navigate("/signup");
        } else {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Error verifying token:", error);
        setIsAuthenticated(false);
        navigate("/signup");
      }
    }

    verifyToken();
  }, [navigate]);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Show a loader until verification is complete
  }

  if (!isAuthenticated) {
    return <div>You are not authenticated. Redirecting...</div>;
  }

  return <>{children}</>;
};

export default AuthHOC;
