import  React ,{useState , useEffect} from 'react';
import './Studentdashboard.css'
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import NavigationBar from './Navbar';
import { Link } from 'react-router-dom';

function Studentdashboard({nationalid}){

    const [details, setdetails] = useState([]);
    const [uploadedimg , setuploadedimg] =useState("")
    const [error , seterror] = useState(null)
    
    useEffect(() => {
        // Fetch data only if nationalid is available
        if (nationalid) {
          fetch(`http://127.0.0.1:5000/bursarymanagement/mydetails/${nationalid}`)
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
            .then(data => {
                
              setdetails(data[0]);
               // Assuming your API returns an array of details
              setuploadedimg(data[0].Imageurl)
              console.log(data);
            })
            .catch(error => {
              seterror('Error fetching data');
              console.error('There was an error fetching the data', error);
            });
        }
      }, [nationalid]); // Fetch whenever nationalid changesThis empty dependency array ensures the effect runs once on component mount

       const handleUpdate = (id) => {
          fetch(`http://127.0.0.1:5000/bursarymanagement/Tertiaryapplication/${id}`, {
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
                  console.error('There was an error updating the data', error);
            });
        };
      
        const handleInputChange = (fieldName, value) => {
          setdetails(prevDetails => ({
            ...prevDetails,
            [fieldName]: value
          }));
        };
    

      return (
        <>
        <NavigationBar/>
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
        <div className="flex flex-col items-center space-y-4 p-4 rounded-lg">
      {/* Image Section */}
      <div>
        <img
          src={uploadedimg}
          alt="National ID"
          className="w-64 h-auto rounded-md border border-gray-200"
        />
      </div>

      {/* Status Section */}
      <div>
        {details.Approvalstatus === "Approved" ? (
          <span className="flex items-center text-green-600 text-lg font-medium space-x-2">
            <FontAwesomeIcon icon={faCheckCircle} /> <span>Approved</span>
          </span>
        ) : details.Approvalstatus === "Notapproved" ? (
          <span className="flex items-center text-green-600 text-lg font-medium space-x-2">
            <FontAwesomeIcon icon={faTimesCircle} /> <span>Pending Approval</span>
          </span>
        ) : (
          <span className="flex items-center text-yellow-600 text-lg font-medium space-x-2">
            <FontAwesomeIcon icon={faQuestionCircle} /> <span>Pending</span>
          </span>
        )}
      </div>
    </div>

             <form 
              
             class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
 
             <div>
               <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Firstname</label>
               <input value={details.Firstname || ""} type= 'text' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required  onChange={(e) => handleInputChange('Firstname', e.target.value)}   ></input>
             </div>
           
           
             <div>
               <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Middlename</label>
               <input value={details.Middlename || ""} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={(e) => handleInputChange('Middlename', e.target.value)} />
             </div>
           
           
             <div>
               <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lastname</label>
               <input value={details.Lastname || ""} onChange={(e) => handleInputChange('Lastname', e.target.value)}class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
             </div>
            
             <div>
               <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
               <select 
                value={details.Gender || ""} 
               class="custom-select" style={{width: '100%'}} 
          onChange={(e) => handleInputChange('Gender', e.target.value)} >
            <option selected>Open this select menu</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
            </select>
      
             </div>
             <div>
               <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phonenumber</label>
               <input value={details.Phonenumber || ""} onChange={(e) => handleInputChange('Phonenumber', e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
             </div>
             <div>
               <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nationalid</label>
               <input value={details.Nationalid || ""} onChange={(e) => handleInputChange('Nationalid', e.target.value)}class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
             </div>
             <div>
               <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">GuardiansNo</label>
               <input value={details.GuardiansNo || ""} onChange={(e) => handleInputChange('GuardiansNo', e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
             </div>
             <div>
               <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Guardianid</label>
               <input value={details.Guardianid || ""} onChange={(e) => handleInputChange('Guardianid', e.target.value)}class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
             </div>
             <div>
               <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Disability</label>
               <select 
              value={details.Disability || ""}
               class="custom-select" style={{width: '100%'}}
            onChange={(e) => handleInputChange('Disability', e.target.value)}
            >
            <option selected>Open this select menu</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            </select>
    
             </div>
             <div>
               <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ward</label>
               <select class="custom-select" style={{width: '100%'}} 
            value={details.Ward || ""}
           onChange={(e) => handleInputChange('Ward', e.target.value)}
           >
           <option selected>Open this select menu</option>
           <option value="MASINGACENTRAL">Masinga Central</option>
           <option value="EKALAKALAIKATINI">Ekalakala/Ikatini ward</option>
           <option value="NDITHINI">Ndithini ward</option>
           <option value="Kivaa ward<">Kivaa ward</option>
           <option value="MUTHESYA">Muthesya ward</option>
           </select>
             </div>
             <div>
               <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
               <input value={details.Location || ""} onChange={(e) => handleInputChange('Location', e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
             </div>
             <div>
               <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sublocation</label>
               <input value={details.Sublocation || ""} onChange={(e) => handleInputChange('Sublocation', e.target.value)}class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
             </div>
             <div>
               <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Village</label>
               <input value={details.Village || ""}
                onChange={(e) => handleInputChange('Village', e.target.value)}
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
             </div>
             <div>
               <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Chiefname</label>
               <input value={details.Chiefname || ""}
               onChange={(e) => handleInputChange('Chiefname', e.target.value)}
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
             </div>
             <div>
               <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Chiefphonenumber</label>
               <input value={details.Chiefphonenumber || ""} 
               onChange={(e) => handleInputChange('Chiefphonenumber', e.target.value)}
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
             </div>
           
             <div>
               <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">AssistantChiefname</label>
               <input value={details.AssistantChiefname || ""}    
              onChange={(e) => handleInputChange('AssistantChiefname', e.target.value)}
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
             </div>
           
             <div>

               <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">AssistantChiefno</label>
               <input value={details.Assistantchiefno || ""}
               onChange={(e) => handleInputChange('Assistantchiefno', e.target.value)}
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
             </div>
           
             <div>
               <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Instituition</label>
               <input value={details.Instituition || ""} 
               onChange={(e) => handleInputChange('Instituition', e.target.value)}
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
             </div>
             <div>
               <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> University</label>
               <select 
               value={details.University || ""} 
               className="custom-select" style={{ width: '100%' }} onChange={(e) => handleInputChange('University', e.target.value)}  >
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
        <option value="KIRINYAGA UNIVERSITY">Kirinyaga University</option>
        <option value="KIRIRIWOMENS">Kiriri Womens University</option>
        <option value="KISIIUNIVERSITY">Kisii University</option>
        <option value="LUKENYAUNIVERSITY">Lukenya University</option>
        <option value="MACHAKOSUNIVERSITY">Machakos University</option>
        <option value="JOMOKENYATTAUNIVERSITYOFAGRICULTUREANDTECHNOLOGY">Jomo Kenyata University of Agriculture and Technology University</option>
        <option value="MASINDEMULIROUNIVERSITY">MasindeMuliro University</option>
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
        <option value="EGERTONUNIVERSITY">Egerton University</option>
        <option value="ELDORETUNIVERSITY">Eldoret University</option>
        <option value="UZIMAUNIVERSITY">Uzima University</option>
        <option value="ZETECHUNIVERSITY">Zetech University</option>
        <option value="UMMAUNIVERSITY">Umma University</option>
        <option value="KABIANGAUNIVERSITY">KabiangaUniversity</option>
        <option value="COOPERATIVEUNIVERSITY">Cooperative University</option>
        <option value="CATHOLICUNIVERSITY">Catholic University of East Africa</option>
        <option value="TAITATAVETAUNIVERSITY">TaitaTaveta University</option>
        <option value="STRATHMOREUNIVERSITY">Strathmore University</option>
        <option value="MAASAIUNIVERSITY">MaasaiMara University</option>
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
             
        
             </div>
             <div>
               <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Amountexpecting</label>
               <input value={details.Amountexpecting || ""} 
               onChange={(e) => handleInputChange('Amountexpecting', e.target.value)}
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
             </div>
             <div>
               <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Admno</label>
               <input value={details.Admno || ""}
               onChange={(e) => handleInputChange('Admno', e.target.value)}
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
             </div>
             <div>
               <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Level of study</label>
               <input value={details.levelofstudy || ""} 
               onChange={(e) => handleInputChange('levelofstudy', e.target.value)}
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
             </div>
             <div>
               <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Modeofstudy</label>
               
               <select
              value={details.Modeofstudy || ""}  
              class="custom-select" style={{width: '100%'}}  onChange={(e) => handleInputChange('Modeofstudy', e.target.value)} >
            <option selected>Open this select menu</option>
            <option value="Fulltime">Fulltime</option>
            <option value="Partime">Partime</option>
            </select>

             </div>
             <div>
               <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Year of study</label>
               <select
               value={details.Yearofstudy || ""}
               
               class="custom-select" style={{width: '100%'}}  onChange={(e) => handleInputChange('Yearofstudy', e.target.value)}>
            <option selected>Open this select menu</option>
            <option value=" Year1">1</option>
            <option value="Year2">2</option>
            <option value="Year3">3</option>
            <option value="Year4">4</option>
            <option value="Year5">5</option>
            <option value="Year6">6</option>
            <option value="Year7">7</option>
            </select>
              
             </div>
             <div>
               <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Semester</label>
               <select 
                value={details.Semester || ""}
               class="custom-select" style={{width: '100%'}}  onChange={(e) => handleInputChange('Semester', e.target.value)} >
            <option selected>Open this select menu</option>
            <option value="1st semester">1</option>
            <option value="2nd semester">2</option>
            <option value="3rd semester">3</option>
            </select>
             </div>
             <div>
               <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Coarseduration</label>
            <select 
               value={details.Coarseduration || ""}
               class="custom-select" style={{width: '100%'}} onChange={(e) => handleInputChange('Coarseduration', e.target.value)} >
            <option selected>Open this select menu</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            </select>
             </div>
             <div>
               <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Family</label>
               <select 
               value={details.Family || ""}
               class="custom-select"  style={{width: '100%'}} onChange={(e) => handleInputChange('Family', e.target.value)}  >
            <option selected>Open this select menu</option>
            <option value="totalorphan">Total orphan</option>
            <option value="partialorphan">Partial orphan</option>
            <option value="singleparent">Single Parent</option>
            <option value="bothparentsalive">Both parents alive</option>
            </select>
             </div>
             <div>
               <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Fathersincome</label>
               <select 
               value={details.Fathersincome || ""}
               class="custom-select" style={{width: '100%'}}  onChange={(e) => handleInputChange('Fathersincome', e.target.value)}>
            <option selected>Open this select menu</option>
            <option value="Earns more than kshs.50,000/=">Earns more than kshs.50,000/=</option>
            <option value="Earns less than kshs. 50,000/=">Earns less than kshs. 50,000/=</option>
            <option value="No specific source of income">No specific source of income</option>
            <option value="Not applicable">Not applicable</option>
            </select>
             </div>

             <div>
               <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Mothersincome</label>
               <select
                value={details.Mothersincome || ""} 
               class="custom-select" style={{width: '100%'}}
               onChange={(e) => handleInputChange('Mothersincome', e.target.value)}
               >
            <option selected>Open this select menu</option>
            <option value="Earns more than kshs.50,000/=">Earns more than kshs.50,000/=</option>
            <option value="Earns less than kshs. 50,000/=">Earns less than kshs. 50,000/=</option>
            <option value="No specific source of income">No specific source of income</option>
            <option value="Not applicable">Not applicable</option>
            </select>
             </div>
            
             <div class="col-span-1 md:col-span-3">
               <button  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
                onClick={() => handleUpdate(details.id)}
               >
                 Edit
               </button>
             </div>
           </form>
        




        {/* <div className="tablediv">
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
      {/* <th>Disability</th>
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
        <td>{item.Instituition}</td>
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
        </div> */} 
      </>
    );
    
          

}


export default Studentdashboard;