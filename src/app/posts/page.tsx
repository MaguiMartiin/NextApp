import style from './Posts.module.css'
import LikeButton from './LikeButton'
import Link from 'next/link'

const fetchPost = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
}

export default async function Posts () {
    const posts = await fetchPost()
    return(
        <section>
            {posts.slice(0,5).map((post:any) => (
                <article key={post.id}>
                    <Link href='/posts/[id]' as={`/posts/${post.id}`}>
                        <h2 className={style.h2}>{post.title}</h2>
                        <p>{post.body}</p>
                        <LikeButton id={post.id}/>
                    </Link>
                </article>
            ))}
        </section>
    )
}