'use client'

import { useState } from 'react'

type UpdateProps = {
    endpoint: 'authors' | 'books'
}

export default function Update({ endpoint }: UpdateProps) {

    const [id, setId] = useState<string>('')
    const [name, setName] = useState<string>('')

    return <form onSubmit = {async (e) => {
        e.preventDefault()
        await fetch(`http://localhost:3000/api/${endpoint}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, newName: name })
        })
    }} className = 'flex items-center gap-3 pt-2'>
        <div className = 'gap-3 flex items-end py-3'>
            <label>ID</label>
            <input value = {id} onChange = {(e) => {
                setId(e.currentTarget.value)
            }} className = 'text-gray-600 pl-2 text-sm rounded-md py-1 focus:outline-none' />
        </div>
        <div className = 'gap-3 flex items-end py-3'>
            <label>New Name</label>
            <input value = {name} onChange = {(e) => {
                setName(e.currentTarget.value)
            }} className = 'text-gray-600 pl-2 text-sm rounded-md py-1 focus:outline-none'/>
        </div>
        <button className = 'py-1 px-4 hover:scale-110 transition duration-300 bg-pink-700 rounded-lg'>Update</button>
    </form>
}