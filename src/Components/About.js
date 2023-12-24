import React from "react";
import './about.css'

const About = () => {
  return (
    <div>

<div class="card">
  <div class="card-header">
    Introduction
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>The Constituency Development Fund (CDF) was established by the Constituency Development Fund Act of 2003 with the primary objective of addressing poverty at the grassroots level. It dedicates a minimum of 2.5% of the government's ordinary revenue to grassroots development and poverty reduction, managed by the NG-Constituencies Development Fund Board.

In January 2013, the CDF Act 2003 was repealed and replaced with the Act of 2013, aligning it with the Constitution of Kenya 2010 and emphasizing principles of transparency, separation of powers, and people's participation. Subsequent amendments in December 2015 and 2016 further aligned the Act to the provisions of the 2010 Constitution, making the NG-CDF Act operational.</p>

    </blockquote>
  </div>
</div>

<div class="card">
  <div class="card-header">
    Constituency Background
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>  Masinga Constituency, located in Machakos County, is one of the 290 elective constituencies in Kenya. It is among the 8 constituencies in the county and belongs to Masinga Sub County, established in 2009 from the larger Yatta district.</p>
    </blockquote>
  </div>
  <table className="mp-table">
          <caption>Members of Parliament</caption>
          <thead>
            <tr>
              <th>Elections</th>
              <th>MP</th>
              <th>Party</th>
            </tr>
          </thead>
          <tbody>
            {/* Add MP details here */}
            {/* Example: */}
            <tr>
              <td>1988</td>
              <td>Simon Kitheka Kiilu</td>
              <td>KANU</td>
            </tr>

            <tr>
              <td>1992</td>
              <td>Ronald John Kiluta</td>
              <td>KANU</td>
            </tr>
            <tr>
              <td>1997</td>
              <td>Ronald John Kiluta</td>
              <td>KANU</td>
            </tr>
            <tr>
              <td>2002</td>
              <td>Benson Itwiku Mbai</td>
              <td>KANU</td>
            </tr>
            <tr>
              <td>2007</td>
              <td>Benson Itwiku Mbai</td>
              <td>ODM-KENYA</td>
            </tr>
            <tr>
              <td>2013</td>
              <td>Benson Itwiku Mbai</td>
              <td>Ford People</td>
            </tr>

            <tr>
              <td>2017</td>
              <td>Joshua Mbithi Mwalyo</td>
              <td>Wiper</td>
            </tr> 
            <tr>
              <td>2017</td>
              <td>Joshua Mbithi Mwalyo</td>
              <td>Independent</td>
            </tr> 
           
           
          </tbody>
        </table>
</div>















    </div>
  );
};

export default About;