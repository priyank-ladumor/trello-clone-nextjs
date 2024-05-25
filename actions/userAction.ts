'use server';

import { signIn } from '@/auth';
import { ConnectDB } from '@/lib/utils';
import { User } from '@/models/userModel';
import bcrypt from 'bcrypt';
import { CredentialsSignin } from 'next-auth';

ConnectDB();

export const RegisterAction = async (formData: FormData) => {
    await ConnectDB();
    try {
        const email = formData.get("email") as string;
        const name = formData.get("name") as string;
        const password = formData.get("password") as string;

        if (!email || !name || !password) throw new Error("Please provide all credentials")
        const hashPassword = await bcrypt.hash(password, 10)
        const createUser = User.create({
            email,
            name,
            password: hashPassword
        })
        if (await createUser) return { success: true, message: "Register Successfully" };

    } catch (error) {
        const err = error as CredentialsSignin;
        return { error: true, message: err.message };
    }
}

export const LoginAction = async (formData: FormData) => {
    await ConnectDB();
    try {
        const email = formData.get("email") as string;
        const password: string | undefined | any = formData.get("password") as string;

        if (!email || !password) throw new Error("Please provide all credentials")

        const user: object | any = await User.findOne({ email }).select("+password");
        if (!user) throw new Error("invalid credentials")

        const isMatchPassword = await bcrypt.compare(password, user.password)
        if (!isMatchPassword) throw new Error("invalid credentials")

        await signIn("credentials", { email, password, redirect: false })

        return { success: true, message: "Login Successfully" };

    } catch (error) {
        const err = error as CredentialsSignin;
        return { error: true, message: err.message };
    }
} 