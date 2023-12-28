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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>} ></Route>
          <Route exact path='/cart' element={<Cart/>} ></Route>
          <Route exact path='/developer' element={<Developer />} >
            <Route path='importfd' element={<ImportFD />} ></Route>
            <Route path='importp' element={<ImportSystem />} ></Route>
            <Route path='importvege' element={<ImportVege />} ></Route>
            <Route path='fruitsc' element={<Fruitsc />} ></Route>
            <Route path='vegec' element={<Vegec />} ></Route>
            <Route path='ppc' element={<PPC />} ></Route>
          </Route>
          <Route exact path='/allitems' element={<AllItems />} >
            <Route path='vegetables' element={<Vegetables/>} ></Route>
            <Route path='fruits' element={<Fruits/>} ></Route>
          </Route>
          <Route exact path='/updatef/:id' element={<Updatef/>} ></Route>
          <Route exact path='/updatevege/:id' element={<Updatevege/>} ></Route>
          <Route exact path='/updatepp/:id' element={<Updateppc/>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
