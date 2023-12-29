import React, { useState } from 'react'
// import apple from './images/apple.png'
import {CiSquareMinus,CiSquarePlus} from 'react-icons/ci'
import { useEffect } from 'react';

function Item(props) {

  const [yes,setYes] = useState("");
  const [order_details,setOrder_details] = useState({})
  const [quantity,setQuantity] = useState(0);
  const [quantityg,setQuantityg] = useState(0);

  const lesskg = () => {
    if(quantity === 0){
      setQuantity(0);
    }else{
      setQuantity(quantity-1)
    }
  }
  const morekg = () => {
    setQuantity(quantity+1);
  }

  const lessg = () => {
    if(quantityg === 0){
      setQuantityg(0);
    }else{
      setQuantityg(quantityg-250)
    }
  }
  const moreg = () => {
    setQuantityg(quantityg+250);
  }

  useEffect(() => {
    props.order(order_details)
  }, [order_details]);
  
  const getdata = () => {
    setOrder_details({
      id : props.id,
      kg : quantity,
      g : quantityg,
      title : props.title,
      quantity : props.quantity,
      price : props.price,
      image : props.image,
      orderQuantity : `${quantity} kg ${quantityg} gram`,
    })
    setYes("Item added to cart")
  }

  return (
    <div className="mx-2 my-0 product-box">
            <img src={props.image} alt="img" />
            <strong>{props.title}</strong>
            <span className='quantity'>{props.quantity}kg</span>
            <span className='price'>{props.price}Rs</span>
            <span className='quantity-to-product'><button><CiSquareMinus onClick={lesskg} className='icon' /></button>{` ${quantity} kg`}<button><CiSquarePlus className='icon' onClick={morekg} /></button></span>
            <span className='quantity-to-product'><button><CiSquareMinus onClick={lessg} className='icon' /></button>{` ${quantityg} gram`}<button><CiSquarePlus className='icon' onClick={moreg} /></button></span>
            <span className='price'> {yes} </span>
            <span onClick={getdata} className='cart-btn'>
                <i className='fas fa-shopping-cart'></i> Add To Cart
            </span>
        </div>
  )
}

export default Item
