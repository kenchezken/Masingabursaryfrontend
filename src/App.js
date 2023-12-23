import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigationbar from './Components/Navbar';
import BursaryApplication from './Components/BursaryApplication';
import About from './Components/About';
import Contactus from './Components/Contactus';
import Home from './Components/Home';
import AdminLogin from './Components/AdminLogin';
import Secondaryschool from './Components/Secondaryschool';
import Tertiary from './Components/Tertiaryschool';
import StudentLogin from './Components/Studentlogin';
import Studentdashboard from './Components/Studentdashboard';
import Admindashboard from './Components/Admindashboard';
import Masingacentraltable from './Components/Masingacentraltable';
import Ndithinitable  from './Components/Ndithiniwardtable'
import Muthesyatable from './Components/Muthesya';
import Ekalakalaikatinitable from './Components/Ekalakalaikatinitable';

function App() {
  const [role , setRole] = useState("student")
  const[nationalid , setnationalid] = useState("")
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navigationbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/BursaryApplication" element={<BursaryApplication />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/Adminlogin" element={<AdminLogin/>} 
           setnationalid = {setnationalid}
          />
          <Route path='/Secondaryschoolapplication' element={<Secondaryschool/>}/>
          <Route path='/Tertiary' element={<Tertiary/>}/>
          <Route path='/Studentlogin' element={<StudentLogin
           setnationalid = {setnationalid}
           setRole ={setRole}
          />}/>
           <Route path='/Studentdashboard' element={<Studentdashboard
            nationalid = {nationalid}
           />}/>

            <Route path='/Admindashboard' element={<Admindashboard
            nationalid = {nationalid}
           />}/>
            <Route path='/Masingacentraltable' element={<Masingacentraltable/>}/>
            <Route path='/Ndithinitable' element={<Ndithinitable/>}/>
            <Route path='/Muthesyatable' element={<Muthesyatable/>}/>
            <Route path='/Ekalakalaikatinitable' element={<Ekalakalaikatinitable/>}/>

          </Routes>
         

      </BrowserRouter>
    </div>
  );
}

export default App;
