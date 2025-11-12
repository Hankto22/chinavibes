import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../components/navBar';
import Footer from '../components/footer';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Mock registration success
      alert('Registration successful! Please login.');
      navigate('/login');
    } catch {
      console.error('Registration failed');
      alert('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <NavBar />
      <div style={{
        minHeight: '80vh',
        background: '#f8f9fa',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem 1rem'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '2.5rem',
          backgroundColor: 'white',
          borderRadius: '24px',
          overflow: 'hidden',
          width: '100%',
          maxWidth: '1200px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}>
          {/* Form Section */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem'
            }}>
            <div
              style={{
                width: '100%',
                maxWidth: '400px',
                backgroundColor: 'white',
                borderRadius: '16px',
                padding: '2rem'
              }}>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <h2 style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: '#2d5a4a',
                  marginBottom: '0.2rem',
                  margin: 0
                }}>
                  Join China Vibes Shipping
                </h2>
                <p style={{
                  color: '#6b7280',
                  fontSize: '1rem',
                  margin: 0
                }}>
                  Create your account
                </p>
              </div>

              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }} onSubmit={handleSubmit}>
                {/* First Row - First Name & Last Name */}
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ flex: 1 }}>
                    <label style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: '#374151',
                      marginBottom: '0.375rem'
                    }} htmlFor="name">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        fontSize: '0.875rem',
                        backgroundColor: 'transparent',
                        transition: 'all 0.3s ease',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#374151',
                    marginBottom: '0.375rem'
                  }} htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '8px',
                      fontSize: '0.875rem',
                      backgroundColor: 'transparent',
                      transition: 'all 0.3s ease',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                {/* Phone Number Field */}
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#374151',
                    marginBottom: '0.375rem'
                  }} htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '8px',
                      fontSize: '0.875rem',
                      backgroundColor: 'transparent',
                      transition: 'all 0.3s ease',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                {/* Password Field */}
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#374151',
                    marginBottom: '0.375rem'
                  }} htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '8px',
                      fontSize: '0.875rem',
                      backgroundColor: 'transparent',
                      transition: 'all 0.3s ease',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                {/* Confirm Password Field */}
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#374151',
                    marginBottom: '0.375rem'
                  }} htmlFor="confirmPassword">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '8px',
                      fontSize: '0.875rem',
                      backgroundColor: 'transparent',
                      transition: 'all 0.3s ease',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  style={{
                    backgroundColor: '#2d5a4a',
                    color: 'white',
                    padding: '1rem',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: isLoading ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                    marginTop: '0.5rem',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    width: '100%',
                    opacity: isLoading ? 0.5 : 1
                  }}
                >
                  {isLoading ? 'Creating account...' : 'Create Account'}
                </button>

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  textAlign: 'center',
                  marginTop: '1rem'
                }}>
                  <Link to="/" style={{
                    color: '#2d5a4a',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.25rem',
                    fontSize: '0.875rem'
                  }}>
                    <span role="img" aria-label="home">🏡</span> Go to HomePage
                  </Link>
                  <Link to="/login" style={{
                    color: '#d97706',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.25rem',
                    fontSize: '0.875rem'
                  }}>
                    Already have an account? Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
          {/* Image Section */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #dbeafe 0%, #fce7f3 50%, #ffffff 100%)',
            padding: '2rem'
          }}>
            <div style={{
              width: '100%',
              maxWidth: '400px',
              height: '300px',
              backgroundColor: '#e2e8f0',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#64748b',
              fontSize: '1.5rem'
            }}>
              Register Illustration
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;