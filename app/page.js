import Link from "next/link"

const Homepage = () => {
  return (
    <div>
      <h1 className="text-4xl">Homepage</h1>
      <p className='py-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, labore dolor? Vero accusantium ducimus laboriosam eius, ea omnis nostrum enim beatae? Excepturi laboriosam accusantium expedita eos distinctio deleniti id neque?</p>
      <Link href='/about'>About</Link>
    </div>
  )
}

export default Homepage