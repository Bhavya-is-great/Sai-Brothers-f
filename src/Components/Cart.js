import React, { useEffect, useRef, useState } from 'react'
import SideBar from './elements/Sidebar';
import emailjs from '@emailjs/browser';
import { Link, useNavigate } from 'react-router-dom';



// import WhatsApp from 'whatsapp-web';




function Cart() {


  const today = new Date();
  const f =new Intl.DateTimeFormat('en-us',{
    dateStyle : "short",
    timeStyle : "short",
  })
  const orderref = useRef(null);
  const [listv, setListv] = useState([]);
  const [listf, setListf] = useState([]);
  const [list, setList] = useState([]);
  const [lists, setLists] = useState([]);
  const [listpre, setListpre] = useState([]);
  const [data, setData] = useState([]);
  const [tp, setTp] = useState(300);
  const [userdata, setUserData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
    address: ``,
  })

  const navigate = useNavigate();

  var valuestoemail = {
    to: userdata.email,
    subject: "Thanks For Odering ",
    message: `
    Thankyou ${userdata.name} For Purchasing From Sai Brothers Your Order Will Be delivered As Soon as Possible
    Below are your order details

    ${data.map((item) => {
      return (
        `
          ==> Name: ${item.title}
          Quantity: ${item.orderQuantity}
          Price: ${item.price}
          Toatal Cost : ${Math.round(item.price * (item.kg + (item.g / 1000)))}

          `
      )
    })
      }

      Total Price = ${tp} Rs

      your order will be delivered at:
      ${userdata.address}

      For More Contact 
      9825062685 or 8460212523

      Date Ordered:${f.format(today)}
    
    `
  }

  const customer = () => {
    const serviceID = "service_jccchab"
    const templateID = "template_9rpvo7d";
    emailjs.send(serviceID, templateID, valuestoemail, "PZCZFtInrpai36KHE")
      .then(res => {
        alert("Order PLaced");
      })
  }

  const seller = (email) => {
    let values = {
      to: email,
      subject: "A order is placed",
      message: `
    There is a order Placed by ${userdata.name} you have
    to deliver below items on the below address:

    ${userdata.address}

    Below is the bill and order details:

    ${data.map((item) => {
        return (
          `
          ==> Name: ${item.title}
          Quantity: ${item.orderQuantity}
          Price: ${item.price}
          Toatal Cost : ${Math.round(item.price * (item.kg + (item.g / 1000)))}

          `
        )
      })
        }

      Total Price = ${tp} Rs

      The Mobile Number of ${userdata.name} is ${userdata.number}

      This is the message give by customer ${userdata.message}

      Date Ordered:${f.format(today)}
    
    `
    }
    const serviceID = "service_dew1k6r";
    const templateID = "template_9rpvo7d";
    // const Public = "PZCZFtInrpai36KHE";
    emailjs.send(serviceID, templateID, values, "PZCZFtInrpai36KHE")
      .then(res => {
        console.log("");
      })
  }

  const confirmorder = () => {
    if (JSON.stringify(list) === '[]' && JSON.stringify(listf) === '[]' && JSON.stringify(listv) === '[]') {
      alert("Please Purchase Something for placing order");
    } else {
      if (tp < 200) {
        // console.log(tp)
        alert("Please Purchase atleast of 200");
      } else {
        if (userdata.address !== '' || userdata.name !== '' || userdata.email !== '' || userdata.number !== '' || userdata.message !== '') {
          customer()
          const email1 = process.env.REACT_APP_EMAIL1
          const email2 = process.env.REACT_APP_EMAIL2
          const email3 = process.env.REACT_APP_EMAIL3
          seller(email1)
          seller(email2)
          seller(email3)
          setUserData({
            name: "",
            number: "",
            email: "",
            message: "",
            address: ``,
          })
          localStorage.setItem('list',JSON.stringify([]));
          localStorage.setItem('listv',JSON.stringify([]));
          localStorage.setItem('listf',JSON.stringify([]));
          localStorage.setItem('pre',JSON.stringify([]));
          localStorage.setItem('lists',JSON.stringify([]));
          localStorage.setItem('yn',"flase")
        } else {
          alert("Please Fill all details");
        }
      }
    }
  }
  
  useEffect(() => {

    setListpre(JSON.parse(localStorage.getItem("pre")).filter(item => item !== null && JSON.stringify(item) !== '{}'))
    setLists(JSON.parse(localStorage.getItem("lists")).filter(item => item !== null && JSON.stringify(item) !== '{}'))
    setList(JSON.parse(localStorage.getItem("list")).filter(item => item !== null && JSON.stringify(item) !== '{}'));
    setListf(JSON.parse(localStorage.getItem("listf")).filter(item => item !== null && JSON.stringify(item) !== '{}' && JSON.stringify(item) !== '[]'))
    // setLists(JSON.parse(localStorage.getItem("lists")).filter(item => item !== null && JSON.stringify(item) !== '{}' && JSON.stringify(item) !== '[]'))
    setListv(JSON.parse(localStorage.getItem("listv")).filter(item => item !== null && JSON.stringify(item) !== '{}' && JSON.stringify(item) !== '[]'))
  }, []);


  useEffect(() => {
    handleArray();
    return(()=>{
      console.log("Sai Brothers");
    });
  }, [listf])// eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    handleArray();
    return(()=>{
      console.log("Sai Brothers");
    });
  }, [lists])


  const total = () => {

    let totalexp = 0;

    data.forEach(element => {
      totalexp += Math.round(element.price * (element.kg + (element.g / 1000)))
    });

    // console.log(totalexp)
    setTp(totalexp)
  }
  
  
  function handleArray() {
    
    let newlist = [];
    
    listpre.forEach(element => {
      if (JSON.stringify(element) !== '[]') {
        newlist.push(element);
      }
    });
    list.forEach(element => {
      if (JSON.stringify(element) !== '[]') {
        newlist.push(element);
      }
    });
    listv.forEach(element => {
      if (JSON.stringify(element) !== '[]') {
        newlist.push(element);
      }
    });
    lists.forEach(element => {
      if (JSON.stringify(element) !== '[]') {
        newlist.push(element);
      }
    });
    listf.forEach(element => {
      if (JSON.stringify(element) !== '[]') {
        newlist.push(element);
      }
    });

    setData(newlist)
  }

  useEffect(() => {
    total();
    return(()=>{
      console.log("This is Console Log");
    });
    // eslint-disable-next-line
  }, [data])

  const handlechane = (event) => {
    setUserData(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
  }

  useEffect(() => {
    handleArray();
    return(()=>{
      console.log("Sai Brothers");
    });
    // eslint-disable-next-line
  }, [list])

  useEffect(() => {
    handleArray();
    return(()=>{
      console.log("Sai Brothers");
    });
    // eslint-disable-next-line
  }, [listv])

  const neworder = () => {
    localStorage.setItem('list',JSON.stringify([]));
    localStorage.setItem('listv',JSON.stringify([]));
    localStorage.setItem('listf',JSON.stringify([]));
    localStorage.setItem('pre',JSON.stringify([]));
    localStorage.setItem('lists',JSON.stringify([]));
    localStorage.setItem('yn',"false");
  }

  const continue1 = () => {
    localStorage.setItem('yn',"true")
    localStorage.setItem('pre',JSON.stringify(data))
    localStorage.setItem('listv',JSON.stringify([]))
    localStorage.setItem('listf',JSON.stringify([]))
    localStorage.setItem('list',JSON.stringify([]))
    localStorage.setItem('lists',JSON.stringify([]))
  }

  // optimisedata()

  return (
    <>
      <SideBar />
      <div className='container data'>
        <br /><br />
        <div>
          <h2>Order of Popular Products</h2>
          <table className='ordercart' ref={orderref} >
            <tr>
              <th><h4>Item Name</h4></th>
              <th><h4>Quantity</h4></th>
              <th><h4>Price Per Kg</h4></th>
              <th><h4>Total price</h4></th>
            </tr>
            {data.map((item) => {
              return (
                <tr>
                  <td>{`${item.title}`}</td>
                  <td> {`${item.orderQuantity}`} </td>
                  <td> {`${item.price}`} </td>
                  <td> {`${Math.round(item.price * (item.kg + (item.g / 1000)))}`} </td>
                </tr>
              )
            })}
            <tr>
              <td>Total</td>
              <td>-</td>
              <td>-</td>
              <td>{tp}</td>
            </tr>
          </table>

          <Link className='btn btncont' onClick={continue1} to='/allitems'>Continue Shopping...</Link>

          <p className='new'>Is there any mistake in order?<Link to="/allitems" onClick={neworder} className='linktonew'> Place a new one by deliting this</Link></p>

          <form action="" className='orderform'>
            <h1 style={{ margin: '10px' }}>Finalize Order</h1>
            <label htmlFor="name">Enter Your Full Name:</label><br />
            <input type="text" placeholder='Full Name' name='name' onChange={handlechane} /><br />
            <label htmlFor="number">Enter Your Phone Number:</label><br />
            <input type="text" placeholder='Phone Number' name='number' onChange={handlechane} /><br />
            <label htmlFor="email">Enter Your Email:</label><br />
            <input type="text" placeholder='Email' name='email' onChange={handlechane} /><br />
            <label htmlFor="message">Enter Your Message:</label><br />
            <input type="text" placeholder='Message' name='message' onChange={handlechane} /><br />
            <label htmlFor="address">Enter Your Address:</label><br />
            <textarea type="text" placeholder='Address' name='address' onChange={handlechane} /><br />
          </form>
        </div>
        <button className=' btn btn12 send-btn' onClick={confirmorder} >Place Order</button>

      </div>
    </>
  )
}

export default Cart
