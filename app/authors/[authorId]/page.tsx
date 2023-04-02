const getAuthor = async (id: string) => {
    const res = await fetch(`http://localhost:3000/api/authors/${id}`, { cache: 'no-store', headers: {
        'content-type': 'application/json'
    }},)
    const author = await res.json();
    return author.data
}

export default async function AuthorId({ params }: { params: { authorId: string} }) {
    const author = await getAuthor(params.authorId)
    return <div>
        { author.name }
    </div>
}