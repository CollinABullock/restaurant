// We can maybe import a contact us form from somewhere, just to make it look slightly snazzier than just an email and phone number and what not.
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';


export default function Contact() {
  return (
    
    <div className="container mt-5" style={{ WebkitTextStroke: '1px black', 
    MozTextStroke: '1px black',
    OTextStroke: '1px black',
    textStroke: '1px black', marginBottom: "10px",  }}>
                <motion.div
  initial={{ y: '100%' }} // Initially, move the section down below the viewport
  animate={{ y: 0 }} // Animate the section to slide up to its original position
  transition={{ type: 'spring', stiffness: 100 }} // Add a spring transition effect
>
      <div className="row justify-content-center">

        <div className="col-md-6" style={{fontSize:'1.5rem'}}>
          <h1 className="text-center mb-4" style={{textDecoration:'underline'}}>Contact Us</h1>
          <div className="text-center mb-4">
            <p className="lighter-text">We'd love to hear from you!</p>
            <p className="lighter-text">Reach out to us via phone, email, or drop by our location:</p>
          </div>

          <div className="text-center mb-4">
            <p className="lighter-text">
              <FaPhone className="me-2" />
              <a href="tel:1-800-EAT-SUSHI">1-896-EAT-SUSHI</a>
            </p>
            <p className="lighter-text">
              <FaEnvelope className="me-2" />
              {/* obvioulsy this wont end up mailing */}
              <a href="mailto:contact@cntpns.com">contact@cntpns.com</a>
            </p>
            <p className="lighter-text">
              <FaMapMarkerAlt className="me-2" />
              123 Baker Street, Kewlsville NE
            </p>
          </div>

          <div className="text-center">
            <h2 style={{color: "white"}}>Send us a Message</h2>
            <form>
              <div className="mb-3">
                <input type="text" className="form-control" id="name" placeholder="Your Name" required />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" id="email" placeholder="Your Email" required />
              </div>
              <div className="mb-3">
                <textarea className="form-control" id="message" rows="4" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send</button>
            </form>
          </div>
        </div>
      </div>
      </motion.div>
    </div>
    
  );
}
