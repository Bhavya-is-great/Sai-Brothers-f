import './App.css';
import 'bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Cart from './Components/Cart'
import Developer from './Components/Developer';
import AllItems from './Components/Allitems';
import Vegetables from './Components/elements/Vegetables';
import Fruits from './Components/elements/Fruits';
import ImportFD from './Components/elements/importfd';
import ImportSystem from './Components/elements/ImportSystem';
import ImportVege from './Components/elements/Importvege';
import Fruitsc from './Components/elements/Fruitsc';
import Vegec from './Components/elements/Vegec';
import PPC from './Components/elements/PPC';
import Updatef from './Components/Updatef';
import Updatevege from './Components/Updatevege';
import Updateppc from './Components/Updatepp';
import About from './Components/Aboutus';
import Search from './Components/Search';
import ChangeList from './Components/elements/ChangeList';

function App() {

// const navigate = useNavigate()

  window.addEventListener('onbeforeunload', () => {
    // Redirect to home page
//window.location.assign('/');
    alert("reloading can get a error go to home and then reload")
    //navigate('/')
});



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>} ></Route>
          <Route path='/cart' element={<Cart/>} ></Route>
          <Route path='/developer' element={<Developer />} >
            <Route path='importfd' element={<ImportFD />} ></Route>
            <Route path='importp' element={<ImportSystem />} ></Route>
            <Route path='importvege' element={<ImportVege />} ></Route>
            <Route path='fruitsc' element={<Fruitsc />} ></Route>
            <Route path='vegec' element={<Vegec />} ></Route>
            <Route path='ppc' element={<PPC />} ></Route>
            <Route path='change' element={<ChangeList />} ></Route>
          </Route>
          <Route path='/allitems' element={<AllItems />} >
            <Route path='vegetables' element={<Vegetables/>} ></Route>
            <Route path='fruits' element={<Fruits/>} ></Route>
          </Route>
          <Route path='/updatef/:id' element={<Updatef/>} ></Route>
          <Route path='/updatevege/:id' element={<Updatevege/>} ></Route>
          <Route path='/updatepp/:id' element={<Updateppc/>} ></Route>
          <Route path='/search/:name' element={<Search />} ></Route>
          <Route path='/about' element={<About />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
