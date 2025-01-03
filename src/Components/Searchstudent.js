import React from 'react';
import { useState } from 'react';
import Addminnav from './Adminav';
import Swal from 'sweetalert2'
import axios from 'axios';

const Searchstudent = () => {
    
  
    const [nationalId, setNationalId] = useState('');
    const [record, setRecord] = useState(null);
    const [error, setError] = useState('');
    const [idimage ,Setidimage] = useState('')
  
    const handleChange = (e) => {
      setNationalId(e.target.value);
    };
  
    const handleSearch = async () => {
      if (!nationalId) {
        setError('Please enter a National ID');
        return;
      }
  
      try {
        // Send request to the Flask backend to search for the record
        const response = await axios.get(`https://masingabursarybackend.onrender.com/bursarymanagement/mydetails/${nationalId}`);
        setRecord(response.data[0]); // Set the record if found
        Setidimage(`http://127.0.0.1:5000/${response.data[0].Imageurl}`)
        console.log(record);
        
        setError(''); // Clear previous errors
      } catch (err) {
        setError('Record not found or error occurred.');
        setRecord(null); // Clear any previous record
      }
    };

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
              const response = await fetch(`https://masingabursarybackend.onrender.com/bursarymanagement/approveBursaryapplication/${item.id}`, {
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
      
  
    return (
      <>
       <Addminnav/> 
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full sm:w-96">
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
            Search for Record by National ID
          </h2>
          
          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter National ID"
              value={nationalId}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
  
          <div className="mb-6 text-center">
            <button
              onClick={handleSearch}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none"
            >
              Search
            </button>
          </div>
  
          {error && (
            <p className="text-red-500 text-center font-semibold mb-4">
              {error}
            </p>
          )}
  
          {record && (
            <div className="bg-green-100 p-4 rounded-lg mt-6">
                 
             <img src={idimage} alt="Description of the image" style={{ width: "300px", height: "auto" }} />  
              <h3 className="text-xl font-bold text-green-600">Record Found</h3>
              <p className="text-gray-700 mt-2">Name: {record.Firstname} {record.Middlename}</p>
              <p className="text-gray-700">National ID: {record.Nationalid}</p>
              <p className="text-gray-700">Ward: {record.Ward}</p>
              <button style={{
                backgroundColor:'red' ,
                cursor: 'pointer'
              }} onClick={(e)=>Handleonapprove(e , record)} >{record.Approvalstatus}</button>
            </div>
          )}
        </div>
      </div>
      </>
     
    );
  };




export default Searchstudent;