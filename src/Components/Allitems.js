import React from 'react';
import SideBar from './elements/Sidebar';
import Category from './elements/Category';
import { Outlet } from 'react-router-dom';

function AllItems() {
  return (
    <div>
      <SideBar/>
      <Category/>
      <Outlet/>
    </div>
  )
}

export default AllItems