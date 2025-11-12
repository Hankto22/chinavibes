import React from 'react';
import NavBar from '../components/navBar';
import ContactSection from '../components/contactSection';
import Footer from '../components/footer';

const Contact = React.memo(() => {
  return (
    <div className="page-container">
      <NavBar />
      <main className="main-content">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
});

export default Contact;