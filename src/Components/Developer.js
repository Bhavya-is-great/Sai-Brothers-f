import React, { useEffect, useState } from 'react'
import SideBar from './elements/Sidebar'
import SearchEngine from './elements/SearchEngine'
import { Outlet,Link, useNavigate } from 'react-router-dom'
// import ImportSystem from './elements/ImportSystem'

function Developer() {

  const navigate = useNavigate();

  const password = process.env.REACT_APP_PASSWORD;

  const functionsatrt = () => {
      let verify = prompt("Enter Password:");
      if (verify === password) {
        alert("Access Granted");
      }else{
        navigate('/')
      }
  }
  useEffect(()=>{
      functionsatrt()
  },[])


  return (
    <>
        <SideBar/>
        <SearchEngine heading="Sai Brothers Developer Site" />
        <div className='cont container'>
          <Link className='send-btn' to='importp'>Import Popular Products</Link>
          <Link className='send-btn' to='importvege'>Import Vegetables</Link>
          <Link className='send-btn' to='importfd'>Import Fruits</Link>
          <Link className='send-btn' to='fruitsc'>Change Fruits</Link>
          <Link className='send-btn' to='vegec'>Change Vegetables</Link>
          <Link className='send-btn' to='ppc'>Change Popular Products</Link>
        </div><br/><br/><br/><br/><br />
        <Outlet/>
    </>
  )
}

export default Developer
