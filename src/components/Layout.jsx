import React from 'react'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <div>
        <Outlet/>
            <footer>
                <p>31.01.24</p>
            </footer>
    </div>
  )
}

export default Layout