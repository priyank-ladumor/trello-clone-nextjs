import NextAuth, { AuthError, CredentialsSignin } from "next-auth"
import credentials from "next-auth/providers/credentials"
import { User } from "@/models/userModel"
import bcrypt from "bcrypt"
// import { ConnectDB } from "@/lib/utils"

export const { auth, handlers, signIn, signOut } = NextAuth({
    // cookies: {
    //     sessionToken: {
    //         name: "next-auth.session-token",
    //         options: {
    //             domain: "localhost", // Replace with your actual domain
    //             path: "/",
    //             httpOnly: true,
    //             sameSite: "lax",
    //             secure: false,
    //         },
    //     },
    // },
    providers: [
        credentials({
            name: 'credentials',
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                },
                password: { label: "Password", type: "password" }
            },
            authorize: async (credentials) => {
                const email = credentials.email as string;
                const password = credentials.password as string;

                if (!email) throw new CredentialsSignin("email is not valid")
                if (!password) throw new CredentialsSignin("password is not valid")

                const user = await User.findOne({ email }).select("+password")
                if (!user) {
                    throw new CredentialsSignin("Invalid Email or Password")
                }

                const isMatchPassword = await bcrypt.compare(password, user.password);
                if (!isMatchPassword) {
                    throw new CredentialsSignin("Invalid Password")
                }
                // if (!user.isVerified) {
                //     throw new CredentialsSignin("User is not verified")
                // }

                return { name: user.name, email: user.email, id: user._id };
            },
        })
    ],
    pages: {
        signIn: '/login',
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt',
        // Set the maximum session duration to 24 hours
        maxAge: 24 * 60 * 60,
    },
    callbacks: {
        authorized({ auth }) {
            if (auth?.user) return true; // If user is authenticated
            return false;
        },
        async jwt({ token, user }) {
            if (user) {
                return { ...token, ...user };
            }
            return token;
        },
        async session({ session, token }) {
            return { ...session, ...token };
        },
    },
}) 
