import React, { useEffect, useRef, useState } from 'react'
import Item from './item';
import { Link } from 'react-router-dom';
import axios from 'axios';
import loadinggif from './images/loadinggif.svg'


function PopularProducts() {
  const [item, setItem] = useState([]);
  const [list, setList] = useState([]);
  const [list1, setList1] = useState([]);
  const [data1, setData1] = useState([]);
  const [data, setData] = useState([]);
  const loadingref = useRef(null);
  const loadingref2 = useRef(null);

  useEffect(() => {
    loadingref.current.style.display = "block";
    loadingref2.current.style.display = "block";




    axios.post(`${process.env.REACT_APP_BASE_URL}/getlist`, { data: "1" })
      .then(res => {
        axios.post(`${process.env.REACT_APP_BASE_URL}/allitem`, { table: "vegetables" })
          .then(res1 => {
            console.log("DONE");
            // setList1(res.data[0].list)
            const stringArray = res.data[0].list.split("\n");
            console.log(stringArray)
            const DictArray = res1.data
            const sortedDictArray = DictArray.sort((dict1, dict2) => {
              let dict1Index = stringArray.indexOf(dict1.title);
              let dict2Index = stringArray.indexOf(dict2.title);

              if (dict1Index === -1) {
                dict1Index = stringArray.length + 1;
              }

              if (dict2Index === -1) {
                dict2Index = stringArray.length + 1;
              }

              return dict1Index - dict2Index;
            });
            console.table(sortedDictArray);
            console.log(stringArray);
            setData1(sortedDictArray);
            loadingref.current.style.display = "none";
            loadingref2.current.style.display = "none";
            // console.log(res1.data)
            // setItem(res1.data);
          })
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))
  }, [])

  function addlist(orderData) {
    console.log(orderData);
    setData(orderData);
  }

  useEffect(() => {
    setList([...list, data]);
  }, [data])

  useEffect(() => {
    console.log(list);
  }, [list])

  function funcc() {
    if (JSON.stringify(list1) !== "[]") {
      var stringArray = list1.split("\n");

      const sortedDictArray = item.sort((dict1, dict2) => {
        let dict1Index = stringArray.indexOf(dict1.title);
        let dict2Index = stringArray.indexOf(dict2.title);

        if (dict1Index === -1) {
          dict1Index = stringArray.length + 1;
        }

        if (dict2Index === -1) {
          dict2Index = stringArray.length + 1;
        }

        return dict1Index - dict2Index;
      });
      console.log(sortedDictArray)
      console.log(stringArray);
      setData1(sortedDictArray);
      loadingref.current.style.display = "none";
      loadingref2.current.style.display = "none";
    }
  }

  useEffect(() => {
    // console.log(`\n\n\n\n\n\n\n\n\n\n\n`);
    console.log(data1)
    // console.log(`\n\n\n\n\n\n\n\n\n\n`);
    // if (JSON.stringify(data1) === '[]') {
    //   console.log("KAR RAHA HU")
    //   funcc()
    // }else{
    //   console.log(JSON.stringify(data1))
    // }
  }, [data1])

  useEffect(() => {
    console.log(list1);
    if (JSON.stringify(list1) !== "[]") {
      var stringArray = list1.split("\n");

      const sortedDictArray = item.sort((dict1, dict2) => {
        let dict1Index = stringArray.indexOf(dict1.title);
        let dict2Index = stringArray.indexOf(dict2.title);

        if (dict1Index === -1) {
          dict1Index = stringArray.length + 1;
        }

        if (dict2Index === -1) {
          dict2Index = stringArray.length + 1;
        }

        return dict1Index - dict2Index;
      });
      console.log(sortedDictArray)
      console.log(stringArray);
      setData1(sortedDictArray);
      loadingref.current.style.display = "none";
      loadingref2.current.style.display = "none";
    }
  }, [list1])

  const finalize = () => {
    localStorage.setItem("list", JSON.stringify(list));
  }

  return (
    <section id='popular-product'>
      <div className="popular-heading">
        <h3>All Products</h3>
        <span>All</span>
      </div>
      <div className="loadingmain">
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
      </div>
      <div className="product-container">
        {
          data1.map((listitem) => {
            return (<Item order={addlist} key={listitem.id} title={listitem.title} quantity={listitem.quantity} price={listitem.price} image={listitem.image} />)
          })
        }
      </div>
      <Link to="/cart" onClick={finalize} className="send-btn">Finalize Order</Link>
    </section>
  )
}

export default PopularProducts
