'use client' // Errors components must be Client components

import Link from "next/link"
import { useEffect } from "react"

const Error = ({ error, reset }) => {
    useEffect(() => {
        console.log(error)
        console.error(error)
    }, [error])
}

const errorTodo = () => {
    return (
        <>
            <header className='flex justify-between items-center mb-4 p-8'>
                <h1 className='text-2xl'>Something went wrong!</h1>
                <Link href="/" className='border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none'>Home</Link>
            </header>
        </>
    )
}

export default errorTodo