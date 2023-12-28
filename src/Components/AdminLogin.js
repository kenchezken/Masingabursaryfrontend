import React , {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


function AdminLogin({setnationalid}) {
  const history = useNavigate()
  const [formData, setFormData] = useState({
    Phonenumber: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // TODO: Submit form data to backend
    setLoading(true); // Set loading to true on form submit
    fetch("https://backendmasingaflassk.onrender.com/bursarymanagement/loginadmin", {
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

        Swal.fire({
          title: "Login",
          text: "Login Successful!",
          icon: "success"
        });
        
        history("/Admindashboard")
       
        setnationalid(data.nationalid);
      })
      .catch((response) => {
        console.error("Error:", response.message);
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
        <Form.Label>Phonenumber</Form.Label>
        <Form.Control type="text" placeholder="Phonenumber"  onChange={(event) => {
                      setFormData({ ...formData, Phonenumber: event.target.value });}}/>
      </Form.Group>

      <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  onChange={(event) => {
                      setFormData({ ...formData, password: event.target.value });}}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Button type="submit" style={{ background: '#154c79', width: '50%', margin: 'auto' }} onClick={handleSubmit}> 
        {loading ? 'Loading...' : 'Login'} 
        </Button>
      </Form.Group>
    </Form>
  );
}

export default AdminLogin;
