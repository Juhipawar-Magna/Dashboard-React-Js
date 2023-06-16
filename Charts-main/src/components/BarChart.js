import React from "react";
/*import { Bar } from "react-chartjs-2";*/
/*import { Chart as ChartJS } from "chart.js/auto";*/
import Chart from 'react-apexcharts';

function BarChart({ chartData }) {4
  
  return <Bar data={chartData} />;
}

export default Chart;