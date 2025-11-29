
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home.jsx' 
import Navbar from './Components/Navbar';
// import Consultation from './Pages/Consultation.jsx'
import Programs from './Pages/Programs.jsx';
import Assessments from './Pages/Assessments.jsx';
import AboutUs from './Pages/AboutUs.jsx';
import ContactSupport from './Pages/ContactSupport.jsx';
import Shop from './Pages/Shop.jsx';
import KnowledgeHub from './Pages/KnowledgeHub.jsx';
import Consulting from './Pages/Consulting.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 import Footer from './Components/Footer';
 import { CartProvider } from './components/CartContext'; 
import Login from './Pages/LoginPage';
import RegisterForm from './Pages/Registration';
import PatientRegisterForm from './Pages/PatientRegistration';
import DoctorRegisterForm from './Pages/DoctorRegistrationForm';
import ScrollToTop from './utils/scrollToTop';



function App() {


  return (
    
   <CartProvider>
    <BrowserRouter>
     <ScrollToTop/>
     <Navbar /> 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Consulting" element={<Consulting/>} />
        <Route path="/Programs" element={<Programs/>} />
        <Route path="/Assessments" element={<Assessments/>} />
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/ContactSupport" element={<ContactSupport/>}/>
        <Route path="/KnowledgeHub" element={<KnowledgeHub/>}/>
        <Route path="/Shop" element={<Shop/>} />
        <Route path='/doctor-registration' element={<DoctorRegisterForm/>}/>
         <Route path='/patient-registration' element={<PatientRegisterForm/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
       <Footer />
    </BrowserRouter>
   </CartProvider>

   
    
  )
}

export default App
