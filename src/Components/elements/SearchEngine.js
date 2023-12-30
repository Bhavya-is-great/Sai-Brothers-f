import React ,{useEffect,useState} from 'react';
import bg1 from './images/bg-1.png';
import bg2 from './images/bg-2.png';



function SearchEngine(props) {
const [list,setList] = useState([]);
  const [query,setQuery] = useState([]);
  useEffect(()=>{
    axios.post("https://sai-brothers.onrender.com/allitem",{table:"vegetables"})
    .then(res => {setList(res.data)})
    .catch(err => console.log(err))
  },[]);

const handleChange = (e) => {
  setQuery(e.target.value);
}

const handleSubmit = () => {}

  useEffect(()=>{console.log(list)},[list]);
  return (
    <section id='search-banner'>
      <img src={bg1} alt="img" className='bg-1' />
      <img src={bg2} alt="img" className='bg-2' />

      <div className="search-banner-text">
        <h1>{props.heading}</h1>
        <strong>#Free delivery on purchase of at least 250</strong>
      <form onSubmit={handleSubmit} className='search-box'>
        <i className='fas fa-search'></i>
        <input type="text" onChange={handleChange} list="queryy" value={query} className='search-input' placeholder='search your daily grocery' required />
    <datalist id="queryy">
    {
     list.map((item)) => {
    return(
      <option value={item.title} ></option>
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
