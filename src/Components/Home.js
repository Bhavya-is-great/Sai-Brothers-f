import React, { useEffect } from 'react';
import SideBar from './elements/Sidebar'
import SearchEngine from './elements/SearchEngine'
import PopularProducts from './elements/PopularProducts';
import { useNavigate } from 'react-router-dom';
import Footer from './elements/Footer';




function Home() {
  useEffect(() => {
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

    if (localStorage.getItem("lists")) {

      // LocalStorage key already exists, so do nothing.

    } else {

      // LocalStorage key doesn't exist, so create it.

      localStorage.setItem("pre", JSON.stringify([]));

    }

  }, [])
  const navigate = useNavigate();
  return (
    <div>
      <SideBar />
      <SearchEngine heading="Order your daily Groceries" />
      <br />
      <form>
        <input type="button" value="All items" onClick={() => navigate('/allitems')} className="orderform send-btn hoverbtn" />
      </form>
      <PopularProducts />
      {/* <Footer/> */}
    </div>
  )
}

export default Home
