import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const ordersData = [34, 45, 50, 42, 60, 75, 65];
  const usersData = [10, 14, 13, 12, 16, 20, 18];

  const data = {
    labels,
    datasets: [
      {
        label: "Orders",
        data: ordersData,
        backgroundColor: "rgba(54, 162, 235, 0.7)",
      },
      {
        label: "New Users",
        data: usersData,
        backgroundColor: "rgba(255, 159, 64, 0.7)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Weekly Platform Activity",
      },
      tooltip: {
        callbacks: {
          label: (ctx) => `${ctx.dataset.label}: ${ctx.parsed.y}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10,
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
