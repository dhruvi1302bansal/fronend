
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home.jsx' 
import Navbar from './Components/Navbar';
import Consultation from './Pages/Consultation.jsx'
import Programs from './Pages/Programs.jsx'
import Assessments from './Pages/Assessments.jsx'
import AboutUs from './Pages/AboutUs.jsx'
import ContactSupport from './Pages/ContactSupport.jsx'
import Shop from './Pages/Shop.jsx'
import KnowledgeHub from './Pages/KnowledgeHub';

// import ConsultingPage from './Pages/Consulting'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 import Footer from './Components/Footer';



function App() {


  return (
    
   
    <BrowserRouter>
     <Navbar /> 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Consultation" element={<Consultation/>} />
        <Route path="/Programs" element={<Programs/>} />
        <Route path="/Assessments" element={<Assessments/>} />
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/ContactSupport" element={<ContactSupport/>}/>
        <Route path="/KnowledgeHub" element={<KnowledgeHub/>}/>
        <Route path="/Shop" element={<Shop/>} />
      </Routes>
       <Footer />
    </BrowserRouter>
   
    
  )
}

export default App
