
import React from "react";
import { Link, useNavigate } from 'react-router-dom';


const BursaryApplication = () => {
  const navigate = useNavigate();

  const onclicksecondary = ()=>{
  navigate('/Secondaryschoolapplication')
  }
  const onclicktertiary = ()=>{
    navigate('/Tertiary')
    }

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontFamily: "cursive",
          fontStyle:"bold" ,
          margin: "4rem",
          fontStyle: "italic",
        }}
      >
    Coutersy of Honourable Joshua Mbithi Mwalyo
      </h1>
      <div className="row" 
      style={
        {
          marginLeft: '30px' ,
          marginRight: '30px' ,
        }
      }
      >
  <div className="col-sm-6">
  <div className="card">
    <div className="card-body">
      <h5 className="card-title" style={{
        backgroundColor: 'grey',
        color: 'white' // Define a color for better visibility
      }}>PROCEDURE FOR ONLINE BURSARY APPLICATION</h5>
      <p className="card-text" 
        style={{
          color: 'red',
          fontSize: '1rem'
        }}
      >Carefully read the instructions below</p>
      <p>
        <strong>1.</strong> Click the link. <strong> https://bursaryapplication.onrender.com</strong><br />
        <strong>2.</strong> Click on <strong>Bursary Application</strong> in the NavigationBar.<br />
        <strong>3.</strong> Select the <strong>Tertiary Institution Bursary</strong> section and click <strong>Apply</strong>.<br />
        <strong>4.</strong> Carefully fill all the fields as expected.<br />
        <strong>5.</strong> Then click on the <strong>Submit Button</strong>.<br/>
        <strong>6.</strong> To verify and edit your details click to studentLogin and use your  <strong>National ID or Birth Certificate Number</strong>.
      </p>
    </div>
  </div>
</div>

  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title"
         style={{
          backgroundColor: 'grey',
          color: 'white'
        }}
        >Tertiary Institution Bursary Application</h5>
        <p className="card-text" 
        style={{
          color: 'red',
          fontSize: '1rem'
        }}
        >For Tertiary Students Only</p>
        <a href="#" className="btn btn-primary" 
        style={{
          backgroundColor: '#154c79',
          borderColor: '#154c79' ,
          outline: 'green',
          width: '150px',
          fontStyle: 'bold'
        }}
        onClick ={onclicktertiary}
        >Apply</a>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default BursaryApplication;