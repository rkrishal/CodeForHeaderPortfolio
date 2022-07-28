import React from 'react';
import Typical from 'react-typical';
import './Profile.css';

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/rk.rishal/">
                <i className="fa fa-facebook-square"></i>
              </a>

              <a href="https://www.instagram.com/rk_rishal/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://github.com/rkrishal">
                <i className="fa fa-github-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/rkrishal/">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {' '}
              Hello, I'M{' '}
              <span className="highlighted-text">Mohamed Rishal</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {' '}
              <h1>
                {' '}
                <Typical
                  loop={Infinity}
                  steps={[
                    'React.JS Developer ',
                    1500,

                    'Web Application Developer💻',
                    1500,
                    'Front-End Developer🖥',
                    1500,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building application with Front and Back End operation.
              </span>
            </span>
          </div>
          <div className="profile-option">
            <button className="btn primary-btn">
              {''}
              Hire Me{' '}
            </button>
            <a
              href="https://cdn.jsdelivr.net/gh/rkrishal/RK-Portfolio@main/asset/M_Mohamed_Rishal__CV_-2.pdf"
              download="Mohamed Rishal.pdf"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
