import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactApexChart from 'react-apexcharts';

const StackedBarChart = () => {
  const [chartData, setChartData] = useState([]);
  const [stateLevels, setStateLevels] = useState([]);
  const [users, setUsers] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/Items/');
        const data = response.data;

       
        const levels = [...new Set(data.map((item) => item.feature_state))];
        const users = [...new Set(data.map((item) => item.assigned_user))];

        
        const chartData = levels.map((state) => ({
          name: state,
          data: users.map((user) => 0),
        }));

       
        data.forEach((item) => {
          const stateIndex = levels.indexOf(item.feature_state);
          const userIndex = users.indexOf(item.assigned_user);
          chartData[stateIndex].data[userIndex] += 1;
        });

        setStateLevels(levels);
        setChartData(chartData);
        setUsers(users); 
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const options = {
    title:{
      text:"Users BarChart"
    },
    chart: {
      type: 'bar',
      stacked: true,
    },
    xaxis:{
      title:{
          text:"state level"
      },
      categories: users, 
    },
    yaxis:{
      title:{
          text:"Users"
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    stroke: {
      width: 5,
    },
    legend: {
      position: 'right',
    },
    dataLabels:{
      enabled:true,
    },
    grid: {
      show:true,
      xaxis:{
          lines:{
              show:false
          }
      },
      yaxis:{
          lines:{
              show:false
          }
      }
    }
  };

  return (
    <div className="Work Status">
      <h2>Welcome to Stacked Bar Chart</h2>
      <ReactApexChart
        options={options}
        series={chartData}
        type="bar"
        height={560}
        width={1349}
      />
    </div>
  );
};

export default StackedBarChart;





// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import ReactApexChart from 'react-apexcharts';

// const StackedBarChart = () => {
//   const [chartData, setChartData] = useState([]);
//   const [stateLevels, setStateLevels] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:8000/api/Items/');
//         const data = response.data;

//         // Extract the state levels and assigned users from the API response
//         const levels = [...new Set(data.map((item) => item.feature_state))];
//         const users = [...new Set(data.map((item) => item.assigned_user))];

//         // Initialize the chart data array
//         const chartData = levels.map((state) => ({
//           name: state,
//           data: users.map((user) => 0),
//         }));

//         // Update the chart data with the state level counts
//         data.forEach((item) => {
//           const stateIndex = levels.indexOf(item.feature_state);
//           const userIndex = users.indexOf(item.assigned_user);
//           chartData[stateIndex].data[userIndex] += 1;
//         });

//         setStateLevels(levels);
//         setChartData(chartData);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchData();
//   }, []);

//   const options = {
//     title:{
//       text:"Users BarChart"
//     },
//     chart: {
//       type: 'bar',
//       stacked: true,
//     },
//     xaxis:{
//       title:{
//           text:"state level"
//       },
//       categories:["User 1", "User 2", "User 3", "User 4","User 5","User 6","User 7","User 8","User 9","User 10"]
//     },
//     yaxis:{
//       title:{
//           text:"Users"
//       },
//     },
//     plotOptions: {
//       bar: {
//         horizontal: true,
//       },
//     },
//     stroke: {
//       width: 5,
//   },
//     legend: {
//       position: 'right',
//     },
//     dataLabels:{
//       enabled:true,
//     },
//     // fill: {
//     //   opacity: 1,
//     // },
//     grid: {
//       show:true,
//       xaxis:{
//           lines:{
//               show:false
//           }
//       },
//       yaxis:{
//           lines:{
//               show:false
//           }
//       }
//     }
//   };

//   return (
//      <div className="Work Status">
//       <h2>Welcome to Stackedbarchart</h2>
//       <ReactApexChart
//         options={options}
//         series={chartData}
//         type="bar"
//         height={560}
//         width={1349}
//       />
//     </div>
//   );
// };

// export default StackedBarChart;









// import React from "react";
// import Chart from 'react-apexcharts';
// function Stackedbarchart()
// {
//     return(<React.Fragment><div className="work status"><h2>Welcome to Stackedbarchart</h2><Chart
//                 type="bar"
//                 width={1349}
//                 height={560}
//                 series={[
//                   {
//                     name:"state 1",
//                     data:[4, 5, 4, 3, 2, 7, 5, 2],
//                     //color: '#f90000'
//                 },
//                 {
//                     name:"state 2",
//                     data:[2, 3, 2, 5, 6, 5, 1, 6],
//                    // color: '#000000'
//                 },
//                 {
//                     name:"state 3",
//                     data:[3, 2, 3, 7, 2, 4, 5, 4],
//                    // color: '#000000'
//                 },
//                 {
//                     name:"state 4",
//                     data:[6, 2, 5, 8, 1, 4, 5, 7],
//                    // color: '#000000'
//                 },
//                 {
//                     name:"state 5",
//                     data:[3, 6, 3, 2, 4, 2, 5, 2],
//                    // color: '#000000'
//                 },
//                 {
//                     name:"state 6",
//                     data:[6, 2, 5, 8, 1, 1, 6, 6],
//                    // color: '#000000'
//                 },
//                 {
//                     name:"state 7",
//                     data:[2, 6, 7, 2, 1, 6, 2, 5],
//                    // color: '#000000'
//                 },
//                 {
//                     name:"state 8",
//                     data:[4, 5, 7, 4, 5, 6, 2, 5],
//                    // color: '#000000'
//                 },
//                 {
//                     name:"state 9",
//                     data:[1, 6, 6, 2, 4, 3, 2, 3],
//                    // color: '#000000'
//                 },
//                 {
//                     name:"state 10",
//                     data:[2, 5, 2, 3, 1, 3, 6, 3],
//                    // color: '#000000'
//                 }
//                 ]}
//                 options={{
                    // title:{
                    //     text:"Employee BarChart"
                    // },
//                     chart:{
//                         stacked:true,
//                     },
//                     plotOptions:{
//                         bar:{
//                             horizontal:true,
//                             columnWidth:'100%'
//                           }
//                     },
                    // stroke: {
                    //     width: 5,
                    // },
                    // xaxis:{
                    //     title:{
                    //         text:"state level"
                    //     },
                    //     categories:["User 1", "User 2", "User 3", "User 4","User 5","User 6","User 7","User 8"]
                    // },
                    // yaxis:{
                    //     title:{
                    //         text:"Users"
                    //     },
                    // },
//                     legend:{
//                         position: 'right'
//                     },
                    // dataLabels:{
                    //     enabled:true,
                    // },
                    // grid: {
                    //     show:true,
                    //     xaxis:{
                    //         lines:{
                    //             show:false
                    //         }
                    //     },
                    //     yaxis:{
                    //         lines:{
                    //             show:false
                    //         }
                    //     }
//                     }
//                 }}
//                 /></div></React.Fragment>
//     );
// }



/*import React, { useState } from "react";
import {
  chart as ChartJS,
  categoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from "react-chartjs-2";

const StackedBarchart = () => {
  const [data, setData] = useState({
    labels: ["User 1", "User 2", "User 3", "User 4","User 5","User 6","User 7","User 8"],
    datasets: [ 
      
      {
        label: "State 1", 
        backgroundColor: "#FF6384",
        data: [4, 5, 4, 3, 2],
      },
      {
        label: "State 2",
        backgroundColor: "#36A2EB",
        data: [2, 3, 2, 5, 6, 7, 5],
      },
      {
        label: "State 3",
        backgroundColor: "#f3ba2f",
        data: [3, 2, 3, 7, 2, 5, 1, 4, 3, 4],
      },
      {
        label: "State 4",
        backgroundColor: "#2a71d0",
        data: [1],
      },
      {
        label: "State 5",
        backgroundColor: "#ee82ee",
        data: [1],
      },
      {
        label: "State 6",
        backgroundColor: "#3cb371",
        data: [1, 4, 5, 7, 1, 4, 5, 7, 3, 9],
      },
      {
        label: "State 7",
        backgroundColor: "#6a5acd",
        data: [7, 2, 7, 2, 1, 5, 4, 8, 3, 6],
      },
      {
        label: "State 8",
        backgroundColor: "#ffa500",
        data: [3, 6, 4, 1, 1, 6, 4, 2, 8, 3],
      },
      {
        label: "State 9",
        backgroundColor: "#616161",
        data: [1, 7, 5, 4, 1, 5, 7, 2, 4, 6],
      },
      {        
        label: "State 10",
        backgroundColor: "#b4b4b4",
        data: [ 6, 8, 4, 2, 9, 7, 3, 4, 1, 7],

      },      
    ],
  });

  const options = {
    scales: {
      xAxes: [
        {
          stacked: true,
        },
      ],
      yAxes: [
        {
          ticks: {beginATZero: true },
          stacked: true,
        },
      ],
    },
  };

  return (
    <div>
      <Bar data={data}  height={0} options={options} />
    </div>
  );
};*/

// export default Stackedbarchart;
