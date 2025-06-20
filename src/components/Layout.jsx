import React from 'react';
import './Portfolio.css';
 
const PortfolioFront = () => {
  return (
    <div className="container vh-100 d-flex align-items-center bg-light">
      <div className="row w-100">
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center p-4 text-center text-md-start">
          <h1 className="mb-3">Hi, I'm <span className="text-success">Yashasvi Choudhary</span></h1>
          <p className="mb-4">
            I'm a Full Stack Web Developer passionate about creating
              user-friendly and scalable web applications
          </p>
          <div className="mb-4 d-flex justify-content-center justify-content-md-start flex-wrap gap-3">
            <a href="mailto:yashasvilamba09@gmail.com" className="btn btn-success">Hire Me</a>
            <a href="/yashasviCV.pdf" className="btn btn-success" target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center mt-5 mt-md-0">
          <img src="yp.jpg" alt="Profile" className="img-fluid rounded-circle shadow-lg" style={{ maxHeight: '400px', width: 'auto' }} />
        </div>
      </div>
    </div>
  );
};
 
export default PortfolioFront;
 