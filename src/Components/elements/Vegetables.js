import React from 'react'
import { useState,useEffect } from 'react'
import Item from './item2'
import { Link } from 'react-router-dom'
import axios from 'axios'


function Vegetables() {
  const [items,setItems] = useState([]);
  const [listi , setList] = useState([]);
  const [data , setData] = useState([]);

  function mergeitems(list) {
    setData(list);
    console.log(data)
  }

  useEffect(() => {
    console.log(data);
    setList([...listi,data])
  }, [data]);

  useEffect(()=>{
    console.log(listi);
  },[listi])

  const final = () => {
    localStorage.setItem('listv' , JSON.stringify(listi))
  }

//   function getcartp() {
//     console.log("Done")
//   }

  useEffect(() => {
    axios.post(`${process.env.REACT_APP_BASE_URL}/allitem`,{table:"vegetables"})
      .then(res => {
        console.log("DONE");
        console.log(res.data)
        setItems(res.data);
      })
      .catch(err => console.log(err))
  },[])

  return (
    <section className='m' id='popular-product'>
      <div className="popular-heading">
        <h3>Vegetables</h3><br />
      </div>
      <div className="product-container">
        {
          items.map((list) => {
            return(<Item mergeitems={mergeitems} key={list.id} title={list.title} quantity={list.quantity} price={list.price} image={list.image} />)
          })
        }
      </div>
        <Link to="/cart" className="send-btn" onClick={final}>Finalize Order</Link>
    </section>
  )
}

export default Vegetables
