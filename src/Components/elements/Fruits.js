import React,{useRef, useState} from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import Item from './item2';
import { Link } from 'react-router-dom';
// import gdfs from '../../config/Getdata';
import loadinggif from './images/loadinggif.svg';

function Fruits() {
  const [items,setItems] = useState([]);
  const [listi , setList] = useState([]);
  const [data , setData] = useState([]);
  const loadingref = useRef(null)
  const loadingref2 = useRef(null)

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
    // loadingref.current.style.display = "block";
    // loadingref2.current.style.display = "block";
    axios.post(`${process.env.REACT_APP_BASE_URL}/allitem`,{table:"fruits"})
    .then(res => {
        // loadingref.current.style.display = "none";
        // loadingref2.current.style.display = "none";
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
      {/* <div className="loadingmain">
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
      </div> */}
      <div className="product-container">
        {
          // items.map((list) => {
         // return(<Item mergeitems={mergeitems} key={list.id} title={list.title} quantity={list.quantity} price={list.price} image={list.image} />)
         // })
        }
    <h1>Will be started Soon...</h1>
      </div>
        <Link to="/cart" className="send-btn" onClick={final}>Finalize Order</Link>
    </section>
  )
}

export default Fruits
