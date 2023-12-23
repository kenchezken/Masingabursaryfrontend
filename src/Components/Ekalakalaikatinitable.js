import React, { useEffect, useState } from 'react'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import './Studentdashboard.css'


const Ekalakalaikatinitable = ()=>{

  const [allapplications , setapplications] = useState([])
  
  const wardName = 'EKALAKALAIKATINI'

  useEffect(()=>{
    fetch(`https://backendmasingaflassk.onrender.com/bursarymanagement/allapplication/${wardName}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
        console.log(data);
      // Assuming the data returned is an array of applications
      setapplications(data);
    })
    .catch((error) => {
      console.error('There was an error fetching the data:', error);
    });

    } ,[wardName]
  )

    return(
       <div>
           <h1
          style={{
            fontFamily: "cursive",
            textAlign: "center",
            fontWeight: "lighter",
            marginTop: "2rem",
            fontStyle: "italic",
          }}
        >
          applications for Muthesya Ward
        </h1>
          
        <div className="tablediv">
       
       <table
         id="application"
         style={{
           borderCollapse: "separate",
           borderSpacing: "0px 10px",
           borderRadius: "15px",
           margin: "2rem",
           width: "80%",
         }}
       >
         <tbody>
           <tr>
             <th>#</th>
             <th>Fullname</th>
             <th>Gender</th>
             <th>Nationalid</th>
             <th>GuardianNo</th>
             <th>Mothersid</th>
             <th>Disability</th>
             <th>Ward</th>
             <th>Location</th>
             <th>Sublocation</th>
             <th>Village</th>
             <th>Institution</th>
             <th>Admno</th>
             <th>Mode of study</th>
             <th>Year of study</th>
             <th>Semester</th>
             <th>Coarse duration</th>
             <th>Family</th>
             <th>Fathersincome</th>
             <th>Mothersincome</th>
             <th>Approvalstatus</th>
           </tr>
 
           {allapplications.map((item, index) => (
   
             <tr key={item.id}>
               <td style={{ marginBottom: "10px" }}>{index + 1}</td>
               <td>
                {item.Fullname}
               </td>
               <td>{item.Gender}</td>
               <td>{item.Nationalid}</td>
               <td>{item.GuardiansNo}</td>
               <td>{item.Motherid}</td>
               <td>{item.Diasability}</td>
               <td>{item.Ward}</td>
               <td>{item.Location}</td>
               <td>{item.Sublocation}</td>
               <td>{item.Village}</td>
               <td>{item.Instituion}</td>
               <td>{item.Admno}</td>
               <td>{item.Modeofstudy}</td>
               <td>{item.Yearofstudy}</td>
               <td>{item.Semester}</td>
               <td>{item.Coarseduration}</td>
               <td>{item.Family}</td>
               <td>{item.Fathersincome}</td>
               <td>{item.Mothersincome}</td>
               <td>{item.Approvalstatus}</td>
             </tr>
           ))}
         </tbody>
       </table>
     </div>
     <ReactHTMLTableToExcel
        id="test-table-xls-button"
        className="download-table-xls-button"
        table="application"
        filename="Masinga applications"
        sheet="applications"
        buttonText="Download as Excel"
      />
       </div>
    )
}

export default Ekalakalaikatinitable;