import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


function Updateppc() {

    const { id } = useParams();
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');

    useEffect(() => {
        axios.post('https://sai-brothersbackend.onrender.com/getitem',{table:"pproducts",id:id})
        .then(res => {
            setName(res.data[0].title)
            setPrice(res.data[0].price)
            setImage(res.data[0].image)
            setQuantity(res.data[0].quantity)
        })
        .catch(err => console.log(err))
    }, [])

    const navigate = useNavigate()

    const handlesubmit = (e) => {
        e.preventDefault()
        axios.post('https://sai-brothersbackend.onrender.com/updateditem',{table:"pproducts",title:name,quantity:quantity,price:price,image:image,id:id})
        .then(res => {
            // console.log(res)
            if (res.data.updated) {
                navigate('/developer')
            }
        })
        .catch(err => console.log(err));
        // navigate('/developer')
    }

    return (
        <div className='d-flex vh-100 bg-dark justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form>
                    <h2>Update item</h2>
                    <div className='mb-2'>
                        <label htmlFor="name">Name</label>
                        <input value={name} onChange={e => setName(e.target.value)} type="text" id='name' placeholder='Name' className='form-control' />
                    </div>
                    <div className='mb2'>
                        <label htmlFor="price">Price</label>
                        <input value={price} onChange={e => setPrice(e.target.value)} type="number" id='price' placeholder='Price' className='form-control' />
                    </div>
                    <div className='mb2'>
                        <label htmlFor="image">Image</label>
                        <input type="text" value={image} id='image' onChange={e => setImage(e.target.value)} placeholder='Image' className='form-control' />
                    </div>
                    <button onClick={handlesubmit} type='submit' className='m-2 btn btn-success'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default Updateppc
