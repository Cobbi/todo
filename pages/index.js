import Image from 'next/image'
import { Inter } from 'next/font/google'
import AppLayout from '@/src/components/AppLayout'
import Navbar from '@/src/components/Navbar'
import MetaData from '@/src/components/MetaData'
import TodoList from '@/src/features/TodoList'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <AppLayout>
      <MetaData title='Todo List'/>
      <div className='p-24 h-screen sm:h-screen'>
        <Navbar />
        <TodoList />
      </div>
    </AppLayout>
    </>
      
  )
}
