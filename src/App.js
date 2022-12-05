import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import Foot from "./Components/Foot";
import GetStarted from "./Components/GetStarted";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import Product from "./Components/Product";
import Individuals from "./Components/Individuals";
import Teams from "./Components/Teams";
 import Pricing from "./Components/Pricing";
import Resources from "./Components/Resources";
import Enterprise from "./Components/Enterprise";

function App() {
  return (
    <div className="App">
       
       <Router>  
        <Navbar/>
          <Routes>
           
             <Route path="/" element={<Home/>} />
             <Route path="/login" element={<Login/>} />
             <Route path="/getstarted" element={<GetStarted/>} />
             <Route path="/signup" element={<Signup/>} />
             <Route path="/individuals" element={<Individuals/>} />
             <Route path="/teams" element={<Teams/>} />
             <Route path="/enterprise" element={<Enterprise/>} />
             <Route path="/product" element={<Product/>} />
             <Route path="/pricing" element={<Pricing/>} />
             <Route path="/resources" element={<Resources/>} />
            
          </Routes>
               <Foot/>
               
     </Router>
    </div>
  );
}

export default App;
