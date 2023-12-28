import React, { useState , useEffect } from "react"
import { useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';

import Swal from 'sweetalert2'


import Form from 'react-bootstrap/Form';
const EditStudent =({applicationid})=>{
    console.log(applicationid);
    const {nationalid} = useParams()
    const [details ,setDetails] = useState({})
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)

    console.log(nationalid);
  useEffect(() => {
    // Fetch data for the specific nationalid
    fetch(`https://backendmasingaflassk.onrender.com/bursarymanagement/mydetails/${nationalid}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setDetails(data); 
        // Assuming your API returns details objectd
      })
      .catch(error => {
        setError('Error fetching data');
        console.error('There was an error fetching the data', error);
      });
  }, [nationalid]);

  useEffect(() => {
    console.log(details); // This will log whenever 'details' changes
  }, [details]);

  
  const handleUpdate = (id) => {
    fetch(`https://backendmasingaflassk.onrender.com/bursarymanagement/Tertiaryapplication/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(details), // Assuming details hold the updated data
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        Swal.fire({
            title: "Update",
            text: "Updated successfully.",
            icon: "success",
          });
        // Handle successful update
      })
      .catch(error => {
        setError('Error updating data');
        console.error('There was an error updating the data', error);
      });
  };

  const handleInputChange = (fieldName, value) => {
    setDetails(prevDetails => ({
      ...prevDetails,
      [fieldName]: value
    }));
  };


    return(

        <div>
            <h1 
            style={{
                fontSize :' 25px' ,
                fontWeight : '20px' ,
                textAlign: 'center' ,
                justifyContent: 'center',
            }}
            >Carefully update your details </h1>

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
      <Form.Label>Firstname</Form.Label>
      <Form.Control type="text" placeholder="Firstname" 
          onChange={(e) => handleInputChange('Firstname', e.target.value)} />
    </Form.Group>

    <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }} >
      <Form.Label>Middlename</Form.Label>
      <Form.Control type="text" placeholder="Middlename"  
          onChange={(e) => handleInputChange('Middlename', e.target.value)}
      />
    </Form.Group>
    <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }} >
      <Form.Label>Lastname</Form.Label>
      <Form.Control type="text" placeholder="Lastname"
          onChange={(e) => handleInputChange('Lastname', e.target.value)}/>
    </Form.Group>
  
    <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
        <Form.Label>Gender</Form.Label>
            <select class="custom-select" style={{width: '100%'}} 
          onChange={(e) => handleInputChange('Gender', e.target.value)} >
            <option selected>Open this select menu</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
            </select>
        </Form.Group>

        <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
        <Form.Label>Persons with Disability</Form.Label>
            <select class="custom-select" style={{width: '100%'}}
            onChange={(e) => handleInputChange('Disability', e.target.value)}
            >
            <option selected>Open this select menu</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            </select>
        </Form.Group>

        <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }} >
      <Form.Label>National ID/Birth Certificate Number</Form.Label>
      <Form.Control type="text" placeholder="Id.no"
      onChange={(e) => handleInputChange('Nationalid', e.target.value)}
      />
    </Form.Group>

    <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }} >
      <Form.Label>Your phoneNumber</Form.Label>
      <Form.Control type="text" placeholder="phonenumber" 
      onChange={(e) => handleInputChange('Phonenumber', e.target.value)}
      />
    </Form.Group>

    <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }} >
      <Form.Label>Guardians/Parents Mobile No.</Form.Label>
      <Form.Control type="text" placeholder="phonenumber" 
       onChange={(e) => handleInputChange('GuardiansNo', e.target.value)}
      />
    </Form.Group>

    <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }} >
      <Form.Label>Guardians/Parents id.</Form.Label>
      <Form.Control type="text" placeholder="ID.No"  
      onChange={(e) => handleInputChange('Guardiansid', e.target.value)}
      />
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
            <select class="custom-select" style={{width: '100%'}} 
           
            onChange={(e) => handleInputChange('Ward', e.target.value)}
            >
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
      <Form.Control type="text" placeholder="Location" 
      onChange={(e) => handleInputChange('Location', e.target.value)}
      />
    </Form.Group>

    <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
      <Form.Label>Sub-location</Form.Label>
      <Form.Control type="text" placeholder="sub-location"
      onChange={(e) => handleInputChange('Sublocation', e.target.value)}
      />
    </Form.Group>

    <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
      <Form.Label>Village</Form.Label>
      <Form.Control type="text" placeholder="Village" 
      onChange={(e) => handleInputChange('Village', e.target.value)}
      />
    </Form.Group>

    <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }} >
      <Form.Label>Chief's Name</Form.Label>
      <Form.Control type="text" placeholder="fullname" 
      onChange={(e) => handleInputChange('Chiefname', e.target.value)}
      />

    </Form.Group>
    <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }} >
      <Form.Label>Chief's Phone no</Form.Label>
      <Form.Control type="text" placeholder="Phonenumber" 
         onChange={(e) => handleInputChange('Chiefphonenumber', e.target.value)}
      />
    </Form.Group>
    <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }} >
      <Form.Label>Assistant Chief Name</Form.Label>
      <Form.Control type="text" placeholder="Assitantchief" 
        onChange={(e) => handleInputChange('Assistantchiefname', e.target.value)}
      />
    </Form.Group>

    <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }} >
      <Form.Label>Assistant Chief Phone No</Form.Label>
      <Form.Control type="text" placeholder="Phonenumber"
     
      onChange={(e) => handleInputChange('Assistantchiefno', e.target.value)}
      />
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
    <Form.Label>University</Form.Label>
    <select className="custom-select" style={{ width: '100%' }} onChange={(e) => handleInputChange('University', e.target.value)}  >
        <option defaultValue>Select a university</option>
        <option defaultValue>Select a university</option>
        <option value="ADVENTISTUNIVERSITYOFAFRICA">Adventist University of Africa</option>
        <option value="AFRICAINTERNATIONALUNIVERSITY">Africa International University</option>
        <option value="AFRICANAZARENEUNIVERSITY">Africa Nazarene University</option>
        <option value="AMREFINTERNATIONALUNIVERSITY">Amref International University</option>
        <option value="CHUKAUNIVERSITY">Chuka University</option>
        <option value="DAYSTARUNIVERSITY">Daystar University</option>
        <option value="GRETSAUNIVERSITY">Gretsa University</option>
        <option value="DEDANKIMATHIUNIVERSITYOFTECHNOLOGY">Dedan Kimathu University</option>
        <option value="ISLAMICUNIVERSITYOFKENYA">Islamic University</option>
        <option value="JaramogiOgingaUNIVERSITY">Jaramogi Oginga Odinga University of Science and Technology</option>
        <option value="KABARAKUNIVERSITY">Kabarak University</option>
        <option value="KARATINAUNIVERSITY">KARATINA University</option>
        <option value="KAGEASTUNIVERSITY">Kag EastUniversity</option>
        <option value="KENYAHIGHLANDUNIVERSITY">Kenya Highland University</option>
        <option value="KIBABIIUNIVERSITY">Kibabii University</option>
        <option value="KCAUNIVERSITY">KCA University</option>
        <option value="LAIKIPIAUNIVERSITY">Laikipia University</option>
        <option value="KIRINYAGA UNIVERSITY">Zetech University</option>
        <option value="KIRIRIWOMENS">Kiriri Womens University</option>
        <option value="KISIIUNIVERSITY">Kisii University</option>
        <option value="LUKENYAUNIVERSITY">Lukenya University</option>
        <option value="MACHAKOSUNIVERSITY">Machakos University</option>
        <option value="JOMOKENYATTAUNIVERSITYOFAGRICULTUREANDTECHNOLOGY">Jomo Kenyata University of Agriculture and Technology University</option>
        <option value="MASINDEMULIROUNIVERSITY">MasindeMuliro University</option>
        <option value="MASENOUNIVERSITY">Maseno University</option>
        <option value="MANAGEMENTUNIVERSITYOFAFRICA">Management University</option>
        <option value="PANAFRICAUNIVERSITY">Pan Africa Christian University</option>
        <option value="PWANIUNIVERSITY">Pwani University</option>
        <option value="PIONEERINTERNATIONALUNIVERSITY">Pioneer International University</option>
        <option value="RIARAUNIVERSITY">Riara University</option>
        <option value="RONGOUNIVERSITY">Rongo University</option>
        <option value="STPAULSUNIVERSITY">St Pauls University</option>
        <option value="STRATHMOREUNIVERSITY">Strathmore University</option>
        <option value="MURANGAUNIVERSITY">Murang'a University</option>
        <option value="MASENOUNIVERSITY">Maseno University</option>
        <option value="MOIUNIVERSITY">Moi University</option>
        <option value="MULTIMEDIAUNIVERSITY">Multimedia University</option>
        <option value="MERUUNIVERSITYOFSCIENCEANDTECHNOLOGY">Meru University</option>
        <option value="EASTAFRICANUNIVERSITY">East Africa University</option>
        <option value="UZIMAUNIVERSITY">Uzima University</option>
        <option value="ZETECHUNIVERSITY">Zetech University</option>
        <option value="UMMAUNIVERSITY">Umma University</option>
        <option value="KABIANGAUNIVERSITY">KabiangaUniversity</option>
        <option value="COOPERATIVEUNIVERSITY">Cooperative University</option>
        <option value="CATHOLICUNIVERSITY">Catholic University of East Africa</option>
        <option value="TAITATAVETAUNIVERSITY">TaitaTaveta University</option>
        <option value="STRATHMOREUNIVERSITY">Strathmore University</option>
        <option value="MAASAIUNIVERSITY">Maasai University</option>
        <option value="KIRIRIUNIVERSITY">Kiriri University</option>
        <option value="KENYAMETHODISTUNIVERSITY">Kenya Methodist University</option>
        <option value="MOUNTKENYAUNIVERSITY">Mount Kenya University</option>
        <option value="GARISSAUNIVERSITY">GARISSA University</option>
        <option value="INTERNATIONALLEADERSHIPUNIVERSITY">International Leadership University</option>
        <option value="GREATLAKEUNIVERSITY">Greate Lakes University </option>
        <option value="KENYATTAUNIVERSITY">Kenyatta University</option>
        <option value="NAIROBIUNIVERSITY">Nairobi  University</option>
        <option value="EMBUUNIVERSITY">Embu University</option>
        <option value="EASTERNAFRICABARATONUNIVERSITY">Eastern Africa Baraton University</option>
        <option value="PRESBYTERIANUNIVERSITY">Prebyterian University</option>
        <option value="TECHNICALUNIVERSITYOFMOMBASA">Technical University OF Mombasa</option>
        <option value="TECHNICALUNIVERSITYOFKENYA">Technical University of Kenya</option>
        <option value="SCOTTUNIVERSITY">Scott University</option>
        <option value="SOUTHEASTERNKENYAUNIVERSITY">South Eastern KenyaUniversity</option>
    </select>
