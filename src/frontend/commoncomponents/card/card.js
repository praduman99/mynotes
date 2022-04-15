
import React from 'react'
import '../../commonstyles/Globalstyles.css'
import './style.css'
import {Link} from 'react-router-dom'
const Card = (props) => {
  // const {title , pinned , note , created_date  } = props?.data
  return (
    <>
    
    <div className='card-container flex-col' >
      <div className='flex-row content-flexspace'>
        <h3 className='card-heading'>Untitled</h3>
        <p>star</p>
      </div>
      <div className='margin'>

        <p className='text-size' >rogushroiguhsrgohsrgl
        rogushroiguhsrgohsrgl
        rogushroiguhsrgohsrgl
        rogushroiguhsrgohsrgl
        rogushroiguhsrgohsrgl
        rogushroiguhsrgohsrgl


     
        </p>
      </div>
      <div className='flex-row content-flexspace'>
        <h5 className='date'>Created on 22/22/2222</h5>

        <div className='flex-row content-flexspace'>
    
         <p className='action-button'>Edit</p>
    
         <p  className='action-button'>Delete</p>
        
         <p  className='action-button'>Archive</p>
        

        </div>
      </div>


    </div>
    </>
  )
}

export default Card