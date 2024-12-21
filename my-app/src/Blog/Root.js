import React from 'react'
import { Outlet } from 'react-router-dom'
import MainFrame from './MainFrame'
import SideBar from './SideBar'
const Root = () => {
  return (
    <div className='flex flex-wrap '>
        <SideBar/>
        <div className='order-last w-[1000px]'>
            <Outlet/>
        </div>
        
       

      
    </div>
  )
}

export default Root
