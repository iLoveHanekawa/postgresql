const getBooks = async () => {
    const res = await fetch('http://localhost:3000/api/books', { headers: {
        'content-type': 'application/json'
    }, cache: 'no-store'})
    const books = await res.json()
    return books.data
}

export default async function Page() {
    const books = await getBooks()
    return <ul className = 'mx-5'>
        <div className = 'pl-3 py-3 bg-pink-900 flex justify-center font-bold'>
            <div className = 'w-1/3'>ID</div>
            <div className = 'w-1/3'>TITLE</div>
            <div className = 'w-1/3'>AUTHORID</div>
        </div>
        {books.map((val, i) => {
            return <li className = {`${i % 2 === 0? 'bg-pink-700': 'bg-pink-800'} py-3 pl-3 flex justify-center`} key = {i}>
                <div className = 'w-1/3'>{val.id}</div>
                <div className = 'w-1/3'>{val.title}</div>
                <div className = 'w-1/3'>{val.author.name}</div>
            </li>
        })}
    </ul>
}