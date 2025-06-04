"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface PricePoint {
  time: string;
  price: number;
}

export default function BitcoinChart() {
  const [prices, setPrices] = useState<PricePoint[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart",
          {
            params: {
              vs_currency: "usd",
              days: 1,
              // Removed interval param here to avoid 401 error
            },
          }
        );
        console.log("API data:", res.data);
        const priceData = res.data.prices.map((item: [number, number]) => ({
          time: new Date(item[0]).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          price: item[1],
        }));
        setPrices(priceData);
      } catch (error) {
        console.error("Error fetching Bitcoin data:", error);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 5 * 60 * 1000); // refresh every 5 minutes
    return () => clearInterval(interval);
  }, []);

  if (prices.length === 0) return <div>Loading Bitcoin data...</div>;

  const data = {
    labels: prices.map((p) => p.time),
    datasets: [
      {
        label: "BTC Price (USD)",
        data: prices.map((p) => p.price),
        fill: true,
        borderColor: "#ff6f00",
        backgroundColor: "rgba(255, 111, 0, 0.3)",
        tension: 0.3,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    animation: { duration: 1000 },
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          color: "white",
        },
      },
      x: {
        ticks: {
          color: "white",
        },
      },
    },
    plugins: {
      legend: { labels: { color: "white" } },
    },
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-4xl mx-auto my-12">
      <h3 className="text-orange-500 text-xl mb-4 font-semibold">Live Bitcoin Prices (Last 24 Hours)</h3>
      <Line data={data} options={options} height={300} />
    </div>
  );
}
