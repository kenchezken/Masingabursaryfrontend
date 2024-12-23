import {React} from 'react'
import { Bar ,Pie } from "react-chartjs-2";
import Addminnav from './Adminav';
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

const Graphicalanalysis =() =>{

ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement, Title, Tooltip, Legend);

//barchart configuration

const data = {
    labels: ["MasingaCentral", "Muthesya", "Kivaa", "Ndithini", "Ekalakala/Ikatini"] ,
    
    datasets: [
      {
        label: "Applicants",
        data: [50, 40, 5, 95, 10],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",  // Red
          "rgba(54, 162, 235, 0.6)",  // Blue
          "rgba(255, 206, 86, 0.6)",  // Yellow
          "rgba(75, 192, 192, 0.6)",  // Green
          "rgba(153, 102, 255, 0.6)" // Purple
        ],
  
        borderWidth: 1
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
        data: [200, 300],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)'
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






    return(
<>
<Addminnav/>

<div class="p-4 sm:ml-64">
   <div class="p-4 ">
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
       
   </div>
</div>




</>

    )

}

export default Graphicalanalysis;

