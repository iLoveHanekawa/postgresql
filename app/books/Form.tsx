'use client'
import { useState, FormEvent, ChangeEvent } from 'react'

export default function Form () {
    const [ title, setTitle ] = useState<string>('')
    const [ authorId, setAuthorId ] = useState<string>('')
    return <form onSubmit = {async (e: FormEvent<HTMLFormElement>) => {
        await fetch('http://localhost:3000/api/books', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                title, authorId
            })
        })
    }} className = 'flex items-center gap-3 pt-2'>
        <div className = 'gap-3 flex items-end py-3'>
            <label htmlFor='title'>Title</label>
            <input value = {title} onChange = {(e: ChangeEvent<HTMLInputElement>) => {
                setTitle(e.currentTarget.value)
            }} className = 'text-gray-600 pl-2 text-sm rounded-md py-1 focus:outline-none' id = 'title' />
        </div>
        <div className = 'gap-3 flex items-end py-3'>
            <label htmlFor='authorId'>AuthorId</label>
            <input value = {authorId} onChange = {(e: ChangeEvent<HTMLInputElement>) => {
                setAuthorId(e.currentTarget.value)
            }} className = 'text-gray-600 pl-2 text-sm rounded-md py-1 focus:outline-none' id = 'authorId' />
        </div>
        <button className = 'py-1 px-4 hover:scale-110 transition duration-300 bg-pink-700 rounded-lg'>Add</button>
    </form>
}