
import React , {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


function StudentLogin({setRole , setnationalid}) {
  const history = useNavigate()


  const [formData, setFormData] = useState({
    Nationalid: "", // State for the Remember Me checkbox
  });

  const [loading, setLoading] = useState(false);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // TODO: Submit form data to backend
    setLoading(true);
    fetch("https://masingabursarybackend.onrender.com/bursarymanagement/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Response data:", data);
        console.log(data.nationalid)
        history("/Studentdashboard")
        Swal.fire({
          title: "Login",
          text: "Login Successful!",
          icon: "success"
        });
        
        setRole(data.Role)
        setnationalid(data.id);
      })
      .catch((response) => {
        console.error("Error:", response.message);
        Swal.fire({
          title: "Login",
          text: "Login failed. Please try again.",
          icon: "error",
        });
      })
      .finally(() => {
        setLoading(false); // Set loading to false after completion or error
      });


   
  };

  return (
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
      <h2>Kindly Login</h2>

      <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
        <Form.Label>Id.No</Form.Label>
        <Form.Control type="text" placeholder="idnumber"  onChange={(event) => {
                      setFormData({ ...formData, Nationalid: event.target.value });
                 }}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Button type="submit" style={{ background: '#154c79', width: '50%', margin: 'auto' }} onClick={handleSubmit}>
          {loading ? 'Loading...' : 'Login-in'}
        </Button>
      </Form.Group>
    </Form>
  );
}

export default StudentLogin
