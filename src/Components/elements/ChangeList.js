import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ChangeList() {
    const [value, setValue] = useState("")
    const handleChange = (e) => { setValue(e.target.value) }
    const navigate = useNavigate()
    useEffect(() => {
        axios.post(`${process.env.REACT_APP_BASE_URL}/getlist`, { data: "1" })
            .then(res => { setValue(res.data[0].list); console.log(res.data) })
            .catch(err => console.log(err))
    }, [])
    const handleSubmit = (e) => {
        axios.put(`${process.env.REACT_APP_BASE_URL}/setlist`, { list: value })
            .then(res => {
                if (res.data.updated) {
                    navigate('/developer')
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <div><br /><br /><br /><br />
        <div>
            <textarea value={value} onChange={handleChange} name="area" id="area" cols="30" rows="10" style={{ width: '300px', height: '300px' }} ></textarea>
        </div>
            <button onClick={handleSubmit} className='send-btn' >Update</button>
        </div>
    )
}

export default ChangeList
