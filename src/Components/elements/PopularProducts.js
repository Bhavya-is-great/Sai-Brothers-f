import React, { useEffect, useRef, useState } from 'react'
import Item from './item';
import { Link } from 'react-router-dom';
import axios from 'axios';
import loadinggif from './images/loadinggif.svg'


function PopularProducts() {
  const [item, setItem] = useState([]);
  const [list, setList] = useState([]);
  const [data, setData] = useState([]);
  const loadingref = useRef(null);
  const loadingref2 = useRef(null);

  useEffect(() => {
    loadingref.current.style.display = "block";
    loadingref2.current.style.display = "block";
    axios.post(`${process.env.REACT_APP_BASE_URL}/allitem`, { table: "vegetables" })
      .then(res => {
        loadingref.current.style.display = "none";
        loadingref2.current.style.display = "none";
        console.log("DONE");
        console.log(res.data)
        setItem(res.data);
      })
      .catch(err => console.log(err))
  }, [])

  function addlist(orderData) {
    console.log(orderData);
    setData(orderData);
  }

  useEffect(() => {
    setList([...list, data]);
  }, [data])

  useEffect(() => {
    console.log(list);
  }, [list])

  const finalize = () => {
    localStorage.setItem("list", JSON.stringify(list));
  }

  return (
    <section id='popular-product'>
      <div className="popular-heading">
        <h3>All Products</h3>
        <span>All</span>
      </div>
      <div className="loadingmain">
        <div className="loadingdiv" ref={loadingref} style={{ display: 'none' }}>
          <img className='loadinggif' src={loadinggif} alt="Loading image" />
        </div>
        <div ref={loadingref2} className="loadingdiv">
          <h1>Loading
            <div class="loadingContainer">
              <div class="ball1"></div>
              <div class="ball2"></div>
              <div class="ball3"></div>
              <div class="ball4"></div>
            </div>
          </h1>
        </div>
      </div>
      <div className="product-container">
        {
          item.map((listitem) => {
            return (<Item order={addlist} key={listitem.id} title={listitem.title} quantity={listitem.quantity} price={listitem.price} image={listitem.image} />)
          })
        }
      </div>
      <Link to="/cart" onClick={finalize} className="send-btn">Finalize Order</Link>
    </section>
  )
}

export default PopularProducts
