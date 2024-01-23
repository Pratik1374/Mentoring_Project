import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const RatingGraph = ({ ratings }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const createGraph = () => {
      if (chartRef.current) {
        const ctx = chartRef.current.getContext("2d");

        // Check if the chart instance already exists, destroy it to create a new one
        if (window.myLineChart) {
          window.myLineChart.destroy();
        }

        window.myLineChart = new Chart(ctx, {
          type: "line",
          data: {
            labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
            datasets: [
              {
                label: "Rating",
                data: ratings,
                borderColor: "blue",
                borderWidth: 2,
                fill: false,
              },
            ],
          },
          options: {
            scales: {
              x: {
                type: "category",
                title: {
                  display: true,
                  text: "Weeks",
                },
              },
              y: {
                title: {
                  display: true,
                  text: "Rating",
                },
                min: 1,
                max: 5,
              },
            },
          },
        });
      }
    };

    createGraph();
  }, [ratings]);

  return <canvas ref={chartRef}></canvas>;
};

export default RatingGraph;
