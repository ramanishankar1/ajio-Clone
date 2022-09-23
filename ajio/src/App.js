import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/header';
import Productholder from './Components/Products/productholder';
import Login from './Components/Login/login';
import { useState } from 'react';
import Product from './Components/Products/product';
import { Route, Routes, Link } from "react-router-dom"
import NotFound from './Components/Not Found/NotFound';
import { useNavigate } from 'react-router-dom'
import Description from './Components/Description/description';
import { mycontext } from './Components/Context Folder/Context';
import Cartitem from './Components/Cart/cartitem';
import Cartholder from './Components/Cart/cartholder';
function App() {
  const [islogin, setLogin] = useState(false);
  const navigate = useNavigate()
  const [cartList, setcartList] = useState([])

  const login = () => {
    setLogin(true);
  }

  const logout = () => {
    setLogin(false)
  }
  const addtocart = (item) => {
    setcartList((previousstate) => {
      return [...previousstate, item]
    })
  }

  return (
    <div className="App">

      <mycontext.Provider value={{ islogin, cartList, addtocart }}>


        <Header logout={logout}></Header>
        {islogin == true && <Productholder></Productholder>}

      <Cartitem cartList={cartList}></Cartitem>


        <Link to='/productholder'> ProductHolder  </Link>
        <Link to='/product'> Product </Link>
        <Link to='/Login'>Login</Link>
        <Routes>
          <Route path='description/:id' element={<Description />}></Route>

          <Route path='productholder' element={<Productholder />}>
            <Route path='product' element={<Product />}></Route>
          </Route>
          <Route path='cartholder' element={<Cartholder />}></Route>
        


          <Route path='*' element={<NotFound />} />
        </Routes>
        <Login login={login}></Login>
        <button onClick={() => {
          navigate('productholder')
        }}> Move To</button>
      </mycontext.Provider>
    </div>
  );
}

export default App;
