import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const template = () => {
  return (
    <>
        <Header/>
        <main  className="max-w-[1000px] mx-auto text-neutral flex flex-col justify-center items-center relative z-10">
          {<Outlet/>}
        </main>
    </>
  )
}

export default template
