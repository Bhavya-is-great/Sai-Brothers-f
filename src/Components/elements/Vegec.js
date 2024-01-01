import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Vegec() {

    const [items, setItems] = useState([]);

    function getdata123() {
        axios.post(`${process.env.REACT_APP_BASE_URL}/allitem`, { table: "vegetables" })
            .then(res => {
                console.log("DONE");
                console.log(res.data)
                setItems(res.data);
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getdata123()
        return () => {
            console.log('This will be logged on unmount');
        };
    }, [])

    useEffect(() => {
        console.log(items)
    }, [items])

    const navigate = useNavigate();

    const handleDelete = (id) => {
        axios.post(`${process.env.REACT_APP_BASE_URL}/deleteitem`,{table:"vegetables",id:id})
        .then(res => {
            if (res.data.deleted) {
                navigate('/developer')
            }
        })
        .catch(err => console.log(err));
    }

    return (
        <div className='container'>
            <h2>Edit Vegetables</h2>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>---------------------</th>
                </tr>
                {items.map((item) => {
                    return (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td><Link to={`/updatevege/${item.id}`} className='btn btn-primary mx-2'>Change</Link><button onClick={() => handleDelete(item.id)} className='btn btn-danger'>Delete</button></td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default Vegec
