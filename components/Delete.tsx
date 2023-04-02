'use client'

import { useState, FormEvent } from 'react'

type DeleteProps = {
    endpoint: string
}

export default function Delete({ endpoint }: DeleteProps) {

    const [id, setId] = useState<string>('')

    return <form onSubmit = {async (e: FormEvent<HTMLFormElement>) => {
        await fetch(`http://localhost:3000/api/${endpoint}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ id })
        })
    }} className = 'flex items-center gap-3 pt-2'>
        <div className = 'gap-3 flex items-end py-3'>
            <label>Id</label>
            <input value = {id} onChange = {e => {
                setId(e.currentTarget.value)
            }} className = 'text-gray-600 pl-2 text-sm rounded-md py-1 focus:outline-none'/>
        </div>
        <button className = 'py-1 px-4 hover:scale-110 transition duration-300 bg-pink-700 rounded-lg'>Delete</button>
    </form>
}