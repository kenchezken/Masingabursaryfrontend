import { useState ,  useEffect } from 'react'
import { Drawer } from 'flowbite';
import { Bar ,Pie } from "react-chartjs-2";
import Addminnav from './Adminav';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {ThreeDots} from 'react-loader-spinner';
import * as XLSX from 'xlsx'; // Import xlsx
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  ArcElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { faChartLine, faUsers } from '@fortawesome/free-solid-svg-icons';

function Admindashboard() {
  const [count, setCount] = useState(0)
   
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 50; 

  const [applications, setapplication] = useState([]);
  const [error , seterror] = useState(null)
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement, Title, Tooltip, Legend);


useEffect(() => {
  // Fetch data only if nationalid is available
    setIsLoading(true);
    fetch(`https://masingabursarybackend.onrender.com/bursarymanagement/allapplication`)
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
      })
      .finally(() => {
        setIsLoading(false);
      });
  
}, []); // Fetch whenever nationalid changesThis empty dependency array ensures the effect runs once on component mount

  const numberofapplicants = applications.length

  const maleCount = applications.filter(applicant => applicant.Gender === 'Male').length;
  const femaleCount = applications.filter(applicant => applicant.Gender === 'Female').length;


  const Kivaacount = applications.filter(applicant =>applicant.Ward === 'KIVAA').length
  const Muthesyacount = applications.filter(applicant =>applicant.Ward === 'MUTHESYA').length
  const Ekalakalacount = applications.filter(applicant =>applicant.Ward === 'EKALAKALAIKATINI').length
  const Masingacount = applications.filter(applicant =>applicant.Ward === 'MASINGACENTRAL').length
  const Ndithinicount = applications.filter(applicant =>applicant.Ward === 'NDITHINI').length






  
//barchart configuration
  const data = {
    labels: ["MasingaCentral", "Muthesya", "Kivaa", "Ndithini", "Ekalakala/Ikatini"],
    
    datasets: [
      {
        label: "Applicants",
        data: [Masingacount, Muthesyacount, Kivaacount, Ndithinicount, Ekalakalacount],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",  // Red
          "rgba(54, 162, 235, 0.6)",  // Blue
          "rgba(255, 206, 86, 0.6)",  // Yellow
          "rgba(75, 192, 192, 0.6)",  // Green
          "rgba(153, 102, 255, 0.6)", // Purple
        ],
  
        borderWidth: 1,
      },
    ],
  };
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  
 //piechart config
 const piedata = {
  labels: ['Male', 'Female'],
  datasets: [
    {
      label: 'Gender',
      data: [maleCount, femaleCount],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const pieoptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top', // Position of the legend: 'top', 'left', 'bottom', or 'right'
    },
    tooltip: {
      enabled: true,
    },
  },
};

const handleDelete = async (itemId) => {

  const confirmDelete = window.confirm('Are you sure you want to delete this item?');
  if (!confirmDelete) return;

  try {
    const response = await axios.delete(`https://masingabursarybackend.onrender.com/bursarymanagement/${itemId}`);
    alert(response.data.message); // Show success message
    setapplication((prevApplications) => 
      prevApplications.filter((item) => item.id !== itemId)
    );
  } catch (error) {
    console.error('Error deleting item:', error);
    if (error.response) {
      alert(`Error: ${error.response.data.message}`);
    } else {
      alert('An error occurred while deleting the item.');
    }
  }
}

const handleSearch = (event) => {
  setSearchTerm(event.target.value.toLowerCase());
};

const filteredApplications = applications.filter((app) => 
  app.Firstname?.toLowerCase().includes(searchTerm) ||
  app.Middlename?.toLowerCase().includes(searchTerm) ||
  app.Nationalid?.toString().includes(searchTerm) ||
  app.Ward?.toLowerCase().includes(searchTerm) ||
  app.Instituition?.toLowerCase().includes(searchTerm) ||
  app.University?.toLowerCase().includes(searchTerm)
);

const paginatedRecords = filteredApplications.slice(
  (currentPage - 1) * recordsPerPage,
  currentPage * recordsPerPage
);

const totalPages = Math.ceil(filteredApplications.length / recordsPerPage);

const handleDownloadExcel = () => {
  // Prepare data for Excel
  const worksheet = XLSX.utils.json_to_sheet(
    filteredApplications.map((app) => ({
      Fullname: `${app.Firstname} ${app.Middlename}`,
      ID_Number: app.Nationalid,
      Registration_Number: app.Admno,
      Ward: app.Ward,
      Institutition : app.University || app.Institutuition ,
      Approval_Status: app.Approvalstatus,
    }))
  );
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Applications');

  // Generate Excel file and trigger download
  XLSX.writeFile(workbook, 'Applications.xlsx');
};








