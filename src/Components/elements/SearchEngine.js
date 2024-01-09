import React, { useRef } from 'react';
import bg1 from './images/bg-1.png';
import bg2 from './images/bg-2.png';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function SearchEngine(props) {
  const [query,setQuery] = useState("");
  const [list,setList] = useState([]);
  const dataref = useRef(String);

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  useEffect(()=>{
    axios.post(`${process.env.REACT_APP_BASE_URL}/allitem`,{table:"vegetables"})
    .then(res => {
      setList(res.data)
    })
  },[])
  useEffect(()=>{console.log(list)},[list])
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/search/${dataref.current.value}`)
  }
  return (
    <section id='search-banner'>
      <img src={bg1} alt="img" className='bg-1' />
      <img src={bg2} alt="img" className='bg-2' />

      <div className="search-banner-text">
        <h1>{props.heading}</h1>
        <strong>#Free delivery on purchase of at least 200</strong>
      <form onSubmit={handleClick} className='search-box'>
        <i className='fas fa-search'></i>
        <input ref={dataref} type="text" onChange={handleChange} list='queryy' className='search-input' placeholder='search your daily grocery' value={query} required />
        <datalist id='queryy'>
          {
            list.map((item,i)=>{
              return(
                <option value={`${item.title}`}></option>
              )
            })
          }
        </datalist>
        <input type="submit" className='search-btn' />
      </form>
      </div>

    </section>
  )
}

export default SearchEngine
