'use client'
import { METHODS } from "http"
import { useState, ChangeEvent, FormEvent } from "react"

export default function Form () {
    const [name, setName] = useState<string>('')
    const [book, setBook] = useState<string>('')

    return <form onSubmit={async (e: FormEvent<HTMLFormElement>) => {
        await fetch('http://localhost:3000/api/authors', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                book: book
            })
        })
    }} className = 'flex items-center gap-3 pt-2'>
        <div className = 'gap-3 flex items-end py-3'>
            <label htmlFor="name">Name</label>
            <input className = 'text-gray-600 pl-2 text-sm rounded-md py-1 focus:outline-none' id = 'name' value={name} onChange = {(e: ChangeEvent<HTMLInputElement>) => {
                setName(e.currentTarget.value)
            }} />
        </div>
        <div className = 'gap-3 flex items-end py-3'>
            <label htmlFor="book">Book</label>
            <input className = 'text-gray-600 pl-2 text-sm rounded-md py-1 focus:outline-none' id = 'book' value={book} onChange = {(e: ChangeEvent<HTMLInputElement>) => {
                setBook(e.currentTarget.value)
            }} />
        </div>
        <button className = 'py-1 px-4 hover:scale-110 transition duration-300 bg-pink-700 rounded-lg'>Add</button>
    </form>
}