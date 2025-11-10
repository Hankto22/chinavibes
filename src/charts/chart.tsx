import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

interface ChartProps {
  stats: {
    monthlyShipments: { labels: string[]; data: number[] };
    deliverySuccess: { labels: string[]; data: number[] };
    regionalDistribution: { labels: string[]; data: number[] };
  };
}

const Charts: React.FC<ChartProps> = ({ stats }) => {
  const { monthlyShipments, deliverySuccess, regionalDistribution } = stats;

  const shipmentChart = {
    labels: monthlyShipments.labels,
    datasets: [{
      label: 'Shipments',
      data: monthlyShipments.data,
      borderColor: '#DC2626',
      backgroundColor: 'rgba(220, 38, 38, 0.1)',
      tension: 0.4,
    }]
  };

  const successChart = {
    labels: deliverySuccess.labels,
    datasets: [{
      label: 'Success Rate',
      data: deliverySuccess.data,
      backgroundColor: '#2563EB',
      borderColor: '#1D4ED8',
      borderWidth: 1,
    }]
  };

  const regionalChart = {
    labels: regionalDistribution.labels,
    datasets: [{
      label: 'Regions',
      data: regionalDistribution.data,
      backgroundColor: [
        '#DC2626',
        '#2563EB',
        '#16A34A',
        '#CA8A04',
        '#9333EA',
      ],
    }]
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">Monthly Shipments</h3>
        <Line data={shipmentChart} />
      </div>
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">Delivery Success Rate</h3>
        <Bar data={successChart} />
      </div>
      <div className="card lg:col-span-2">
        <h3 className="text-lg font-semibold mb-4">Regional Distribution</h3>
        <Pie data={regionalChart} />
      </div>
    </div>
  );
};

export default Charts;
