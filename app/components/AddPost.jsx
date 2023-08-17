"use client"

import { useState } from 'react'
import Modal from './Modal'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const AddPost = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [post, setPost] = useState({})
    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("POST DATA :::", post)
        axios.post('/api/posts', post).then(res => {
            console.log(res)
        }).catch(err => console.error(err))
            .finally(() => {
                setModalOpen(false);
                setPost({});
                router.refresh()
            })
    }

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setPost(prevState => ({ ...prevState, [name]: value }))
    }

    return (
        <div>
            <button onClick={() => setModalOpen(true)} className='bg-blue-700 text-white p-3'>Add New Post</button>
            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                <form className='w-full' onSubmit={handleSubmit}>
                    <h1 className='text-2xl pb-3'>Add New Post</h1>

                    <input
                        type='text'
                        placeholder='title'
                        name='title'
                        className='w-full p-2'
                        onChange={handleChange}
                    />

                    <input
                        type='text'
                        placeholder='description'
                        name='description'
                        className='w-full p-2 my-5'
                        onChange={handleChange}
                    />
                    <button type='submit' className='bg-blue-700 text-white px-5 py-2'>Submit</button>
                </form>
            </Modal>
        </div>
    )
}

export default AddPost