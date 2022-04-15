import React from 'react'
import Card from '../../commoncomponents/card/card'
import Navbar from '../../commoncomponents/navbar/navbar'
import Searchbar from '../../commoncomponents/searchbar/searchbar'


const Dashboard = () => {
  return (
    <>
    <h1 className='heading self-center'>Dashboard</h1>
    <div className='flex-col  flex-wrap '>
      <Searchbar Onchange={(e)=>{console.log(e.target.value)}}/>
      <Card data={[]}/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>

      <Card/>
    
    </div>
    </>
  )
}

export default Dashboard