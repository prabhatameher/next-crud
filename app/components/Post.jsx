import React from 'react'
import DeletePost from './DeletePost'

const Post = ({ post }) => {
    return (
        <div className='p-3 my-5 bg-slate-200' key={post.id} >
            <h1 className='text-2xl font-bold'>{post.title}</h1>
            <p>{post.description}</p>
            <DeletePost id={post.id} />
        </div>
    )
}

export default Post