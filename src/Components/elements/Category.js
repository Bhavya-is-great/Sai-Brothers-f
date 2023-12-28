import fruits from './images/download.png'
import vegetables from './images/download1.jpg'
import React from 'react'
import {Link} from 'react-router-dom'

function Category() {
    return (
        <section className='m' id='category'>
            <div className="category-heading">
                <h2>Category</h2>
                <span>All</span>
            </div>

            <div className="category-container">
                <Link to="fruits" className='category-box' disabled>
                    <img src={fruits} alt="img" />
                    <span>Fruits</span>
                </Link>
                <Link to="vegetables" className='category-box' disabled>
                    <img src={vegetables} alt="img" />
                    <span>Vegetables</span>
                </Link>
            </div>
        </section>
    )
}

export default Category
