import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Sourcing from './pages/sourcing';
import Trips from './pages/trips';
import Fees from './pages/fees';
import Contact from './pages/contact';
import TrackShipment from './pages/trackShipment';
import Login from './pages/login';
import Register from './pages/register';
import CustomerPanel from './components/customerPanel';
import AdminPanel from './components/adminPanel';
import { Navigate } from 'react-router-dom';
import { useAuth } from './context/authContext';
import { Toaster } from 'react-hot-toast';

function ProtectedRoute({ children, allowedRoles }: { children: React.ReactNode; allowedRoles: string[] }) {
  const { role } = useAuth();
  if (!role) return <Navigate to="/login" />;
  if (!allowedRoles.includes(role)) return <div className="min-h-screen flex items-center justify-center"><p>Access Denied</p></div>;
  return <>{children}</>;
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/sourcing" element={<Sourcing />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/fees" element={<Fees />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/track" element={<TrackShipment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard/customer"
          element={
            <ProtectedRoute allowedRoles={['customer']}>
              <CustomerPanel />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/admin"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminPanel />
            </ProtectedRoute>
          }
        />

        {/* Redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Toaster position="top-right" />
    </Router>
  );
}
