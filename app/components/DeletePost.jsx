"use client"
import axios from 'axios'
import React from 'react'
import { useRouter } from 'next/navigation'

const DeletePost = ({ id }) => {
    const router = useRouter()
    const deleteItem = async (postID) => {
        axios.delete("http://localhost:3000/api/posts/" + postID)
            .then((resp) => console.log("Post Successfully Deleted"))
            .catch(err => console.error("ERROR while deleted post :::", err))
            .finally(() => {
                router.refresh()
            })
    }

    return (
        <button onClick={() => deleteItem(id)} className='bg-amber-700 px-2 -my-6 text-white float-right'>Delete</button>
    )
}

export default DeletePost