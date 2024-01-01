import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SideBar from './elements/Sidebar';
import axios from 'axios';
import Item from './elements/item';

function Search() {
  const [oneitem, setOneitem] = useState([]);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const [order, setOrder] = useState([]);
  const { name } = useParams();
  // const finalname = newname.join(" ")
  console.log(name)
  useEffect(() => {
    axios.post(`${process.env.REACT_APP_BASE_URL}/getitemn`, { table: "vegetables", name: name })
      .then(res => setOneitem(res.data))
      .catch(err => console.log(err))
    axios.post(`${process.env.REACT_APP_BASE_URL}/allitem`, { table: "vegetables"})
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  useEffect(()=>{
    console.log(data);
    const filteredArray = data.filter((dict) => dict.title.toLowerCase().includes(name.toLowerCase()));
    setList(filteredArray)
  },[data])
  
  const navigate = useNavigate();
  const  Addlist = (orderData) => {
    console.log(orderData);
    // localStorage.setItem("lists",JSON.stringify([orderData]));
    setOrder([...order,orderData])
  }
  
  return (
    <div>
      <SideBar />
      <h3>Search results</h3>
      <div className='product-container'>
      {
        list.map((listitem) => {
          return (
            <Item order={Addlist} key={listitem.id} title={listitem.title} quantity={listitem.quantity} price={listitem.price} image={listitem.image} />
          )
        })
      }
      </div>
      <button onClick={()=>{localStorage.setItem("lists",JSON.stringify(order));navigate('/cart')}} className='send-btn'>Finalize Order</button>
    </div>
  )
}

export default Search
