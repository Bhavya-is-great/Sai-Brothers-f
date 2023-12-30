import React , {useEffect} from 'react';
import SideBar from './elements/Sidebar'
import SearchEngine from './elements/SearchEngine'
import PopularProducts from './elements/PopularProducts';




function Home() {
  useEffect(()=>{
  if (localStorage.getItem("list")) {

      // LocalStorage key already exists, so do nothing.

    } else {

      // LocalStorage key doesn't exist, so create it.

      localStorage.setItem("list", JSON.stringify([]));

  }
  if (localStorage.getItem("listv")) {

      // LocalStorage key already exists, so do nothing.

    } else {

      // LocalStorage key doesn't exist, so create it.

      localStorage.setItem("listv", JSON.stringify([]));

  }
  if (localStorage.getItem("listf")) {

      // LocalStorage key already exists, so do nothing.

    } else {

      // LocalStorage key doesn't exist, so create it.

      localStorage.setItem("listf", JSON.stringify([]));

  }

  if (localStorage.getItem("pre")) {

      // LocalStorage key already exists, so do nothing.

    } else {

      // LocalStorage key doesn't exist, so create it.

      localStorage.setItem("pre", JSON.stringify([]));

  }
 
},[])
  return (
    <div>
      <SideBar />
      <SearchEngine heading="Order your daily Groceries" />
    <br /><br /><br />
      <input type="button" value="All items" className="orderform send-btn hoverbtn" />
      <PopularProducts />
    </div>
  )
}

export default Home
