import React from 'react';
import SideBar from './elements/Sidebar'
import SearchEngine from './elements/SearchEngine'
import PopularProducts from './elements/PopularProducts';

function Home() {
  return (
    <div>
      <SideBar />
      <SearchEngine heading="Order your daily Groceries" />
      <PopularProducts />
    </div>
  )
}

export default Home
