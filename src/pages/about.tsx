import React from 'react';
import NavBar from '../components/navBar';
import Footer from '../components/footer';

const About: React.FC = () => {
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
            About <span style={{color: '#81C784'}}>Red Crane Trading</span>
          </h1>
          <p style={{
            fontSize: '1.3rem',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6',
            opacity: '0.9'
          }}>
            Your trusted partner for China-based shipping and trading services,
            inspired by the elegant Chinese crane — a symbol of long life and reliability.
          </p>
        </div>

        {/* Mission & Vision */}
        <div style={{
          padding: '4rem 2rem',
          backgroundColor: '#fff'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}>
            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '16px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <h2 style={{
                fontSize: '2.5rem',
                color: '#2d5a4a',
                marginBottom: '1.5rem',
                fontWeight: 'bold'
              }}>🎯 Our Mission</h2>
              <p style={{
                fontSize: '1.1rem',
                color: '#555',
                lineHeight: '1.8'
              }}>
                To bridge the gap between African businesses and Chinese manufacturers,
                providing seamless sourcing, quality control, and shipping solutions that
                empower entrepreneurs across Kenya, Ghana, Nigeria, and beyond.
              </p>
            </div>

            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '16px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <h2 style={{
                fontSize: '2.5rem',
                color: '#2d5a4a',
                marginBottom: '1.5rem',
                fontWeight: 'bold'
              }}>🔭 Our Vision</h2>
              <p style={{
                fontSize: '1.1rem',
                color: '#555',
                lineHeight: '1.8'
              }}>
                To become the leading Africa-China trade facilitator, known for reliability,
                transparency, and exceptional service that drives business growth and
                strengthens international partnerships.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div style={{
          padding: '4rem 2rem',
          backgroundColor: '#f8f9fa'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              color: '#2d5a4a',
              marginBottom: '1rem',
              fontWeight: 'bold'
            }}>
              ✨ Why Choose Red Crane Trading?
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto 3rem',
              lineHeight: '1.6'
            }}>
              What drives us every day to create exceptional trading experiences
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem'
            }}>
              {[
                {
                  icon: '🏆',
                  title: 'Expertise',
                  description: 'Over a decade of experience in China-Africa trade with deep market knowledge.'
                },
                {
                  icon: '🤝',
                  title: 'Reliability',
                  description: 'Consistent delivery, transparent processes, and strong supplier relationships.'
                },
                {
                  icon: '🌍',
                  title: 'Local Presence',
                  description: 'Strong presence in Kenya with expanding operations across East Africa.'
                },
                {
                  icon: '💰',
                  title: 'Cost Effective',
                  description: 'Competitive pricing and bulk discounts to maximize your profit margins.'
                },
                {
                  icon: '🛡️',
                  title: 'Quality Assurance',
                  description: 'Rigorous quality control and inspection processes for every shipment.'
                },
                {
                  icon: '📞',
                  title: '24/7 Support',
                  description: 'Round-the-clock customer support and real-time shipment tracking.'
                }
              ].map((value, index) => (
                <div key={index} style={{
                  backgroundColor: 'white',
                  padding: '2rem',
                  borderRadius: '16px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer'
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}>
                  <div style={{
                    fontSize: '3rem',
                    marginBottom: '1rem'
                  }}>
                    {value.icon}
                  </div>
                  <h3 style={{
                    fontSize: '1.4rem',
                    color: '#2d5a4a',
                    marginBottom: '1rem',
                    fontWeight: 'bold'
                  }}>
                    {value.title}
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    color: '#666',
                    lineHeight: '1.6'
                  }}>
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div style={{
          padding: '4rem 2rem',
          backgroundColor: '#fff'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{
                fontSize: '2.5rem',
                color: '#2d5a4a',
                marginBottom: '1.5rem',
                fontWeight: 'bold'
              }}>
                📖 Our Story
              </h2>
              <p style={{
                fontSize: '1.1rem',
                color: '#555',
                lineHeight: '1.8',
                marginBottom: '1.5rem'
              }}>
                Founded with a vision to simplify China-Africa trade, Red Crane Trading began as a small
                sourcing agency in Nairobi, Kenya. What started as helping local entrepreneurs find reliable
                suppliers has grown into a comprehensive trade and logistics company serving businesses
                across East and West Africa.
              </p>
              <p style={{
                fontSize: '1.1rem',
                color: '#555',
                lineHeight: '1.8',
                marginBottom: '1.5rem'
              }}>
                Our name, inspired by the Chinese crane, reflects our commitment to longevity, reliability,
                and graceful navigation through complex international trade waters. Just as the crane
                symbolizes prosperity and good fortune in Chinese culture, we strive to bring prosperity
                to our clients' businesses.
              </p>
              <p style={{
                fontSize: '1.1rem',
                color: '#555',
                lineHeight: '1.8'
              }}>
                Today, we handle everything from product sourcing and supplier verification to customs
                clearance and final delivery, ensuring a seamless experience for our clients from order
                to doorstep.
              </p>
            </div>
            <div style={{
              textAlign: 'center'
            }}>
              <img
                src="https://images.unsplash.com/photo-1642864285577-4adc9f33ba42?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNoZWYlMjBwaWN0dXJlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
                alt="Trading Office"
                style={{
                  width: '100%',
                  maxWidth: '450px',
                  borderRadius: '16px',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                  height: '300px',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div style={{
          padding: '4rem 2rem',
          background: 'linear-gradient(135deg, #2d5a4a 0%, #1e3a32 100%)',
          color: 'white',
          textAlign: 'center'
        }}>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              marginBottom: '1rem',
              fontWeight: 'bold'
            }}>
              🌟 Ready to Start Your China Trade Journey?
            </h2>
            <p style={{
              fontSize: '1.2rem',
              marginBottom: '2rem',
              lineHeight: '1.6',
              opacity: '0.9'
            }}>
              Contact us today to discuss your sourcing needs and discover how we can help grow your business.
            </p>

            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <button style={{
                backgroundColor: 'white',
                color: '#2d5a4a',
                padding: '1rem 2rem',
                border: 'none',
                borderRadius: '25px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}>
                📧 Email Us
              </button>

              <button style={{
                backgroundColor: 'transparent',
                color: 'white',
                padding: '1rem 2rem',
                border: '2px solid white',
                borderRadius: '25px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'white'
                  e.currentTarget.style.color = '#2d5a4a'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = 'white'
                }}>
                📞 Call Now
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;