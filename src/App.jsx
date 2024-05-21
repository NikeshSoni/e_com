import { useState , useContext } from 'react'
import './App.css';
import {HashRouter , Route , Routes} from 'react-router-dom';
import Home from './pages/Home'
import Cart from './pages/Cart';
import Header from './components/Navbar';
import {Provider}  from 'react-redux'
import Store from './store/Store';



function App() {
  return (
    <>
         <Provider store={Store}>
            <HashRouter>
                <Header />
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/cart' element={<Cart/>}></Route>
                    </Routes>
              </HashRouter>
         </Provider>
    </>
  )
}

export default App
