import React, { useEffect,useState } from 'react'
import Item from './item';
import { Link } from 'react-router-dom';
import axios from 'axios';


function PopularProducts() {
  const [item,setItem] = useState([]);
  const [list,setList] = useState([]);
  const [data,setData] = useState([]);

    useEffect(()=>{
      axios.post('https://sai-brothersbackend.onrender.com/allitem',{table:"pproducts"})
      .then(res => {
        console.log("DONE");
        console.log(res.data)
        setItem(res.data);
      })
      .catch(err => console.log(err))
    },[])

    function addlist(orderData) {
      console.log(orderData);
      setData(orderData);
    }

    useEffect(()=>{
      setList([...list,data]);
    },[data])

    useEffect(()=>{
      console.log(list);
    },[list])

    const finalize = () => {
      localStorage.setItem("list",JSON.stringify(list));
    }

  return (
    <section id='popular-product'>
      <div className="popular-heading">
        <h3>Popular Products</h3>
        <span>All</span>
      </div>
      <div className="product-container">
        {
          item.map((list) => {
            return(<Item order={addlist} key={list.id} title={list.title} quantity={list.quantity} price={list.price} image={list.image} />)
          })
        }
      </div>
        <Link to="/cart" onClick={finalize} className="send-btn">Finalize Order</Link>
    </section>
  )
}

export default PopularProducts
