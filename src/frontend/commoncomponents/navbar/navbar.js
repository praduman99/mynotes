import React from 'react'
import { Link } from 'react-router-dom'
import '../../commonstyles/Globalstyles.css'

import './style.css'
function Navbar() {
    return (
        <div className='content-flexspace flex-row flex-wrap'>
            <h2 className='heading logo-leftpad'> <span className='color-lightblue'>My</span>Notes </h2>
            <div className='flex-row'>

                <Link className='nav-item sub-heading' to="/">Home</Link>

                <Link className='nav-item sub-heading' to="/dashboard">Dashboard</Link>

                <Link className='nav-item sub-heading' to="/trash">delete</Link>

                <Link className='nav-item sub-heading' to="/archive">archive</Link>



            </div>

        </div>
    )
}

export default Navbar