import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'
// import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700']
})

export const metadata = {
  title: 'Next-JS CRUD',
  description: 'We are using nextjs, prisma and mongoDB',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className='max-w-4xl mx-auto px-5 my-5'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
