import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import validate from '../js/fruitsValidation';

function ImportFD() {

    const [values, setValues] = useState({
        titile: "",
        quantity: "",
        price: "",
        image: "",
    });

    const [errors, setErrors] = useState({});
    const [titlet, setTitlet] = useState('');
    const [quantityt, setQuantityt] = useState('');
    const [pricet, setPricet] = useState('');
    const [imaget, setImaget] = useState('');

    const handleChangetitle = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
        setTitlet(event.target.value);
    }
    const handleChangequantity = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
        setQuantityt(event.target.value);
    }
    const handleChangeprice = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
        setPricet(event.target.value);
    }
    const handleChangeimage = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
        setImaget(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validate(values));
        if (errors.price === "" && errors.title === "" && errors.image === "" && errors.quantity === "") {
            console.log("Sending");
            axios.post('https://sai-brothersbackend.onrender.com/additem', { title: titlet, quantity: quantityt, price: pricet, image: imaget, table: "fruits" })
                .then(res => {
                    alert("Item added");
                    setTitlet('');
                    setQuantityt('');
                    setPricet('');
                    setImaget('');
                    console.log(res)
                })
                .catch(err => console.log(err))
            alert("Item added");
            setTitlet('');
            setQuantityt('');
            setPricet('');
            setImaget('');
        }
    }



    return (
        <div className='m container'>

            <div className="importitems">
                <h1>Import Fruits</h1>
                <div>
                    <form action="" className='search-box1 orderform'>

                        <div className="search-item">
                            <label htmlFor="title"></label>
                            <input type="text" value={titlet} className='search-input' onChange={handleChangetitle} id='title' name='title' placeholder='Input name of item' />
                        </div>

                        <div className="search-item">
                            <label htmlFor="quantity"></label>
                            <input type="number" value={quantityt} className='search-input' onChange={handleChangequantity} id='quantity' name='quantity' placeholder='Input Quantity here' />
                        </div>

                        <div className="search-item">
                            <label htmlFor="price"></label>
                            <input value={pricet} type="number" className='search-input' onChange={handleChangeprice} id='price' name='price' placeholder='Input Price Here' />
                        </div>

                        <div className="search-item">
                            <label htmlFor="image"></label>
                            <input type="text" value={imaget} className='search-input' onChange={handleChangeimage} id='image' name='image' placeholder='Input link for image' />
                        </div>


                        <input onClick={handleSubmit} type="submit" value="Add" className='send-btn' />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ImportFD
