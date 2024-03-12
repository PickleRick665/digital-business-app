import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import myPicture from './images/my-picture.jpg';
import emailIcon from './images/email-icon.png';
import linkedInIcon from './images/linkedIn-logo.png';
import facebookIcon from './images/Facebook-Icon.png';
import githubIcon from './images/GitHub-Icon.png';
import instagramIcon from './images/Instagram-Icon.png';
import twitterIcon from './images/Twitter-Icon.png';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Test />
  </React.StrictMode>
);

function Test(){
  return (
    <div>
      <div className = "my-picture-container">

      </div>

      <h1 className = "name">Restimar Ryan Gran</h1>
      <p className = "frontend-dev">Frontend Developer</p>
      <p className = "website">restimargran.website</p>

      <div className = 'contact-info-container'>
        <div className='email-container'>
          <img src={emailIcon} alt='email icon' />
          <a href='#' className="email">Email</a>
        </div>

        <div className='linkedIn-container'>
          <img src={linkedInIcon} alt='linkedIn logo' />
          <a href='#' className="linked-in">LinkedIn</a>
        </div>
      </div>

      <div className='about-and-interests-container'>
        <h3>About</h3>
        <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try 
          to keep up with security and best practices, and am always looking for new things to learn.
        </p>

        <h3>Interests</h3>
        <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic</p>
      </div>

      <div className='socials'>
        <img src={twitterIcon} alt='twitter logo'/>
        <img src={facebookIcon} alt='facebook logo'/>
        <img src={instagramIcon} alt='instagram logo'/>
        <img src={githubIcon} alt='github logo'/>
      </div>
    </div>
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
