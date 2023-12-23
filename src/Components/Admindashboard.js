import  React ,{useState , useEffect} from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import Swal from 'sweetalert2';
import { NavLink, useNavigate } from 'react-router-dom';
import './Studentdashboard.css'


function Admindashboard({nationalid}){

    const [applications, setapplication] = useState([]);
    const [error , seterror] = useState(null)
    const [searchTerm, setSearchTerm] = useState('');

    const history = useNavigate()

    const handleSearchChange = (e) => {
      setSearchTerm(e.target.value);
    };
   
  
    
    useEffect(() => {
        // Fetch data only if nationalid is available
      
          fetch(`https://backendmasingaflassk.onrender.com/allapplication`)
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
            .then(data => {
              console.log(data);
              setapplication(data); // Assuming your API returns an array of details
            })
            .catch(error => {
              seterror('Error fetching data');
              console.error('There was an error fetching the data', error);
            });
        
      }, [nationalid]); // Fetch whenever nationalid changesThis empty dependency array ensures the effect runs once on component mount
  
      const filteredApplications = applications.filter((item) =>
      Object.values(item).some((value) =>
        typeof value === 'string' &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

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

  const Handleonapprove = async (e, item) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, approve it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`https://backendmasingaflassk.onrender.com//approveBursaryapplication/${item.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              Approvalstatus: 'Approved',
            }),
          });
  
          if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.Approvalstatus}`);
          }
  
          // Once approved, show a success message
          Swal.fire({
            title: 'Approved!',
            text: 'The application has been approved.',
            icon: 'success',
          });
  
          // You might want to refresh the application list or update state after approval
          // Add the necessary logic here...
  
        } catch (error) {
          console.error('Error updating status:', error);
          // Handle errors as needed
          Swal.fire({
            title: 'Error!',
            text: 'There was an error approving the application.',
            icon: 'error',
          });
        }
      }
    });
  };
  
  const totalApplicationsCount = filteredApplications.length;

     
    
      return (
        <>
        <div style={{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px', /* Adjust the gap between buttons */
  margin: '50px auto', /* Adjust the margin */
  width: '50%', /* Adjust the width as needed */
}}>
        <button style={{
          background:'red',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          color: 'white',
          cursor: 'pointer',
        }} onClick={masingabutton} > MasingaCentral </button>
        <button
        style={{
          background: 'red' ,
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          color: 'white',
          cursor: 'pointer',
        }}
        onClick={Ndithinibutton} 
        >Ndithini</button>
        <button 
        style={{
          background: 'red' ,
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          color: 'white',
          cursor: 'pointer',
        }}
        onClick={Ekalakalabutton} 
        >Ekalakala/ikatini</button>
        <button
        style={{
          background: 'red',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          color: 'white',
          cursor: 'pointer',
        }}
        onClick={Muthesyabutton} 
        >Muthesya</button>
        </div >

        <h1
          style={{
            fontFamily: "cursive",
            textAlign: "center",
            fontWeight: "lighter",
            marginTop: "2rem",
            fontStyle: "italic",
          }}
        >
          All applications
        </h1>
        
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <p style={{ 
        fontSize: '1.5rem',
        fontWeight: 'bold',
        backgroundColor: '#f0f0f0',
        padding: '10px',
        borderRadius: '5px',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
        display: 'inline-block'
      }}>
        Total Applications: {totalApplicationsCount}
      </p>
    </div>

     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
      <input
        id='searchinput'
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search by any field"
        style={{
          padding: '10px',
          borderRadius: '20px',
          border: '2px solid #aaa',
          width: '500px',
          outline: 'none',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          transition: 'box-shadow 0.3s, border-color 0.3s',
          marginRight: '10px',
          fontSize: '1rem',
        }}
      />
  
    </div>
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
    
              {filteredApplications.map((item, index) => (
      
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
                  <td  onClick={(e)=>Handleonapprove(e , item)}  
                  style={{
                    cursor: 'pointer'

                  }}
                  >{item.Approvalstatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ReactHTMLTableToExcel
        id="test-table-xls-button"
        className="download-table-xls-button"
        table="application"
        filename="EkalakalaIkatini"
        sheet="applications"
        buttonText="Download as Excel"
      />
        
      </>
    );
    
          

}


export default Admindashboard;