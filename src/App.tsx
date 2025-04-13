import BaseHome from "./Screens/BaseHome.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutUs from "./Screens/AboutUs.tsx";
import ContactUs from "./Screens/ContactUs.tsx";


function App() {

  return (
      <BrowserRouter basename="/SoftDetriots">
          <Routes>
              <Route element={<BaseHome/>} path='/'/>
              <Route element={<AboutUs/>} path='/aboutus'/>
              <Route element={<ContactUs/>} path='/contact'/>
          </Routes>
      </BrowserRouter>
  )
}

export default App
