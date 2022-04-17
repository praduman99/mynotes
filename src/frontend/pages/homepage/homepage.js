
import React from 'react'
import '../../commonstyles/Globalstyles.css'
import './style.css'
import notes from '../../assets/img/note.png'
import { Link, NavLink } from 'react-router-dom'
import Authentication from '../../auth/authentication'
const Homepage = (props) => {
    return (

        <div className='content-flexspace flex-wrap  container-padding' >

            <div>
                <img  src={notes}  style={{ width: "100%",
  height: "auto"}}/>
            </div>

            <div className='text-container'>
                <h1 className='heading'>
                <span className='color-lightblue'>My</span>Notes
                </h1>
                <h2 className='sub-heading margin-top'>
                   Meet your Modern
                </h2>

                <h2 className='sub-heading  color-lightblue margin-top'>
                     Note Taking App
                </h2>
                <p className='flex-wrap text-size margin-top'>
                    Manage your daily tasks and workflows in a modern way and boost your efficiency without any efforts.
                </p>

                <div className='flex-col margin-top'>
                    <NavLink to='/auth' >
                <button className='button'>
              start making notes
                </button>
                </NavLink>
                
                    <p className='self-center'> Already have an account ?</p>
                </div>
            </div>


        </div>
    

    )
}

export default Homepage