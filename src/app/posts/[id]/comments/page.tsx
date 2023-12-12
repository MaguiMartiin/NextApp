const fetchComments = (id:any) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(res=>res.json())
}

export default async function Post ({params}: any) {
    const { id }= params
    const comments = await fetchComments(id)
    return(
        <ul> 
            {comments.map((comment:any) => (
                <li key={comment.id}>
                    <h2 className="mt-[1.5rem] text-violet-300">{comment.name}</h2>
                    <p className="mt-[0.5rem]">{comment.body}</p>
                </li>
            ))}
        </ul>
    )
}