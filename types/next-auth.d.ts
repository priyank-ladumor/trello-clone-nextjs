
import { DefaultSession } from "next-auth";

declare module "next-auth/jwt" {
    interface JWT {
        name: any,
        email: any,
        image: any,
        exp: any,
    }
}

declare module "next-auth" {
    interface Session {
        user: {
            name: any,
            email: any,
            id: any,
            image: any,
            expire: any
        } & DefaultSession["user"];
    }

    interface User {
        name?: any,
        email?: any,
        picture?: any,
        id?: any,
        image?: any,
        exp?: any,
        expire?: any
    }
}