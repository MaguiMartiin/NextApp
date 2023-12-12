import Link from "next/link"

const fetchPostId = (id:any) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res=>res.json())
}

export default async function Post ({params}: any) {
    const { id }= params
    const post = await fetchPostId(id)
    return(
        <article>
            <h1 className=" text-violet-400 mt-[1rem] mb-[1rem]">{post.title}</h1>
            <p>{post.body}</p>
            <Link href={`https://jsonplaceholder.typicode.com/posts/${id}/comments`} className=" bg-gray-500 p-[0.5rem] mt-[1rem] w-fit flex">
                Ver comentarios
            </Link>
        </article>
    )
}