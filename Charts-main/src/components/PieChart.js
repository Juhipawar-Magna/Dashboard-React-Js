import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactApexChart from 'react-apexcharts';

const PieChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/Items/');
        const data = response.data;

        
        const stateCounts = data.reduce((acc, item) => {
          const state = item.feature_state;
          if (acc[state]) {
            acc[state] += 1;
          } else {
            acc[state] = 1;
          }
          return acc;
        }, {});

        
        const chartData = Object.keys(stateCounts).map((state) => ({
          x: state,
          y: stateCounts[state],
        }));

        setChartData(chartData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const options = {
    title:{ 
      text:"Items PieChart"
    },
    chart: {
      type: 'pie',
    },
    labels: chartData.map((data) => data.x),
  };

  return (
    <div className="Work Status mb-3">
    <h3 className="mt-3">Welcome to Piechart </h3>
      <ReactApexChart
        options={options}
        series={chartData.map((data) => data.y)}
        type="pie"
        width={1349}
        height={550}
      />
    </div>
  );
};

export default PieChart;







// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import ReactApexChart from 'react-apexcharts';

// const PieChart = () => {
//   const [chartData, setChartData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:8000/api/Items/');
//         const data = response.data;

//         // Extract the required values from the API response and assign them to variables
//         const item_number = data.item_number;
//         const feature_name = data.feature_name;
//         const feature_state = data.feature_state;
//         const assigned_user = data.assigned_user;
//         const total_test_excuted = data.total_test_excuted;
//         const test_passed = data.test_passed;
//         const test_failed = data.test_failed;

//         // Use these variables in your chartData
//         const chartData = [
//           { x: 'Item Number', y: item_number },
//           { x: 'Feature Name', y: feature_name },
//           { x: 'Feature State', y: feature_state },
//           { x: 'Assigned User', y: assigned_user },
//           { x: 'Total Tests Executed', y: total_test_excuted },
//           { x: 'Tests Passed', y: test_passed },
//           { x: 'Tests Failed', y: test_failed },
//         ];

//         setChartData(chartData);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchData();
//   }, []);

//   const options = {
//     chart: {
//       type: 'pie',
//     },
//     labels: chartData.map((data) => data.x),
//   };

//   return (
//     <div>
//       <ReactApexChart
//         options={options}
//         series={chartData.map((data) => data.y)}
//         type="pie"
//         width={500}
//       />
//     </div>
//   );
// };

// export default PieChart;



// import React ,{ useState, useEffect} from "react";
// import  Chart  from "react-apexcharts";
// import API from "./API";
// function Piechart()
// {
//   const [itemId, setItemId] = useState("");
//   const [item_number, setItem_number] = useState("");
//   const [feature_name, setFeature_name] = useState("");
//   const [feature_state, setfeature_state] = useState("");
//   const [assigned_user, setAssigned_user] = useState("");
//   const [total_test_excuted, setTotal_test_executed] = useState("");
//   const [test_passed, setTest_passed] = useState("");
//   const [test_failed, setTest_failed] = useState("");
//    useEffect( ()=>{
  
//        const sitem_number=[];
//        const sfeature_name=[];
//        const sfeature_state=[];
//        const sassigned_user=[];
//        const stotal_test_excuted=[];
//        const stest_passed=[];
//        const stest_failed=[];

//        const getItemsdata= async()=>{
//        const reqData= await fetch("http://127.0.0.1:8000/api/Items/");
//        const resData= await reqData.json();
//       //  console.log("resData")

//        for(let i=0; i < resData.length; i++)
//        {
//         sitem_number.push(resData[i].item_number);
//         sfeature_name.push(resData[i].feature_name);
//         sfeature_state.push(resData[i].feature_state);
//         sassigned_user.push(resData[i].assigned_user);
//         stotal_test_excuted.push(resData[i].total_test_excuted);
//         stest_passed.push(resData[i].test_passed);
//         stest_failed.push(resData[i].test_failed);
        
//        }
//        setItem_number(sitem_number);
//        setFeature_name(sfeature_name);
//        setfeature_state( sfeature_state);
//        setAssigned_user(sassigned_user);
//        setTotal_test_executed(stotal_test_excuted);
//        setTest_passed(stest_passed);
//        setTest_failed(stest_failed);
//         console.log(item_number); 
//        }
//     getItemsdata();
//    },[]);
//    console.log(item_number)
//     return(
//     <React.Fragment>
//       <div className="Work Status mb-3">
//         <h3 className="mt-3">Welcome to Piechart</h3>
//         <Chart 
//                 type="pie"
//                 width={1349}
//                 height={550}
//                 series={[5,10,8,13,4,82,72]}
                                
//                 options={{
//                         title:{ text:"Items PieChart"
//                         }, 
//                        noData:{text:" Empty Data"},                        
//                       // colors:["#f90000","#f0f"],
//                       labels:["State 1", "State 2", "State 3", "State 4", "State 5", "State 6" , "State 7", "State 8", "State 9", "State 10"]                  
//                  }}>
//                   </Chart>
//                   </div>
//                   </React.Fragment>
//     );
// }
// export default Piechart;








// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Chart from 'react-apexcharts';

