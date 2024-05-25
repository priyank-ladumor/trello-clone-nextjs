"use client"

import { LoginAction } from '@/actions/userAction'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useMemo } from 'react'
import { redirect } from 'next/navigation'
import { useToast } from './ui/use-toast'

const LoginForm = () => {
    const { toast } = useToast()
    async function ClientLoginAction(formData: FormData) {
        const res: any = await LoginAction(formData)
        if (res?.error) {
            toast({ description: res.message, variant: "destructive", duration: 2500 })
        } else {
            toast({ description: res.message, duration: 2500, className: "bg-slate-900 text-white" })
            if (res?.success) {
                redirect("/")
            }
        }
    }
    return (
        <>
            <form action={ClientLoginAction} className='flex flex-col gap-4' >
                <Input name='email' type='email' placeholder='Email' />
                <Input name='password' type='password' placeholder='Password' />
                <Button variant={"default"} type='submit'>Login</Button>
            </form>
        </>
    )
}

export default LoginForm
