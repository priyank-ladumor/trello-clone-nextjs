import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const AccessDenied = () => {
    return (
        <div className='flex flex-col justify-center items-center my-auto h-[100vh]' >
            <h1 className='text-3xl mb-2' >{"Without login you can't access"}</h1>
            <Link href="/login"><Button>login</Button></Link>
        </div>
    )
}

export default AccessDenied