// const PieChart = () => {
//   const [chartData, setChartData] = useState({
//     options: {
//       labels: [],
//     },
//     series: [],
//   });

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://127.0.0.1:8000/api/Items/'); // Replace 'your-api-url' with your actual API endpoint
//       const data = response.data;

//       const labels = data.map((item) => item.label);
//       const series = data.map((item) => item.value);

//       setChartData({
//         options: {
//           labels: [ item_number, feature_name, feature_state, assigned_user, total_test_excuted, test_passed ,test_failed],
//         },
//         series: series,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
  
  

//   return (
//     <div>
//       <Chart
//         options={chartData.options}
//         series={chartData.series}
//         type="pie"
//         width="400"
//       />
//     </div>
//   );
// };

// export default PieChart;






// import React ,{ useState, useEffect} from "react";
// import  Chart  from "react-apexcharts";
// function Piechart()
//  {
//    const [featureName, setFeaturename]= useState([]);
//    const [stateLevels, setStatelevels]= useState([]);
//    useEffect( ()=>{
  
//        const sName=[];
//        const sLevel=[];
//        const getItemsdata= async()=>{
//        const reqData= await fetch("http://127.0.0.1:8000/api/Items/");
//        const resData= await reqData.json();       
//        for(let i=0; i < resData.length; i++)
//        {
//         sName.push(resData[i].featureName);
//         sLevel.push(parseInt(resData[i].stateLevel));
//        }
//        setFeaturename(sName);
//        setStatelevels(sLevel);
//         //console.log(resData); 
//        }
//     getItemsdata();
//    },[]);
//     return(<React.Fragment><div className="Work Status mb-3"><h3 className="mt-3">Welcome to Piechart </h3><Chart 
//                 type="pie"
//                 width={1349}
//                 height={550}
//                 series={[5,8,2,4,9,2,7,6,2,4] }                
//                 options={{
//                         title:{ text:"Items PieChart"
//                         }, 
//                        noData:{text:" Empty Data"},                        
//                       // colors:["#f90000","#f0f"],
//                       labels:["State 1", "State 2", "State 3", "State 4", "State 5", "State 6" , "State 7", "State 8", "State 9", "State 10"]                  
//                  }}></Chart></div></React.Fragment>
//     );
//  }
// export default Piechart;

/*import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart, registerables,ArcElement } from "chart.js";
Chart.register(...registerables);
Chart.register(ArcElement);

const MonochromePieChart = () => {
  const [data, setData] = useState({
    labels: ["State 1", "State 2", "State 3", "State 4", "State 5", "State 6" , "State 7", "State 8", "State 9", "State 10"],
    datasets: [
      {
        data: [5, 8, 4, 4, 8, 11, 2, 7, 5, 6],
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(54, 162, 235)",
          "rgba(255, 206, 86)",
          "rgba(75, 192, 192)",
          "rgba(153, 102, 255)",
          "rgba(60, 179, 113)",
          "rgba(210, 210, 210)",
          "rgba(106, 90, 205)",
          "rgba(255, 99, 71)",
          "rgba(255, 165, 0)",

        ],
        hoverBackgroundColor: [
          "rgb(255,255,255)",
          "rgb(255,255,255)",
          "rgb(255,255,255)",
          "rgb(255,255,255)",
          "rgb(255,255,255)",
          "rgb(255,255,255)",
          "rgb(255,255,255)",
          "rgb(255,255,255)",
          "rgb(255,255,255)",
          "rgb(255,255,255)",
        ],
        borderwidth: 1
      },
    ],
  });

  return (
    <div className="PieChart" style={{ height: '40%' , width:'30%'}}>
      <Pie data={data} options={{ maintainAspectRatio: true }} />
    </div>
  );
};





/*import { useEffect, useState } from 'react';
import { Pie } from "react-chartjs-2";
import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJs.register(
  Tooltip, Title, ArcElement, Legend
);
const data = {
    datasets: [{
        data: [10, 20, 30],
        backgroundColor:[
          'red',
          'blue',
          'yellow'
        ]
    },
  ],
  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
    "State 1", 
    "State 2", 
    "State 3",
    "State 4", 
    "State 5",
    "State 6",
    "State 7",
    "State 8", 
    "State 9",
    "State 10"
  ], 
};
function App() {
  const [data, setData] = useState({
    datasets: [{
        data: [10, 20, 30],
        backgroundColor:[
          'red',
          'blue',
          'yellow'
        ]
    },
  ],
  labels: [
      'Red',
      'Yellow',
      'Blue'
  ], 
});
  useEffect(()=> {
    const fetchData = () =>  {
      fetch('https://jsonplaceholder.typicode.com/users').then((data) => {
        const res = data.json();
        return res
      }).then((res) => {
        console.log("resss", res)
        const label = [];
        const data = [];
        for(var i of res) {
            label.push(i.name);
            data.push(i.id)
        }
        setData(
          {
            datasets: [{
                data:data,
                backgroundColor:[
                  'red',
                  'blue',
                  'yellow'
                ]
            },
          ],
          labels:label, 
        }
        )
      }).catch(e => {
        console.log("error", e)
      }) 
    }
  fetchData();
  }, [])
  return (<div className="Pie" style={{width:'30%', height:'30%'}}><PieChart data={data}/></div>
  );
}
export default MonochromePieChart;*/

