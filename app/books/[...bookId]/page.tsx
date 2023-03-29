export default function Page({ params }: { params: { bookId: string[] }}) {
    console.log(params);
    return <div>
        Book ID: {params.bookId[0]}
    </div>
}