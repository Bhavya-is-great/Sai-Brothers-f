import React,{useState} from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import Item from './item2';
import { Link } from 'react-router-dom';
// import gdfs from '../../config/Getdata';

function Fruits() {
  const [items,setItems] = useState([]);
  const [listi , setList] = useState([]);
  const [data , setData] = useState([]);

  // const mergeitems = (values) => {
  //   // setValue(values);
  //   // setList(...listo , value);
  //   console.log(values)
  // }

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

  // useEffect(()=>{
  //   setList(...listo , value)
  // },[listo])

  const final = () => {
    localStorage.setItem('listf' , JSON.stringify(listi))
  }

  // function getcartp() {
  //   console.log("Done")
  // }

  useEffect(() => {
    axios.post('https://sai-brothersbackend.onrender.com/allitem',{table:"fruits"})
      .then(res => {
        console.log("DONE");
        console.log(res.data)
        setItems(res.data);
      })
      .catch(err => console.log(err))
  },[])

  return (
    <section id='popular-product'>
      <div className="popular-heading">
        <h3>Fruits</h3><br />
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

export default Fruits
