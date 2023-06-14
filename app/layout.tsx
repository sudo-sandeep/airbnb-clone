import Modal from './components/Modal'
import Navbar from './components/Navbar'
import './globals.css'
import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Air Bnb',
  description: 'This is an Air Bnb Clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Modal isOpen title='New Modal' actionLabel="Login" secondaryActionLabel="Signup"/>
        <Navbar/>
        {children}</body>
    </html>
  )
}
