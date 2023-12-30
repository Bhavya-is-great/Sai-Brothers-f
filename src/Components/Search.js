import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SideBar from './elements/Sidebar';
import axios from 'axios';
import Item from './elements/item';

function Search() {
  const [oneitem, setOneitem] = useState([]);
  const { name } = useParams();
  // const finalname = newname.join(" ")
  console.log(name)
  useEffect(() => {
    axios.post('https://sai-brothersbackend.onrender.com/getitemn', { table: "vegetables", name: name })
      .then(res => setOneitem(res.data))
      .catch(err => console.log(err))
  }, [])
  
  const navigate = useNavigate();
  const  Addlist = (orderData) => {
    console.log(orderData);
    localStorage.setItem("lists",JSON.stringify([orderData]));
  }
  
  return (
    <div>
      <SideBar />
      <h3>Search results</h3>
      {
        oneitem.map((listitem) => {
          return (
            <Item order={Addlist} key={listitem.id} title={listitem.title} quantity={listitem.quantity} price={listitem.price} image={listitem.image} />
          )
        })
      }
      <button onClick={()=>{navigate('/cart')}} className='send-btn'>Finalize Order</button>
    </div>
  )
}

export default Search
