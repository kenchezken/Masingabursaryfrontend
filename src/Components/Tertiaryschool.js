import { useState } from "react";
import Swal from 'sweetalert2'
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMap } from "@fortawesome/free-regular-svg-icons";
import { faUniversity } from "@fortawesome/free-solid-svg-icons";
import NavigationBar from "./Navbar";
import withReactContent from 'sweetalert2-react-content'



const Tertiary = () => {

  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [Imageurl, setImageUrl] = useState("");


  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const[Firstname , setFirstname] = useState('')
  const[Middlename , setMiddlename] = useState('')
  const[Lastname , setLastname] = useState('')
  const[Gender , setGender] = useState('')

  const[Assistantchiefno , setAssistantchiefno] = useState('')

  const[Nationalid , setNationalid] = useState('')
  const[Phonenumber , setPhonenumber] = useState('')
  const[GuardiansNo , setGuardiansNo] = useState('')
  const[Guardianid , setGuardianid] = useState('')  
  const[Disability ,setDisability] = useState('')
  const[Ward , setWard] = useState('')
  const[Levelofstudy , setLevelofstudy] = useState('')
  const[Location , setLocation] = useState('')
  const[Sublocation , setSublocation] = useState('')
  const[Village ,setVillage] = useState('') 
  const[Chiefname , setChiefname] = useState('')
  const[Chiefphonenumber , setChiefphonenumber] = useState('')
  const [Assistantchiefname , setAssistantchiefname] = useState('')
  const[Instituition , setInstituition] = useState('')
  const [University , setUniversity] = useState('')
  const[Amountexpecting , setAmountexpecting] = useState('')
  const[Admno , setAdmno] = useState('')
  const[Modeofstudy , setModeofstudy] = useState('')
  const[Yearofstudy , setYearofstudy] = useState('')
  const[Semester , setSemester] = useState('')
  const[Coarseduration , setCoarseduration] = useState('')
  const[Family , setFamily] = useState('')
  const[Fathersincome , setFathersincome] = useState('')
  const[Mothersincome , setMothersincome] = useState('')
  const[Approvalstatus , setApprovalstatus] = useState('Notapproved')


  const [currentStep, setCurrentStep] = useState(1);
  
  const [loading ,setLoading] = useState(false)

  

  const goToNextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 5));

  const goToPreviousStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleUpload = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append("file", image);

    setUploading(true);

    try {
      const response = await axios.post("http://127.0.0.1:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setImageUrl(response.data.Imageurl);
      console.log(Imageurl);
      
      setUploading(false);
    } catch (error) {
      console.error("Upload error:", error);
      setUploading(false);
    }
  };





  function submitform(e) {
    e.preventDefault();
    setLoading(true);
    // Check if any field is empty
    if (
      Firstname.trim() === '' ||
      Middlename.trim() === '' ||
      Lastname.trim() === '' ||
      Gender.trim() === '' ||
      Nationalid.trim() === '' ||
      Phonenumber.trim() === '' ||
      GuardiansNo.trim() === '' ||
      Guardianid.trim() === '' ||
      Disability.trim() === '' ||
      Ward.trim() === '' ||
      Levelofstudy.trim() === '' ||
      Location.trim() === '' ||
      Sublocation.trim() === '' ||
      Village.trim() === '' ||
      Chiefname.trim() === '' ||
      Chiefphonenumber.trim() === '' ||
      Assistantchiefname.trim() === '' ||
      Assistantchiefno.trim() === '' ||
      Amountexpecting.trim() === '' ||
      Admno.trim() === '' ||
      Modeofstudy.trim() === '' ||
      Yearofstudy.trim() === '' ||
      Semester.trim() === '' ||
      Coarseduration.trim() === '' ||
      Family.trim() === '' ||
      Fathersincome.trim() === '' ||
      Mothersincome.trim() === '' ||
      Imageurl.trim() === ''
  ) {
      // Handle empty fields, maybe show an error message or prevent form submission
      Swal.fire({
        title: "Failed",
        text: "Submission failed , kindly fill all the fields",
        icon: "error",
      });
      return;
  }

    
  
    fetch('http://127.0.0.1:5000/bursarymanagement/tertiaryapplication', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Firstname , Middlename ,Lastname, Gender, Phonenumber, Nationalid, GuardiansNo, Guardianid, Disability,
         Levelofstudy , Ward, Location, Sublocation, Village, Chiefname , Chiefphonenumber , Assistantchiefname, Assistantchiefno ,Instituition, Admno,Amountexpecting ,
        Modeofstudy, Yearofstudy, Semester, Coarseduration, Family, Fathersincome, University ,
        Mothersincome, Approvalstatus , Imageurl
      })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      
      .then(data => {
        Swal.fire({
          title: "Good job!",
          text: data.message,
          icon: "success"
        });
        setLoading(false);
        // Reset the form if needed
        // resetForm();
      })
      .catch(error => {
        console.error('Error:', error);
        Swal.fire({
          title: 'Error!',
          text: 'Failed to create an application',
          icon: 'error',
        });
        setLoading(false);
      });
  }

  return (
<>
<NavigationBar/>
   
<div className="flex flex-col items-center justify-center " style={{
  marginTop: '30px'
}}>
      {/* Stepper */}
      <div className="flex items-center space-x-14 mb-8">
        <div
          className={`w-8 h-8 flex items-center justify-center rounded-full ${
            currentStep >= 1 ? "bg-blue-600 text-white" : "bg-gray-300"
          }`}
        >
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div className="h-0.5 w-12 bg-gray-300"></div>
        <div
          className={`w-8 h-8 flex items-center justify-center rounded-full ${
            currentStep >= 2 ? "bg-blue-600 text-white" : "bg-gray-300"
          }`}
        >
          <FontAwesomeIcon icon={faMap} />
        </div>
        <div className="h-0.5 w-12 bg-gray-300"></div>
        <div
          className={`w-8 h-8 flex items-center justify-center rounded-full ${
            currentStep >= 3 ? "bg-blue-600 text-white" : "bg-gray-300"
          }`}
        > 
          <FontAwesomeIcon icon={faUniversity} />
        </div>
        <div className="h-0.5 w-12 bg-gray-300"></div>

        <div
          className={`w-8 h-8 flex items-center justify-center rounded-full ${
            currentStep >= 4 ? "bg-blue-600 text-white" : "bg-gray-300"
          }`}
        >
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div className="h-0.5 w-12 bg-gray-300"></div>
        <div
          className={`w-8 h-8 flex items-center justify-center rounded-full ${
            currentStep >= 5 ? "bg-blue-600 text-white" : "bg-gray-300"
          }`}
        >
          5
        </div>

      </div>

      {/* Form Steps */}
      <div className="bg-white p-6 rounded-lg shadow-md w-96">

        {currentStep === 1 && (
  <div className="space-y-4">
    <h2 className="text-xl font-semibold text-gray-800">Personal Details</h2>
    <input
      type="text"
      placeholder="Firstname"
      value={Firstname}
      onChange={(e) =>{
        setFirstname(e.target.value)
        console.log(Firstname);
   }}
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
        <input
      type="text"
      placeholder="Middlename"
      value={Middlename}
      onChange={(e) =>{
        setMiddlename(e.target.value)
        console.log(Middlename);
   }}
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
        <input
      type="text"
      placeholder="Lastname"
      value={Lastname}
      onChange={(e) =>{
        setLastname(e.target.value)
        console.log(Lastname);
   }}
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
     
                  <select class="custom-select" style={{width: '100%'}}
                  value={Gender}
                  onChange={(e) => setGender(e.target.value)
                    
                  } >
                  <option selected>Open to select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                  </select>
      
            <select class="custom-select" style={{width: '100%'}}
            value={Disability}
            onChange={(e) => setDisability(e.target.value)} >
            <option selected>Disability check</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            </select>
        <input
      type="text"
      placeholder="National ID/Birth Certificate No"
      value={Nationalid}
      onChange={(e) => setNationalid(e.target.value) 
        
      }
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
     <div>
            <label
              htmlFor="file-input"
              className="inline-block px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg cursor-pointer hover:bg-blue-700 transition duration-300"
            >
              Select Image
            </label>
            <input
              id="file-input"
              type="file"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
          <button
            onClick={handleUpload}
            disabled={!image || uploading}
            className={`px-6 py-2 text-sm font-medium rounded-lg ${
              !image || uploading
                ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                : "bg-green-600 text-white hover:bg-green-700"
            } transition duration-300`}
          >
            {uploading ? "Uploading..." : "Upload"}
          </button>
          {Imageurl && (
            <div className="mt-5 text-center">
              <h4 className="text-lg font-medium mb-3 " style={{
                color: 'green'
              }}>Uploaded Image successfully</h4>
           
            </div>
          )}

        <input
      type="text"
      placeholder="Your PhoneNumber"
      value={Phonenumber}
      onChange={(e) => setPhonenumber(e.target.value)}
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
        <input
      type="text"
      placeholder="Guardians/Parents Mobile No"
      value={GuardiansNo}
      onChange={(e) => setGuardiansNo(e.target.value)}
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
        <input
      type="text"
      placeholder="Guardians/Parents id"
      value={Guardianid}
      onChange={(e) => setGuardianid(e.target.value)}
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  
    <button
      onClick={goToNextStep}
      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
    >
      Next: Residence Details
    </button>
  </div>
)}
        {currentStep === 2 && (
         <div className="space-y-4">
         <h2 className="text-xl font-semibold text-gray-800">Residence Details</h2>
         <select class="custom-select" style={{width: '100%'}}
         value={Ward}
         onChange={(e) => setWard(e.target.value)}>
                 <option selected>Tap to Select ward</option>
                 <option value="MASINGACENTRAL">Masinga Central</option>
                 <option value="EKALAKALAIKATINI">Ekalakala/Ikatini ward</option>
                 <option value="NDITHINI">Ndithini ward</option>
                 <option value="KIVAA<">Kivaa ward</option>
                 <option value="MUTHESYA">Muthesya ward</option>
                 </select>
     
           <input
           type="text"
           placeholder="Location"
           value={Location}
           onChange={(e) => setLocation(e.target.value)}
           className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
         />
             <input
           type="text"
           placeholder="Sub.location"
           value={Sublocation}
           onChange={(e) => setSublocation(e.target.value)}
           className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
         />
       
         <input
           type="text"
           placeholder="Village"
           value={Village}
           onChange={(e) => setVillage(e.target.value)}
           className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
         />
             <input
           type="text"
           placeholder="Chief's Name"
           value={Chiefname}
           onChange={(e) =>{
             setChiefname(e.target.value)
            
        }}
           className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
         />
             <input
           type="text"
           placeholder="Chiefs Phone.No"
           value={Chiefphonenumber}
           onChange={(e) =>{
             setChiefphonenumber(e.target.value)
           
        }}
           className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
         />
             <input
           type="text"
           placeholder="Assistant Chief Name"
           value={Assistantchiefname}
           onChange={(e) =>{
             setAssistantchiefname(e.target.value)
          
        }}
           className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
         />
             <input
           type="text"
           placeholder="Assistant Chief Phone No"
           value={Assistantchiefno}
           onChange={(e) =>{
             setAssistantchiefno(e.target.value)
          
        }}
           className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
         />
         <div className="flex justify-between">
           <button
             onClick={goToPreviousStep}
             className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
           >
             Back
           </button>
           <button
             onClick={goToNextStep}
             className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
           >
             Next: Institution Details
           </button>
         </div>
       </div>
        )}

         {currentStep === 3 && (
          <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Institution Details</h2>
          <select className="custom-select" style={{ width: '100%' }}
          value={University}
          onChange={(e) => setUniversity(e.target.value)} >
              <option defaultValue>Select a university</option>
              <option value="Adventist University of Africa">Adventist University of Africa</option>
              <option value="Africa International University">Africa International University</option>
              <option value="Africa Nazarene University">Africa Nazarene University</option>
              <option value="AMREF International University">Amref International University</option>
              <option value="Chuka University">Chuka University</option>
              <option value="Daystar University">Daystar University</option>
              <option value="GRETSA University">Gretsa University</option>
              <option value="Dedan Kimathi University of Technology">Dedan Kimathu University</option>
              <option value="Islamic University of Kenya">Islamic University</option>
              <option value="Jaramogi Oginga Odinga University of Science and Technology">Jaramogi Oginga Odinga University of Science and Technology</option>
              <option value="Kabarak University">Kabarak University</option>
              <option value="Karatina University">KARATINA University</option>
              <option value="Kenya Highlands Evangelical University">Kenya Highland University</option>
              <option value="Kibabii University">Kibabii University</option>
              <option value="KCA University">KCA University</option>
              <option value="Laikipia University">Laikipia University</option>
              <option value="Kirinyaga University">Kirinyaga University</option>
              <option value="Kiriri Women’s University of Science and Technology">Kiriri Womens University</option>
              <option value="Kisii University">Kisii University</option>
              <option value="Alupe University">Kisii University</option>
              <option value="Lukenya University">Lukenya University</option>
              <option value="Machakos University">Machakos University</option>    
              <option value="University of Embu">University of Embu</option>
              <option value="Jomo Kenyatta University of Agriculture and Technology">Jomo Kenyata University of Agriculture and Technology University</option>
              <option value="Masinde Muliro University of Science and Technology">MasindeMuliro University</option>
              <option value="Management University of Africa">Management University</option>
              <option value="Pan Africa Christian University">Pan Africa Christian University</option>
              <option value="Pwani University">Pwani University</option>
              <option value="Pioneer International University">Pioneer International University</option>
              <option value="Riara University">Riara University</option>
              <option value="Rongo University">Rongo University</option>
              <option value="St. Paul’s University">St Pauls University</option>
              <option value="Strathmore University">Strathmore University</option>
              <option value="Murang’a University of Technology">Murang'a University of Technology</option>
              <option value="Maseno University">Maseno University</option>
              <option value="Moi UniversityY">Moi University</option>
              <option value="Multimedia University of Kenya">Multimedia University</option>
              <option value="Meru University of Science and Technology">Meru University</option>
              <option value="The East African University">The East African University</option>
              <option value="Egerton University">Egerton University</option>
              <option value="University of Eldoret">University of Eldoret</option>
              <option value="Uzima University">Uzima University</option>
              <option value="Zetech University">Zetech University</option>
              <option value="Umma University">Umma University</option>
              <option value="KAG EAST University" >KAG EAST University</option>
              <option value="University of Kabianga">University of Kabianga</option>
              <option value="The Co-operative University of Kenya">The Co-operative University of Kenya</option>
              <option value="Catholic University of Eastern Africa (CUEA)">Catholic University of Eastern Africa (CUEA)</option>
              <option value="Taita Taveta University">TaitaTaveta University</option>
              <option value="Strathmore University">Strathmore University</option>
              <option value="Maasai Mara University">MaasaiMara University</option>
              <option value="Tom Mboya University">Tom Mboya University</option>
               <option value="Kaimosi Friends University">Kaimosi Friends University</option>
               <option value="Tharaka University">Tharaka University</option>
              <option value="Kenya Methodist University">Kenya Methodist University</option>
              <option value="Mount Kenya University">Mount Kenya University</option>
              <option value="Garissa University">Garissa University</option>
              <option value="International Leadership University">International Leadership University</option>
              <option value="Great Lakes University of Kisumu">Great Lakes University of Kisumu </option>
              <option value="Kenyatta University">Kenyatta University</option>
              <option value="University of Nairobi">University of Nairobi</option>
              <option value="Presbyterian University of East Africa">Presbyterian University of East Africa</option>
              <option value="Technical University of Mombasa">Technical University OF Mombasa</option>
              <option value="Technical University of Kenya">Technical University of Kenya</option>
              <option value="Scott Christian University">Scott Christian University</option>
              <option value="South Eastern Kenya University">South Eastern Kenya University</option>
          </select>
      
          <input
            type="text"
            placeholder="Institution"
            value={Instituition}
            onChange={(e) => setInstituition(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Amount Applied"
            value={Amountexpecting}
            onChange={(e) =>{
              setAmountexpecting(e.target.value)
         }}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="AdmissionNo/RegNo"
            value={Admno}
            onChange={(e) => setAdmno(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
       <select class="custom-select" style={{width: '100%'}} 
       value={Levelofstudy}
       onChange={(e) => setLevelofstudy(e.target.value)} >
                  <option selected>Select Level of study</option>
                  <option value="Postgraduate">Postgraduate</option>
                  <option value="Undergraduate">Undergraduate</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Certificate">Certificate</option>
                  </select>
      
                  <select class="custom-select" style={{width: '100%'}}
                  value={Modeofstudy}
                  onChange={(e) => setModeofstudy(e.target.value)} >
                  <option selected>Select Mode of Study</option>
                  <option value="Fulltime">Fulltime</option>
                  <option value="Partime">Partime</option>
                  </select>
      
                  <select class="custom-select" style={{width: '100%'}}
                  value={Yearofstudy}
                  onChange={(e) => setYearofstudy(e.target.value)}>
                  <option selected>Select Year of study</option>
                  <option value=" Year1">1</option>
                  <option value="Year2">2</option>
                  <option value="Year3">3</option>
                  <option value="Year4">4</option>
                  <option value="Year5">5</option>
                  <option value="Year6">6</option>
                  <option value="Year7">7</option>
                  </select>
      
                  <select class="custom-select" style={{width: '100%'}}
                  value={Semester}
                  onChange={(e) => setSemester(e.target.value)}>
                  <option selected>Select Semester</option>
                  <option value="1st semester">1</option>
                  <option value="2nd semester">2</option>
                  <option value="3rd semester">3</option>
                  </select>
      
                  <select class="custom-select" style={{width: '100%'}} 
                  value={Coarseduration}
                  onChange={(e) => setCoarseduration(e.target.value)}>
                  <option selected>Course Duration</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  </select>
          <div className="flex justify-between">
            <button
              onClick={goToPreviousStep}
              className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
            >
              Back
            </button>
            <button
              onClick={goToNextStep}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Next: Familydetails
            </button>
          </div>
        </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Family</h2>
          <select class="custom-select" style={{width: '100%'}} 
          value={Family}
          onChange={(e) => setFamily(e.target.value)} >
                  <option selected>Open this select menu</option>
                  <option value="totalorphan">Total orphan</option>
                  <option value="partialorphan">Partial orphan</option>
                  <option value="singleparent">Single Parent</option>
                  <option value="bothparentsalive">Both parents alive</option>
                  </select>
      
                  <select class="custom-select" style={{width: '100%'}} 
                  value={Fathersincome}
                  onChange={(e) => setFathersincome(e.target.value)}>
                  <option selected>Select Fathers income</option>
                  <option value="Earns more than kshs.50,000/=">Earns more than kshs.50,000/=</option>
                  <option value="Earns less than kshs. 50,000/=">Earns less than kshs. 50,000/=</option>
                  <option value="No specific source of income">No specific source of income</option>
                  <option value="Not applicable">Not applicable</option>
                  </select>
      
                  <select class="custom-select" style={{width: '100%'}}
                  value={Mothersincome}
                  onChange={(e) => setMothersincome(e.target.value)}>
                  <option selected>Select Mothers income</option>
                  <option value="Earns more than kshs.50,000/=">Earns more than kshs.50,000/=</option>
                  <option value="Earns less than kshs. 50,000/=">Earns less than kshs. 50,000/=</option>
                  <option value="No specific source of income">No specific source of income</option>
                  <option value="Not applicable">Not applicable</option>
                  </select>
      
      
          <div className="flex justify-between">
            <button
              onClick={goToPreviousStep}
              className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
            >
              Back
            </button>
            <button
              onClick={goToNextStep}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Next: Confirmation
            </button>
          </div>
        </div>
        )}

        {currentStep === 5 && (
          <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Confirmation</h2>
          <p className="text-gray-600">Please confirm your details before submitting.</p>
          <div className="flex justify-between">
            <button
              onClick={goToPreviousStep}
              className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
            >
              Back
            </button>
            <button
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700" 
              onClick={submitform}
            >
              Submit
            </button>
          </div>
        </div>
        )}

      </div>
    </div>
</>
  );
};

export default Tertiary
