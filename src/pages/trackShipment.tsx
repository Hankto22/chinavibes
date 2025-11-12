import React, { useState } from 'react';
import NavBar from '../components/navBar';
import Footer from '../components/footer';
import toast from 'react-hot-toast';

interface Shipment {
  id: string;
  status: string;
  origin: string;
  destination: string;
  eta: string;
  trackingId: string;
  currentLocation?: string;
  lastUpdate?: string;
}

export default function TrackShipment() {
  const [trackingId, setTrackingId] = useState('');
  const [shipment, setShipment] = useState<Shipment | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleTrack = async () => {
    if (!trackingId.trim()) {
      toast.error('Please enter a tracking ID');
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Mock shipment data
      const mockShipment: Shipment = {
        id: trackingId,
        status: 'In Transit',
        origin: 'China - Guangzhou',
        destination: 'Kenya - Nairobi',
        eta: '2025-11-15',
        trackingId: trackingId,
        currentLocation: 'Dubai, UAE',
        lastUpdate: new Date().toLocaleString()
      };

      setShipment(mockShipment);
      toast.success('Shipment found!');
    } catch {
      toast.error('Shipment not found. Please check your tracking ID.');
      setShipment(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleTrack();
    }
  };

  return (
    <div className="page-container">
      <NavBar />
      <main className="main-content">
        {/* Hero Section */}
        <div style={{
          background: 'linear-gradient(135deg, #2d5a4a 0%, #1e3a32 100%)',
          color: 'white',
          padding: '4rem 2rem',
          textAlign: 'center'
        }}>
          <h1 style={{
            fontSize: '3.5rem',
            margin: '0 0 1rem 0',
            fontWeight: 'bold'
          }}>
            Track Your Shipment
          </h1>
          <p style={{
            fontSize: '1.3rem',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6',
            opacity: '0.9'
          }}>
            Enter your tracking ID below to get real-time updates on your shipment status
          </p>
        </div>

        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '4rem 2rem'
        }}>

        {/* Tracking Form */}
        <div style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '16px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          marginBottom: '2rem'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <input
              type="text"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter Tracking ID (e.g., RCT001234)"
              style={{
                flex: 1,
                padding: '1rem',
                border: '1px solid #ccc',
                borderRadius: '8px',
                fontSize: '1.1rem',
                outline: 'none'
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#2d5a4a'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#ccc'}
            />
            <button
              onClick={handleTrack}
              disabled={isLoading}
              style={{
                backgroundColor: isLoading ? '#ccc' : '#2d5a4a',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '25px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                if (!isLoading) {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(45, 90, 74, 0.3)'
                }
              }}
              onMouseLeave={(e) => {
                if (!isLoading) {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }
              }}
            >
              {isLoading ? 'Searching...' : 'Track Shipment'}
            </button>
          </div>

          <div style={{
            marginTop: '1rem',
            fontSize: '0.9rem',
            color: '#666'
          }}>
            <p>💡 <strong>Demo Tracking IDs:</strong> RCT001234, RCT005678, RCT009012</p>
          </div>
        </div>

        {/* Shipment Details */}
        {shipment && (
          <div className="space-y-6">
            {/* Status Overview */}
            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '16px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              marginBottom: '2rem'
            }}>
              <h2 style={{
                fontSize: '2.5rem',
                color: '#2d5a4a',
                marginBottom: '2rem',
                fontWeight: 'bold',
                textAlign: 'center'
              }}>Shipment Status</h2>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '2rem'
              }}>
                <div style={{
                  textAlign: 'center',
                  backgroundColor: 'white',
                  padding: '2rem',
                  borderRadius: '16px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: 'rgba(76, 175, 80, 0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    fontSize: '3rem'
                  }}>📦</div>
                  <h3 style={{
                    fontSize: '1.4rem',
                    color: '#2d5a4a',
                    marginBottom: '1rem',
                    fontWeight: 'bold'
                  }}>Tracking ID</h3>
                  <p style={{
                    fontSize: '1.1rem',
                    color: '#81C784',
                    fontFamily: 'monospace'
                  }}>{shipment.trackingId}</p>
                </div>

                <div style={{
                  textAlign: 'center',
                  backgroundColor: 'white',
                  padding: '2rem',
                  borderRadius: '16px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: 'rgba(244, 67, 54, 0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    fontSize: '3rem'
                  }}>🚚</div>
                  <h3 style={{
                    fontSize: '1.4rem',
                    color: '#2d5a4a',
                    marginBottom: '1rem',
                    fontWeight: 'bold'
                  }}>Status</h3>
                  <p style={{
                    fontSize: '1.1rem',
                    color: '#f44336',
                    fontWeight: 'bold'
                  }}>{shipment.status}</p>
                </div>

                <div style={{
                  textAlign: 'center',
                  backgroundColor: 'white',
                  padding: '2rem',
                  borderRadius: '16px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: 'rgba(76, 175, 80, 0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    fontSize: '3rem'
                  }}>📍</div>
                  <h3 style={{
                    fontSize: '1.4rem',
                    color: '#2d5a4a',
                    marginBottom: '1rem',
                    fontWeight: 'bold'
                  }}>Current Location</h3>
                  <p style={{
                    fontSize: '1.1rem',
                    color: '#555'
                  }}>{shipment.currentLocation}</p>
                </div>

                <div style={{
                  textAlign: 'center',
                  backgroundColor: 'white',
                  padding: '2rem',
                  borderRadius: '16px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: 'rgba(244, 67, 54, 0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    fontSize: '3rem'
                  }}>📅</div>
                  <h3 style={{
                    fontSize: '1.4rem',
                    color: '#2d5a4a',
                    marginBottom: '1rem',
                    fontWeight: 'bold'
                  }}>ETA</h3>
                  <p style={{
                    fontSize: '1.1rem',
                    color: '#81C784',
                    fontWeight: 'bold'
                  }}>{shipment.eta}</p>
                </div>
              </div>
            </div>

            {/* Detailed Information */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '2rem',
              marginBottom: '2rem'
            }}>
              <div style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '16px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  color: '#2d5a4a',
                  marginBottom: '1.5rem',
                  fontWeight: 'bold'
                }}>Route Information</h3>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span style={{color: '#666'}}>Origin:</span>
                    <span style={{fontWeight: 'bold'}}>{shipment.origin}</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span style={{color: '#666'}}>Destination:</span>
                    <span style={{fontWeight: 'bold'}}>{shipment.destination}</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span style={{color: '#666'}}>Current Location:</span>
                    <span style={{fontWeight: 'bold', color: '#81C784'}}>{shipment.currentLocation}</span>
                  </div>
                </div>
              </div>

              <div style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '16px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  color: '#2d5a4a',
                  marginBottom: '1.5rem',
                  fontWeight: 'bold'
                }}>Last Update</h3>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span style={{color: '#666'}}>Last Updated:</span>
                    <span style={{fontWeight: 'bold'}}>{shipment.lastUpdate}</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span style={{color: '#666'}}>Next Update:</span>
                    <span style={{fontWeight: 'bold'}}>Within 24 hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Visualization */}
            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '16px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              marginBottom: '2rem'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                color: '#2d5a4a',
                marginBottom: '1.5rem',
                fontWeight: 'bold'
              }}>Shipment Progress</h3>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    backgroundColor: '#4CAF50',
                    borderRadius: '50%',
                    marginRight: '1rem'
                  }}></div>
                  <span style={{color: '#555'}}>Order Placed - Completed</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    backgroundColor: '#4CAF50',
                    borderRadius: '50%',
                    marginRight: '1rem'
                  }}></div>
                  <span style={{color: '#555'}}>Processing - Completed</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    backgroundColor: '#81C784',
                    borderRadius: '50%',
                    marginRight: '1rem',
                    animation: 'pulse 2s infinite'
                  }}></div>
                  <span style={{color: '#81C784', fontWeight: 'bold'}}>In Transit - Current</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    backgroundColor: '#ccc',
                    borderRadius: '50%',
                    marginRight: '1rem'
                  }}></div>
                  <span style={{color: '#999'}}>Delivered - Pending</span>
                </div>
              </div>
            </div>

            {/* Support Information */}
            <div style={{
              backgroundColor: '#e3f2fd',
              border: '1px solid #bbdefb',
              borderRadius: '8px',
              padding: '2rem'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                color: '#1976d2',
                marginBottom: '0.5rem',
                fontWeight: 'bold'
              }}>Need Help?</h3>
              <p style={{
                color: '#1976d2',
                marginBottom: '1.5rem'
              }}>
                If you have any questions about your shipment, our support team is here to help.
              </p>
              <div style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap'
              }}>
                <button style={{
                  backgroundColor: 'transparent',
                  color: '#2d5a4a',
                  border: '2px solid #2d5a4a',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '25px',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                  display: 'inline-block',
                  textAlign: 'center'
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#2d5a4a'
                    e.currentTarget.style.color = 'white'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = '#2d5a4a'
                  }}
                  onClick={() => window.location.href = 'mailto:support@chinavibes.com'}
                >
                  📧 Email Support
                </button>
                <button style={{
                  backgroundColor: '#2d5a4a',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '25px',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                  display: 'inline-block',
                  textAlign: 'center'
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 8px 16px rgba(45, 90, 74, 0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                  onClick={() => window.location.href = 'tel:+254-xxx-xxx-xxx'}
                >
                  📞 Call Support
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Help Section */}
        {!shipment && (
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '16px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              color: '#2d5a4a',
              marginBottom: '2rem',
              fontWeight: 'bold'
            }}>How to Track Your Shipment</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              textAlign: 'left'
            }}>
              <div>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: 'rgba(76, 175, 80, 0.1)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  fontSize: '2rem'
                }}>1️⃣</div>
                <h4 style={{
                  fontSize: '1.2rem',
                  color: '#2d5a4a',
                  marginBottom: '0.5rem',
                  fontWeight: 'bold'
                }}>Get Tracking ID</h4>
                <p style={{
                  fontSize: '0.9rem',
                  color: '#666'
                }}>Your tracking ID was provided in your shipment confirmation email.</p>
              </div>
              <div>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: 'rgba(244, 67, 54, 0.1)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  fontSize: '2rem'
                }}>2️⃣</div>
                <h4 style={{
                  fontSize: '1.2rem',
                  color: '#2d5a4a',
                  marginBottom: '0.5rem',
                  fontWeight: 'bold'
                }}>Enter ID</h4>
                <p style={{
                  fontSize: '0.9rem',
                  color: '#666'
                }}>Enter your tracking ID in the field above and click Track.</p>
              </div>
              <div>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: 'rgba(76, 175, 80, 0.1)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  fontSize: '2rem'
                }}>3️⃣</div>
                <h4 style={{
                  fontSize: '1.2rem',
                  color: '#2d5a4a',
                  marginBottom: '0.5rem',
                  fontWeight: 'bold'
                }}>View Status</h4>
                <p style={{
                  fontSize: '0.9rem',
                  color: '#666'
                }}>Get real-time updates on your shipment location and ETA.</p>
              </div>
            </div>
          </div>
        )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