return (
    <>
<Addminnav/>     
{isLoading ? (
 <div className="flex justify-center items-center h-screen">
 <ThreeDots color="#00BFFF" height={80} width={80} />
</div>
):(
<div className="p-4 sm:ml-64">
   <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14"
   >

      <div className="grid grid-cols-3 gap-4 mb-4">
         <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800"
         style={{
          height: "200px",
        }}
         >
            <p className="text-2xl text-gray-400 dark:text-gray-500">
             Total Applicants {numberofapplicants}
            </p>
         </div>
         <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800"
          style={{
            height: "200px",
          }}
         >
         <div className="flex items-center mb-3">
                  
               </div>
               
               <div className="flex flex-col justify-between flex-grow mt-4"
               
               >
                   <div className="flex items-center mb-2">
                       <p className="font-medium text-gray-700 dark:text-gray-200 w-20">Male: {maleCount}</p>
                      
                   </div>
                   <div className="flex items-center"  style = {{
                     marginTop: '0px'
                   }}>
                       <p className="font-medium text-gray-700 dark:text-gray-200 w-20">Female:{femaleCount}</p>
                       
                   </div>
               </div>
         </div>
         <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800"
          style={{
            height: "200px",
          }}
         >
         <div
    className="flex rounded-lg h-full  p-4 flex-col"
    style={{
      overflowY: "auto", // Enable vertical scrolling if content overflows
    }}
  >
    <div className="flex items-center mb-3">
      <div
        className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0"
      >
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      </div>
      <h2 className="text-gray-900 dark:text-white text-lg font-medium">
        Applicants by ward
      </h2>
    </div>
    <div className="flex-grow">
      <table className="w-full text-left text-gray-700 dark:text-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 font-semibold bg-gray-300 dark:bg-gray-700">
              Ward
            </th>
            <th className="px-4 py-2 font-semibold bg-gray-300 dark:bg-gray-700">
              Count
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-300 dark:border-gray-700">
            <td className="px-4 py-2">MasingaCentral</td>
            <td className="px-4 py-2">{Masingacount}</td>
          </tr>
          <tr className="border-b border-gray-300 dark:border-gray-700">
            <td className="px-4 py-2">Muthesya</td>
            <td className="px-4 py-2">{Muthesyacount}</td>
          </tr>
          <tr className="border-b border-gray-300 dark:border-gray-700">
            <td className="px-4 py-2">Kivaa</td>
            <td className="px-4 py-2">{Kivaacount}</td>
          </tr>
          <tr className="border-b border-gray-300 dark:border-gray-700">
            <td className="px-4 py-2">Ndithini</td>
            <td className="px-4 py-2">{Ndithinicount}</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Ekalakala/Ikatini</td>
            <td className="px-4 py-2">{Ekalakalacount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
         </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">

         <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800"
         style={{
          height: '300px'
         }}
         >

            
       
             <div className="flex-grow" style={{ height: '300px', width: '100%' }}>
               <Bar data={data} options={{
                 responsive: true,
                 maintainAspectRatio: false,
               }} />
             </div>
           
         </div>
         <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800"
          style={{
            height: '300px'
           }}
         >
         <div style={{ width: '50%', margin: 'auto' }}>
      
      <Pie data={piedata} options={pieoptions} />
    </div>
         </div>
      </div>

      <div className="flex justify-between items-center mb-4">
  <input
    type="text"
    placeholder="Search by name, ID, or ward..."
    value={searchTerm}
    onChange={handleSearch}
    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
  />
  <button
    onClick={handleDownloadExcel}
    className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center ml-4"
  >
    <FontAwesomeIcon icon={faDownload} className="mr-2" />
    Download Excel
  </button>
</div>


<div className="relative overflow-x-auto shadow-md sm:rounded-lg" style={{
  width: '100%',
  maxHeight: "600px",
  overflowY: "auto",
}}>
  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th>#</th>
        <th className="px-6 py-3">Student Fullname</th>
        <th className="px-6 py-3">Id Number</th>
        <th className="px-6 py-3">Registration Number</th>
        <th className="px-6 py-3">Ward</th>
        <th className = "px-6 py-3">Instituition</th>
        <th className="px-6 py-3">Approval Status</th>
        <th className="px-6 py-3">Actions</th>
      </tr>
    </thead>
    <tbody>
      {paginatedRecords.map((item, index) => (
        <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600" key={item.id}>
          <td className="px-6 py-4">{(currentPage - 1) * recordsPerPage + index + 1}</td>
          <td className="px-6 py-4">{item.Firstname} {item.Middlename}</td>
          <td className="px-6 py-4">{item.Nationalid}</td>
          <td className="px-6 py-4">{item.Admno}</td>
          <td className="px-6 py-4">{item.Ward}</td>
          <td className= "px-6 py-4">{item.University|| item.Instituition}</td>
          <td className="px-6 py-4 text-center">
            {item.Approvalstatus === 'Approved' ? (
              <FontAwesomeIcon icon={faCheckCircle} color="green" />
            ) : item.Approvalstatus === 'Notapproved' ? (
              <FontAwesomeIcon icon={faTimesCircle} color="red" />
            ) : (
              <FontAwesomeIcon icon={faQuestionCircle} color="gray" />
            )}
          </td>
          <td className="px-6 py-4 text-right">
            <a onClick={() => handleDelete(item.id)}>
              <FontAwesomeIcon icon={faTrash} color="red" style={{ cursor: 'pointer' }} />
            </a>
          </td>
          <td className="px-6 py-4 text-right">
            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View more</a>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  <div className="flex justify-center items-center space-x-4 mt-4">
      {/* Previous Button */}
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((prev) => prev - 1)}
        className={`p-3 rounded-full border transition-all ${
          currentPage === 1
            ? "text-gray-400 border-gray-300 cursor-not-allowed"
            : "text-blue-600 border-blue-400 hover:bg-blue-100"
        }`}
        title="Previous Page"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      {/* Next Button */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage((prev) => prev + 1)}
        className={`p-3 rounded-full border transition-all ${
          currentPage === totalPages
            ? "text-gray-400 border-gray-300 cursor-not-allowed"
            : "text-blue-600 border-blue-400 hover:bg-blue-100"
        }`}
        title="Next Page"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>

</div>




   </div>
</div>
)}


    </>
  )
}

export default Admindashboard
