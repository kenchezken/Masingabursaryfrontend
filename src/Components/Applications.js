import {React} from 'react'
import Addminnav from './Adminav';
import { NavLink, useNavigate } from 'react-router-dom';



const Totalapplicants =() =>{

    const history = useNavigate()

     const masingabutton =()=>{
        history("/Masingacentraltable")
      }
      const Ndithinibutton =()=>{
        history("/Ndithinitable")
      }
      const Muthesyabutton =()=>{
        history("/Muthesyatable")
      }
    
      const Ekalakalabutton =()=>{
        history("/Ekalakalaikatinitable")
      }
    
      const Kivaabutton =()=>{
        history("/Kivaa")
      }



return(
<>
<Addminnav/>

<div class="p-4 sm:ml-64">
   <div class="p-4 ">
    
   <div className="flex justify-center space-x-4 mt-8">
      <button
        className="px-6 py-3 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 transition transform hover:-translate-y-1"
        onClick={Ndithinibutton}
      >
        NDITHINI
      </button>
      <button
        className="px-6 py-3 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 transition transform hover:-translate-y-1"
        onClick={Ekalakalabutton}
      >
        EKALAKALA/IKATINI
      </button>
      <button
        className="px-6 py-3 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 transition transform hover:-translate-y-1"
        onClick={Muthesyabutton}
      >
        MUTHESYA
      </button>
      <button
        className="px-6 py-3 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 transition transform hover:-translate-y-1"
        onClick={Kivaabutton}
      >
        KIVAA
      </button>
      <button
        className="px-6 py-3 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 transition transform hover:-translate-y-1"
        onClick={masingabutton}
      >
        MASINGACENTRAL
      </button>
    </div>
    
   </div>
</div>




</>

    )

}

export default Totalapplicants;