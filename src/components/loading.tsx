export function Spinner() {
  return (
    <div className="flex justify-center items-center h-32">
      <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-primary-green border-opacity-50"></div>
    </div>
  );
}
export function ChartSkeleton() {
  return (
    <div className="bg-white p-4 rounded shadow animate-pulse space-y-4">
      <div className="h-6 bg-gray-300 rounded w-1/3"></div>
      <div className="h-48 bg-gray-200 rounded"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
    </div>
  );
}
