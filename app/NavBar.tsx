'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {

    const path = usePathname()
    return <div className = 'w-full py-4 pl-2 bg-pink-950'>
        <Link href={'home'} className = {`${path.startsWith('/home')? 'font-bold': ''} mr-4`}>Home</Link>
        <Link href={'books'} className = {`${path.startsWith('/books')? 'font-bold': ''} mr-4`}>Books</Link>
        <Link href={'authors'} className = {`${path.startsWith('/authors')? 'font-bold': ''}`}>Authors</Link>
    </div>
}
