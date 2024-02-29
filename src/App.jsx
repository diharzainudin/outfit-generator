import './App.css'
import data from './clothes.json'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import MyCloset from './components/MyCloset'
import Wishlist from './components/Wishlist'
import StyleMe from './components/StyleMe'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/mycloset" element={<MyCloset data={data} />} />
        <Route path="/wishlist" element={<Wishlist data={data} />} />
        <Route path="/styleme" element={<StyleMe data={data} />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
