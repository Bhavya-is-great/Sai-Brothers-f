import React from 'react'
import bg1 from './images/bg-1.png'
import bg2 from './images/bg-2.png'



function SearchEngine(props) {
  return (
    <section id='search-banner'>
      <img src={bg1} alt="img" className='bg-1' />
      <img src={bg2} alt="img" className='bg-2' />

      <div className="search-banner-text">
        <h1>{props.heading}</h1>
        <strong>#Free delivery on purchase of at least 250</strong>
      <form action="" className='search-box'>
        <i className='fas fa-search'></i>
        <input type="text" className='search-input' placeholder='search your daily grocery' name='search' required />
        <input type="submit" className='search-btn' />
      </form>
      </div>

    </section>
  )
}

export default SearchEngine
