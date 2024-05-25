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
import RegisterForm from '@/components/RegisterForm'

const Register = async () => {
    // const session = await auth()
    // if (session?.user) {
    //     redirect("/product")
    // }
    return (
        <div className='flex justify-center items-center h-dvh' >
            <Card>
                <CardHeader>
                    <CardTitle>Register</CardTitle>
                </CardHeader>
                <CardContent>
                    <RegisterForm />
                </CardContent>
                <CardFooter className='flex flex-col gap-4'>
                    <div className='flex' >
                        <p className='me-1'>{"Already have an account?"}</p><Link href={"/login"} className='hover:text-blue-800' > Login</Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Register
