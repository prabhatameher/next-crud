import Link from "next/link"

const getPostData = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
    await new Promise((resolve) => setTimeout(resolve, 2000)) //wait 2 sec to show loading
    return resp.json()
}

const getUserData = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    await new Promise((resolve) => setTimeout(resolve, 2000)) //wait 2 sec to show loading
    return resp.json()
}

const page = async () => {
    // const data = await getPostData()
    const [posts, users] = await Promise.all([getPostData(), getUserData()]) //for multiple calling 
    return (
        <div>
            <h1 className="text-4xl">All available post</h1>
            <ul className="gap-2">
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
            <ul className="flex flex-col gap-5">
                {
                    posts.map(post => (
                        <Link key={post.id} href={`/posts/${post.id}`}>
                            <li className="bg-gray-100 p-5 cursor-pointer">
                                <h4 className="text-xl font-bold">{post.title}</h4>
                                <p>{post.body}</p>
                            </li>
                        </Link>
                    ))
                }
            </ul>
        </div>
    )
}

export default page