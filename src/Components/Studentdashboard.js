import  React ,{useState , useEffect} from 'react';
import './Studentdashboard.css'
import { Link } from 'react-router-dom';

function Studentdashboard({nationalid , setapplicationid}){

    const [details, setdetails] = useState([]);
    const [error , seterror] = useState(null)
    
    useEffect(() => {
        // Fetch data only if nationalid is available
        if (nationalid) {
          fetch(`https://backendmasingaflassk.onrender.com/bursarymanagement/mydetails/${nationalid}`)
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
            .then(data => {
                
              setdetails(data); // Assuming your API returns an array of details
              setapplicationid(data[0].id)
              console.log(data);
            })
            .catch(error => {
              seterror('Error fetching data');
              console.error('There was an error fetching the data', error);
            });
        }
      }, [nationalid]); // Fetch whenever nationalid changesThis empty dependency array ensures the effect runs once on component mount
    
    

      return (
        <>
        <h1
          style={{
            fontFamily: "cursive",
            textAlign: "center",
            fontWeight: "lighter",
            marginTop: "2rem",
            fontStyle: "italic",
          }}
        >
          My details
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
                <th>Firstname</th>
      <th>Middlename</th>
      <th>Lastname</th>
      <th>Phonenumber</th>
      <th>Gender</th>
      <th>Nationalid</th>
      <th>GuardianNo</th>
      <th>Guardiansid</th> {/* Fixed typo here */}
      <th>Disability</th>
      <th>Ward</th>
      <th>Location</th>
      <th>Sublocation</th>
      <th>Village</th>
      <th>Chiefname</th>
      <th>Chiefphonenumber</th>
      <th>Assistantchief</th>
      <th>AssistantchiefNo</th>
      <th>Institution</th>
      <th>University</th>
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
       
              {details.map((item, index) => (
      
                <tr key={item.id}>
                  <td style={{ marginBottom: "10px" }}>{index + 1}</td>
                  <td>{item.Firstname}</td>
        <td>{item.Middlename}</td>
        <td>{item.Lastname}</td>
        <td>{item.Phonenumber}</td>
        <td>{item.Gender}</td>
        <td>{item.Nationalid}</td>
        <td>{item.GuardiansNo}</td>
        <td>{item.Guardianid}</td>
        <td>{item.Disability}</td>
        <td>{item.Ward}</td>
        <td>{item.Location}</td>
        <td>{item.Sublocation}</td>
        <td>{item.Village}</td>
        <td>{item.Chiefname}</td>
         <td>{item.Chiefphonenumber}</td>
        <td>{item.AssistantChiefname}</td> 
        <td>{item.Assistantchiefno}</td> 
        <td>{item.Institution}</td>
        <td>{item.University}</td>
        <td>{item.Admno}</td>
        <td>{item.Modeofstudy}</td>
        <td>{item.Yearofstudy}</td>
        <td>{item.Semester}</td>
        <td>{item.Coarseduration}</td>
        <td>{item.Family}</td>
        <td>{item.Fathersincome}</td>
        <td>{item.Mothersincome}</td>
        <td>{item.Approvalstatus}</td>
        <td>
          <Link to={`/Editdetails/${item.Nationalid}`}>Edit</Link>
        </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
    
          

}


export default Studentdashboard;