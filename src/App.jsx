
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import ConsultingPage from './Pages/Consulting'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'

function App() {


  return (
    <>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/knowledgehub" element={</>} /> */}

         
    
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App
