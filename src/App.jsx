
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import ConsultingPage from './Pages/Consulting'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<ConsultingPage/>} />
  
    </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
