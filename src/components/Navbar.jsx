import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  // const [showModal, setShowModal] = useState(false)
  
  return (
    <div className='flex m-4 p-4 justify-between gap-1 items-center'>
        <h1 className='flex text-3xl text-slate-900 mx-2 font-bold'>
          todo&nbsp;
          <span className='bg-blue-400 text-[28px] rounded-md capitalize text-white px-2 py-0.5'>
            list
          </span>
        </h1>  
        <h1 className='flex text-2xl 
        bg-blue-400 sm:text-sm text-white font-bold lg:px-4 lg:py-2 py-1 px-2 rounded-md'>
          <Link href={'/add-todo'}>
          Add &nbsp;
            <span>
            Todo
            </span>
          </Link>
        </h1>  
    </div>
  )
}

export default Navbar