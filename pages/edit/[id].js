import AppLayout from '@/src/components/AppLayout'
import MetaData from '@/src/components/MetaData'
import EditTodo from '@/src/features/EditTodo'
import Navbar from '@/src/components/Navbar'
import React from 'react'

const index = () => {
  return (
    <>
    <AppLayout>
      <MetaData title="Edit Todo"/>
      <EditTodo />
    </AppLayout>
    </>
  )
}

export default index