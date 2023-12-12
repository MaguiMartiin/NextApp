export default function Post ({params}: any) {
    const { id }= params
    return(
        <div>Esto es un post {id}</div>
    )
}