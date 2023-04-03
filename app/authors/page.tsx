// 'use client'
// import useSWR from 'swr'

import { prisma } from "@/lib/prisma"
import Form from "./Form"
import Delete from "@/components/Delete"
import Update from "@/components/Update"

const getAuthors = async function () {
    const res = await fetch('http://localhost:3000/api/authors', { cache: 'no-store' })
    const authors = await res.json()
    return authors.data 
}

export default async function Author () {
    const authors = await getAuthors()
    // const { data: authors, error } = useSWR('http://localhost:3000/api/authors', async (url: string) => {
    //     const res = await fetch(url, { headers: {'content-type': 'application/json'}})
    //     const authors = await res.json()
    //     return authors.data
    // })
    // if(error) return <div>{error.message}</div>
    // if(!authors) return <div>Loading...</div>
    return <ul className = 'mx-5'>
        <div className = 'bg-pink-900 pl-3 flex items-center py-3 font-bold uppercase'>
            <div className = 'w-1/2'>ID</div>
            <div className = 'w-1/2'>Name</div>
        </div>
        {authors.map((val, i) => {
            return <li key = {i} className = {`${i % 2 === 0? 'bg-pink-700': 'bg-pink-900'} pl-3 bg-pink-700 text-gray-200 flex py-3`}>
                <div className = 'w-1/2'>{val.id}</div>
                <div className = 'w-1/2'>{val.name}</div>
            </li>
        })}
        <Form />
        <Delete endpoint = {'authors'} />
        <Update endpoint = {'authors'} />
    </ul>
}