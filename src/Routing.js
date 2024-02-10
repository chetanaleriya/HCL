import Contact from "./Contact"
import Home from "./Home"
import Location from "./Location"
import Nav from "./Nav"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Nav1 from "./Nav1"
import "./routing.css"
import Footer from "./Footer"
import Foot from "./Foot"
import Courses from "./Courses"
import Demo from "./Demo"
import About from "./About"
import Java from "./Java"
import Mern1 from "./Mern1"
import Map from "./Map"


function Routing()
{
    return(
        <div>
            <BrowserRouter>
            <div className="header3">
             <Nav></Nav> 
           
           <Nav1></Nav1>
            
            </div> 
            <div className="link">
          <Routes>
            
            <Route path="/" element={<Home></Home>}>Home</Route>
           
            <Route path="/contact" element={<Contact></Contact>}>contact</Route>
            <Route path="/location" element={<Location></Location>}>location</Route>
            <Route path="/courses" element={<Courses></Courses>}>Courses</Route>
            <Route path="/demo" element={<Demo></Demo>}>Demo Classes</Route>
            <Route path="/about" element={<About></About>}>About us</Route>
            <Route path="java" element={<Java></Java>}>java</Route>
            <Route path="mern" element={<Mern1></Mern1>}>mern</Route> 
                     </Routes>
          </div>
          <Map></Map>
          <Foot></Foot>
          <Footer></Footer>
          </BrowserRouter>
        </div>
    )
}
export default Routing