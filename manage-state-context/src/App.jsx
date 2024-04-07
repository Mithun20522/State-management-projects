import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Error from './pages/Error';
import Header from './components/Header';
import About from './pages/About';
import Cart from './pages/Cart';
import {Toaster} from 'react-hot-toast';
const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/about' element={<About/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
      <Toaster/>
    </BrowserRouter>
  )
}

export default App