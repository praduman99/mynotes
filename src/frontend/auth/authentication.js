import React,{useState} from 'react'
import { Link, Navigate } from 'react-router-dom'
import { API, Server_url } from '../adapters/apis'
import '../commonstyles/Globalstyles.css'
import './style.css'
import { postAuthCall } from '../adapters/callmethods'
const Authentication = () => {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [auth, setAuth] = useState('')

const login=()=>{
 
  const url = Server_url+API.auth.login
  const  requestdata = {email : email ,password : password}
  
  postAuthCall(url,requestdata)
  .then(res=>res.json())
  .then(response =>
    
    {
      if (response.status === 200) {
          setAuth(response.encodedToken)
   
        localStorage.setItem("token", response.encodedToken)
   
  }
  }
  )
}
  return (
    <div className='auth-container content-center  padding'>
      <div>
      <h1 className='color-lightblue'>signup</h1>
      <div >
        <h4>email :</h4>
        <input  onChange={(e)=>setEmail(e.target.value)} placeholder='Email' className='auth-input'/>
        <h4>password :</h4>
        <input onChange={(e)=>setPassword(e.target.value)}  placeholder='Password' className='auth-input'/>
        
      </div>
      <button onClick={()=>{
        login()
      }} className='button'>
          signup
        </button>
      <p><Link to='/'>Back to home page</Link></p>
      </div>
    </div>
  )
}

export default Authentication 