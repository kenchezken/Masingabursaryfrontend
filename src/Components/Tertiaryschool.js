import React, { useState } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import bursaryform from '../images/bursaryform.pdf'


const Tertiary = ()=>{
  const[fullname , setfullname] = useState('')
  const[gender , setgender] = useState('')

  const[nationid , setnationid] = useState('')
  const[phonenumber , setphonenumber] = useState('')
  const[guardiansno , setguardiansno] = useState('')
  const[mothersid , setmothersid] = useState('')
  const[disability ,setdisability] = useState('')
  const[ward , setward] = useState('')
  const[levelofstudy , setlevelofstudy] = useState('')
  const[location , setlocation] = useState('')
  const[sublocation , setsublocaation] = useState('')
  const[village ,setvillage] = useState('')
  const[institution , setinstitution] = useState('')
  const[admno , setadmno] = useState('')
  const[modeofstudy , setmodeofstudy] = useState('')
  const[yearofstudy , setyearofstudy] = useState('')
  const[semester , setsemester] = useState('')
  const[coarseduration , setcoarseduration] = useState('')
  const[family , setfamily] = useState('')
  const[fathersincome , setfathersincome] = useState('')
  const[mothersincome , setmothersincome] = useState('')
  const[approvalstatus , setapprovalstatus] = useState('Notapproved')
   
  const MySwal = withReactContent(Swal)



  function submitform(e) {
    e.preventDefault();
  
    // Check if any field is empty
    const fields = [
      fullname, gender, nationid, phonenumber, guardiansno, mothersid, disability,
      ward, levelofstudy, location, sublocation, village, institution, admno,
      modeofstudy, yearofstudy, semester, coarseduration, family, fathersincome,
      mothersincome, approvalstatus
    ];
  
    if (fields.some(field => field.trim() === '')) {
      Swal.fire({
        title: "Empty Field",
        text: "Please fill in all fields",
        icon: "error"
      });
      return;
    }
  
    // If all fields are filled, proceed with form submission
    fetch('http://127.0.0.1:5000/bursarymanagement/tertiaryapplication', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fullname, gender, phonenumber, nationid, guardiansno, mothersid, disability,
        levelofstudy, ward, location, sublocation, village, institution, admno,
        modeofstudy, yearofstudy, semester, coarseduration, family, fathersincome,
        mothersincome, approvalstatus
      })
    })
      .then(response => response.json())
      .then(data => {
        Swal.fire({
          title: "Good job!",
          text: data.message,
          icon: "success"
        });
        // Reset the form if needed
        // resetForm();
      })
      .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting the form.');
      });
  }
  const openManualForm = () => {
    const link = document.createElement('a');
    link.href = bursaryform // Path to your PDF file
    link.download = 'bursaryform.pdf'; // Name to be downloaded
    link.click();
  };
  

  
  return(
    <>
         <Button
        onClick={openManualForm}
        style={{
          marginLeft: '20px',
          marginTop: '50px' ,
          width: '30%',
          transform: 'translateY(-50%)',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          padding: '12px 20px',
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: '16px',
          transitionDuration: '0.4s',
          cursor: 'pointer',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
       Download BursaryForm
      </Button>
     <Form
    style={{
      width: '80%' ,
      marginLeft: 'auto',
      marginRight: 'auto' ,
      marginTop: '50px',
      padding: '20px',
      textAlign: 'center',
      boxShadow:
        'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
    }}
  >
    <div style={{
      width:'100%',
      backgroundColor:'#154c79'
    }}>
    <h2 style={{
      color:'white'
    }}>1.Personal Details</h2>
    </div>
  
    <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }} >
      <Form.Label>Fullname</Form.Label>
      <Form.Control type="text" placeholder="Fullname" onChange={(e) =>{
           setfullname(e.target.value)
           console.log(fullname);
      }}/>
    </Form.Group>
  
    <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
        <Form.Label>Gender</Form.Label>
            <select class="custom-select" style={{width: '100%'}} onChange={(e) => setgender(e.target.options[e.target.selectedIndex].text)}>
            <option selected>Open this select menu</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Other</option>
            </select>
        </Form.Group>

        <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
        <Form.Label>Persons with disability</Form.Label>
            <select class="custom-select" style={{width: '100%'}} onChange={(e) => setdisability(e.target.value)}>
            <option selected>Open this select menu</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            </select>
        </Form.Group>

        <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }} >
      <Form.Label>National ID</Form.Label>
      <Form.Control type="text" placeholder="Id.no" onChange={(e) => setnationid(e.target.value)} />
    </Form.Group>

    <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }} >
      <Form.Label>Your phoneNumber</Form.Label>
      <Form.Control type="text" placeholder="phonenumber" onChange={(e) => setphonenumber(e.target.value)} />
    </Form.Group>

    <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }} >
      <Form.Label>Guardians Mobile No.</Form.Label>
      <Form.Control type="text" placeholder="phonenumber" onChange={(e) => setguardiansno(e.target.value)} />
    </Form.Group>

    <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }} >
      <Form.Label>Guardians/Parents id.</Form.Label>
      <Form.Control type="text" placeholder="ID.No" onChange={(e) => setmothersid(e.target.value)}/>
    </Form.Group>


  </Form>
  {/* residence details */}
  <Form
    style={{
      width: '80%' ,
      marginLeft: 'auto',
      marginRight: 'auto' ,
      marginTop: '50px',
      padding: '20px',
      textAlign: 'center',
      boxShadow:
        'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
    }}
  >
    <div style={{
      width:'100%',
      backgroundColor:'#154c79'
    }}>
    <h2  style={{
      color:'white'
    }}>2.Residence</h2>
    </div>
    
    <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
        <Form.Label>Ward</Form.Label>
            <select class="custom-select" style={{width: '100%'}} onChange={(e) => setward(e.target.value)}>
            <option selected>Open this select menu</option>
            <option value="MASINGACENTRAL">Masinga Central</option>
            <option value="EKALAKALAIKATINI">Ekalakala/Ikatini ward</option>
            <option value="NDITHINI">Ndithini ward</option>
            <option value="Kivaa ward<">Kivaa ward</option>
            <option value="MUTHESYA">Muthesya ward</option>
            </select>
        </Form.Group>

    <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
      <Form.Label>Location</Form.Label>
      <Form.Control type="text" placeholder="Location" onChange={(e) => setlocation(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
      <Form.Label>Sub-location</Form.Label>
      <Form.Control type="text" placeholder="sub-location" onChange={(e) => setsublocaation(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
      <Form.Label>Village</Form.Label>
      <Form.Control type="text" placeholder="Village" onChange={(e) => setvillage(e.target.value)}/>
    </Form.Group>
 
  </Form>
  {/* Institution */}
  <Form
    style={{
      width: '80%' ,
      marginLeft: 'auto',
      marginRight: 'auto' ,
      marginTop: '50px',
      padding: '20px',
      textAlign: 'center',
      boxShadow:
        'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
    }}
  >
    <div style={{
      width:'100%',
      backgroundColor:'#154c79'
    }}>
    <h2  style={{
      color:'white'
    }}>3.Institution</h2>
    </div>  
    <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
      <Form.Label>Name of Institution</Form.Label>
      <Form.Control type="text" placeholder="Institution" onChange={(e) => setinstitution(e.target.value)}/>
    </Form.Group>
  
    <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
      <Form.Label>AdmissionNo/RegNo</Form.Label>
      <Form.Control type="text" placeholder="Admission No" onChange={(e) => setadmno(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
        <Form.Label>Level of Study</Form.Label>
            <select class="custom-select" style={{width: '100%'}} onChange={(e) => setlevelofstudy(e.target.value)}>
            <option selected>Open this select menu</option>
            <option value="Postgraduate">Postgraduate</option>
            <option value="underground">Undergraduate</option>
            <option value="diploma">Diploma</option>
            <option value="certificate">Certificate</option>
            </select>
        </Form.Group>

        <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
        <Form.Label>Mode of study</Form.Label>
            <select class="custom-select" style={{width: '100%'}} onChange={(e) => setmodeofstudy(e.target.value)}>
            <option selected>Fulltime</option>
            <option value="online">Online</option>
            <option value="partime">Partime</option>
            </select>
        </Form.Group>

        <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
        <Form.Label>Year of study</Form.Label>
            <select class="custom-select" style={{width: '100%'}} onChange={(e) => setyearofstudy(e.target.value)}>
            <option selected>Open this select menu</option>
            <option value=" Year1">1</option>
            <option value="Year2">2</option>
            <option value="Year3">3</option>
            <option value="Year4">4</option>
            <option value="Year5">5</option>
            <option value="Year6">6</option>
            <option value="Year7">7</option>
            </select>
        </Form.Group>

        <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
        <Form.Label>Semester</Form.Label>
            <select class="custom-select" style={{width: '100%'}} onChange={(e) => setsemester(e.target.value)}>
            <option selected>Open this select menu</option>
            <option value="1st semester">1</option>
            <option value="2nd semester">2</option>
            <option value="3rd semester">3</option>
            </select>
        </Form.Group>

        <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
        <Form.Label>Coarse Duration</Form.Label>
            <select class="custom-select" style={{width: '100%'}} onChange={(e) => setcoarseduration(e.target.value)}>
            <option selected>Open this select menu</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            </select>
        </Form.Group>
    

  {/* Family */}
  </Form>
  <Form
    style={{
      width: '80%' ,
      marginLeft: 'auto',
      marginRight: 'auto' ,
      marginBottom: '30px' ,
      marginTop: '50px',
      padding: '20px',
      textAlign: 'center',
      boxShadow:
        'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
    }}
  >
    <div style={{
      width:'100%',
      backgroundColor:'#154c79'
    }}>
    <h2  style={{
      color:'white'
    }}>4.Family</h2>
    </div>
  
    <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
        <Form.Label>Family</Form.Label>
            <select class="custom-select" style={{width: '100%'}} onChange={(e) => setfamily(e.target.value)} >
            <option selected>Open this select menu</option>
            <option value="totalorphan">Total orphan</option>
            <option value="partialorphan">Partial orphan</option>
            <option value="bothparentsalive">Both parents alive</option>
            </select>
        </Form.Group>

        <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
        <Form.Label>Father's income</Form.Label>
            <select class="custom-select" style={{width: '100%'}} onChange={(e) => setfathersincome(e.target.value)}>
            <option selected>Open this select menu</option>
            <option value="Earns more than kshs.50,000/=">Earns more than kshs.50,000/=</option>
            <option value="Earns less than kshs. 50,000/=">Earns less than kshs. 50,000/=</option>
            <option value="No specific source of income">No specific source of income</option>
            <option value="Not applicable">Not applicable</option>
            </select>
        </Form.Group>
        <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
        <Form.Label>Mothers income</Form.Label>
            <select class="custom-select" style={{width: '100%'}} onChange={(e) => setmothersincome(e.target.value)}>
            <option selected>Open this select menu</option>
            <option value="Earns more than kshs.50,000/=">Earns more than kshs.50,000/=</option>
            <option value="Earns less than kshs. 50,000/=">Earns less than kshs. 50,000/=</option>
            <option value="No specoiic source of income">No specific source of income</option>
            <option value="Not applicable">Not applicable</option>
            </select>
        </Form.Group>
   
  
        <Form.Group className="mb-3">
          <Button type="submit" style={{ background: 'green',borderColor:'green' , width: '50%', margin: 'auto' }}onClick={submitform} >
            SubmitForm
          </Button>
        </Form.Group>
  </Form>
    </>
   
  )
}

export default Tertiary