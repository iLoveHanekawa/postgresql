const getBook = async (id: string) => {
    const res = await fetch(`http://localhost:3000/api/books/${id}`, { headers: {
        'Content-Type': 'application/json'
    }})
    const book = await res.json()
    return book.data
}

export default async function Page({ params }: { params: { bookId: string }}) {
    const book = await getBook(params.bookId)
    return <div>
        {book.title}
    </div>
}