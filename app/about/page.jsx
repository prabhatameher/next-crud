import Link from 'next/link'
import React from 'react'

const AboutPage = () => {
    return (
        <div>
            <h1 className='text-4xl'>About Page</h1>
            <p className='py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat exercitationem adipisci dolorem vitae fugiat delectus dolor blanditiis dolorum quos non sint dolore tempore similique, doloremque fuga suscipit fugit enim eveniet.
                Architecto recusandae quisquam, consequuntur incidunt iusto optio ipsa soluta culpa numquam deleniti odio aliquid, nemo quidem consequatur rerum! Voluptatibus voluptate minima ea tempore laudantium explicabo quisquam, sint aperiam facere sapiente.</p>
                <Link href='/'>Home</Link>

        </div>
    )
}

export default AboutPage