</Form.Group>


<Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
    <Form.Label>
        Other Institution <span style={{ color: 'red' }}>*</span>
    </Form.Label>
    <Form.Text className="text-muted">
        Please provide the full name of the institution without abbreviation.
    </Form.Text>
    <Form.Control
        type="text"
        placeholder="Institution"
       
        onChange={(e) => handleInputChange('Institution', e.target.value)}
    />
   
</Form.Group>

    <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }} >
      <Form.Label>Amount Applied</Form.Label>
      <Form.Control type="text" placeholder="Amount applied" 
      onChange={(e) => handleInputChange('Amountexpecting', e.target.value)}
      />

    </Form.Group>
    <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
      <Form.Label>AdmissionNo/RegNo</Form.Label>
      <Form.Control type="text" placeholder="Admission No"
      
      onChange={(e) => handleInputChange('Admno', e.target.value)}
      />
    </Form.Group>


    <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
        <Form.Label>Level of Study</Form.Label>
            <select class="custom-select" style={{width: '100%'}} onChange={(e) => handleInputChange('Levelofstudy', e.target.value)} >
            <option selected>Open this select menu</option>
            <option value="Postgraduate">Postgraduate</option>
            <option value="Undergraduate">Undergraduate</option>
            <option value="Diploma">Diploma</option>
            <option value="Certificate">Certificate</option>
            </select>
        </Form.Group>

        <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
        <Form.Label>Mode of study</Form.Label>
            <select class="custom-select" style={{width: '100%'}}  onChange={(e) => handleInputChange('Modeofstudy', e.target.value)} >
            <option selected>Open this select menu</option>
            <option value="Fulltime">Fulltime</option>
            <option value="Partime">Partime</option>
            </select>
        </Form.Group>


        <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
        <Form.Label>Year of study</Form.Label>
            <select class="custom-select" style={{width: '100%'}}  onChange={(e) => handleInputChange('Yearofstudy', e.target.value)}>
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
            <select class="custom-select" style={{width: '100%'}}  onChange={(e) => handleInputChange('Semester', e.target.value)} >
            <option selected>Open this select menu</option>
            <option value="1st semester">1</option>
            <option value="2nd semester">2</option>
            <option value="3rd semester">3</option>
            </select>
        </Form.Group>

        <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
        <Form.Label>Course Duration</Form.Label>
            <select class="custom-select" style={{width: '100%'}} onChange={(e) => handleInputChange('Coarseduration', e.target.value)} >
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
            <select class="custom-select"  style={{width: '100%'}} onChange={(e) => handleInputChange('Family', e.target.value)}  >
            <option selected>Open this select menu</option>
            <option value="totalorphan">Total orphan</option>
            <option value="partialorphan">Partial orphan</option>
            <option value="singleparent">Single Parent</option>
            <option value="bothparentsalive">Both parents alive</option>
            </select>
        </Form.Group>

        <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
        <Form.Label>Father's income</Form.Label>
            <select class="custom-select" style={{width: '100%'}}  onChange={(e) => handleInputChange('Fathersincome', e.target.value)}>
            <option selected>Open this select menu</option>
            <option value="Earns more than kshs.50,000/=">Earns more than kshs.50,000/=</option>
            <option value="Earns less than kshs. 50,000/=">Earns less than kshs. 50,000/=</option>
            <option value="No specific source of income">No specific source of income</option>
            <option value="Not applicable">Not applicable</option>
            </select>
        </Form.Group>
        <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}  onChange={(e) => handleInputChange('Mothersincome', e.target.value)}>
        <Form.Label>Mothers income</Form.Label>
            <select class="custom-select" style={{width: '100%'}}>
            <option selected>Open this select menu</option>
            <option value="Earns more than kshs.50,000/=">Earns more than kshs.50,000/=</option>
            <option value="Earns less than kshs. 50,000/=">Earns less than kshs. 50,000/=</option>
            <option value="No specific source of income">No specific source of income</option>
            <option value="Not applicable">Not applicable</option>
            </select>
        </Form.Group>
   
  
        <Form.Group className="mb-3">
          <Button  style={{ background: 'green',borderColor:'green' , width: '50%', margin: 'auto' }} onClick={() => handleUpdate(applicationid)} >
          {loading ? 'Submitting...' : 'SubmitForm'}
          </Button>
        </Form.Group>
  </Form>

        </div>
    )





}
export default EditStudent