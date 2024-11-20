const GoogleStrategy = require("passport-google-oauth20").Strategy;
import jwt from 'jsonwebtoken';
import passport from 'passport';
import { Profile } from 'passport-google-oauth20';

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined in environment variables');
}

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: "http://localhost:3000/api/v1/auth/google/callback",
            scope: ["profile", "email"],
        },
        async function (
            _accessToken: string, 
            _refreshToken: string, 
            profile: Profile, 
            callback: (error: any, user?: any) => void
        ) {
            try {
                // You might want to check if user exists in your database here
                // const existingUser = await YourUserModel.findOne({ googleId: profile.id });
                
                const token = jwt.sign(
                    { 
                        id: profile.id,
                        email: profile.emails?.[0]?.value,
                        name: profile.displayName 
                    }, 
                    JWT_SECRET,
                    { expiresIn: "3h" }
                );

                callback(null, { profile, token });
            } catch (error) {
                callback(error);
            }
        }
    )
);

passport.serializeUser((user: any, done) => {
    done(null, user);
});

passport.deserializeUser((user: any, done) => {
    done(null, user);
});

export default passport;