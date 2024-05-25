import React from 'react'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from 'next/link'
// import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import LoginForm from '@/components/LoginForm'

const Login = async () => {
    // const session = await auth()
    // if (session?.user) {
    //     redirect("/product")
    // }
    return (
        <div className='flex justify-center items-center h-dvh' >
            <Card>
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                </CardHeader>
                <CardContent>
                    <LoginForm />
                </CardContent>
                <CardFooter className='flex flex-col gap-4'>
                    <div className='flex' >
                        <p className='me-1'>{"Don't have an account?"}</p><Link href={"/register"} className='hover:text-blue-800' > Register</Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Login
