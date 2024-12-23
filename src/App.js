import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigationbar from './Components/Navbar';
import Totalapplicants from './Components/Applications';
import Graphicalanalysis from './Components/GraphicalAnalysis';
import Admindashboard from './Components/Admindashboard';
import BursaryApplication from './Components/BursaryApplication';
import About from './Components/About';
import Contactus from './Components/Contactus';
import Home from './Components/Home';
import AdminLogin from './Components/AdminLogin';
import Secondaryschool from './Components/Secondaryschool';
import Tertiary from './Components/Tertiaryschool';
import StudentLogin from './Components/Studentlogin';
import Studentdashboard from './Components/Studentdashboard';
import Masingacentraltable from './Components/Masingacentraltable';
import Ndithinitable  from './Components/Ndithiniwardtable'
import Muthesyatable from './Components/Muthesya';
import Ekalakalaikatinitable from './Components/Ekalakalaikatinitable';
import Kivaatable from './Components/Kivaa';
import Searchstudent from './Components/Searchstudent';
import EditStudent from './Components/Editstudentdetailscomponent';

function App() {
  const [role , setRole] = useState("student")
  const[nationalid , setnationalid] = useState("")
  const [applicationid , setapplicationid] = useState(null)
  return (
    <div className="App">
      
      <BrowserRouter>
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
            setapplicationid ={setapplicationid}
           />}/>

            <Route path='/Admindashboard' element={<Admindashboard
           />}/>
            <Route path='/Masingacentraltable' element={<Masingacentraltable/>}/>
            <Route path='/Ndithinitable' element={<Ndithinitable/>}/>
            <Route path='/Kivaa' element={<Kivaatable/>}/>
            <Route path='/Editdetails/:nationalid' element={<EditStudent 
            applicationid = {applicationid}/>}/>
            <Route path='/Muthesyatable' element={<Muthesyatable/>}/>
            <Route path='/Ekalakalaikatinitable' element={<Ekalakalaikatinitable/>}/>
    
            <Route path = '/Applications' element = {<Totalapplicants/>}/>
            <Route path = '/graphicalanalysis' element = {<Graphicalanalysis/>}/>
            <Route path='/Searchstudent'  element= {<Searchstudent/>}/>
           

          </Routes>
         

      </BrowserRouter>
    </div>
  );
}

export default App;