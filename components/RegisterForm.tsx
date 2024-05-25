"use client"

import React from 'react'
import { RegisterAction } from '@/actions/userAction'
import { redirect } from 'next/navigation'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useToast } from "@/components/ui/use-toast"

const RegisterForm = () => {
    const { toast } = useToast()

    async function ClientRegisterAction(formData: FormData) {
        const res: any = await RegisterAction(formData)
        if (res?.error) {
            toast({ description: res.message, variant: "destructive", duration: 2500 })
        } else {
            toast({ description: res.message, duration: 2500, className: "bg-slate-900 text-white" })
            redirect("/login")
        }
    }
    return (
        <div>
            <form action={ClientRegisterAction} className='flex flex-col gap-4' >
                <Input name='name' type='text' placeholder='Name' />
                <Input name='email' type='email' placeholder='Email' />
                <Input name='password' type='password' placeholder='Password' />
                <Button variant={"default"} type='submit'>Register</Button>
            </form>
        </div>
    )
}

export default RegisterForm
