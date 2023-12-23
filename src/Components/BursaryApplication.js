
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
          color: ''
        }}>Secondary School Application Application</h5>
        <p className="card-text" 
        style={{
          color: 'red',
          fontSize: '1rem'
        }}
        >For Secondary School Students Only</p>
        <a href="#" className="btn btn-primary"
         style={{
          backgroundColor: '#154c79',
          borderColor: '#154c79' ,
          outline: '#154c79',
          width: '150px',
          fontStyle: 'bold'
        }}
        onClick ={onclicksecondary}
        >Apply</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title"
         style={{
          backgroundColor: 'grey',
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