const chartData = {
  labels: stats.labels,
  datasets: [
    {
      label: 'Monthly Shipments',
      data: stats.shipments,
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59,130,246,0.2)',
    },
  ],
};
