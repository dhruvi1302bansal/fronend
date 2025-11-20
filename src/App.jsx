
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home.jsx' 



import Footer from './Components/Footer.jsx'
import Navbar from './Components/Navbar.jsx'
import ConsultingPage from './Pages/Consulting'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function App() {


  return (
    <>
      {/* <Home /> */}
      <KnowledgeHub />
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/knowledgehub" element={</>} /> */}
      </Routes>
    </BrowserRouter>
    <Footer/>
       <Home /> 
      
    </>
  )
}

export default App
