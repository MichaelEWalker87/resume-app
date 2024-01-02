import React, { useEffect } from 'react';
import PortPic from '../../assets/PortfolioPicture/PortfolioPicture.png';
import './AboutMeContainer.scss';

function AboutMeContainer(props) {
    useEffect(() => {
        const container = document.querySelector('.about-me-outer-container');
        const aboutMeBody = document.querySelector('.about-me-body');
        const maxScroll = container.scrollHeight - container.clientHeight;
        
        // Listen to the scroll event within the container
        container.onscroll = () => {
          const scrollPosition = container.scrollTop;
          
          const bodySectionPosition = aboutMeBody.offsetTop - container.offsetTop;
    
          if (scrollPosition < bodySectionPosition) {
            container.style.background = `linear-gradient(to bottom, rgba(244, 249, 253, 1), rgba(244, 249, 253, 2), rgba(244, 249, 253, 3))`;
          } else {
            const gradientOpacity = 1 - (scrollPosition - bodySectionPosition) / (maxScroll - bodySectionPosition);
            container.style.background = `linear-gradient(to bottom, rgba(244, 249, 253, 1), rgba(244, 249, 253, 0.95), rgba(244, 249, 253, ${gradientOpacity + 0.9}), rgba(244, 249, 253, 0.1))`;
          }
        };
      }, []);

  return (
    <div className="about-me-outer-container">
      <h1 className='about-me-title'>About Me</h1>
      <div className="about-me-inner-container">
        <img 
          src={PortPic} 
          alt='A portrait of me'
          className='about-me-image' 
        />
        <p className='about-me-body' > 
          <p>A passionate and results-oriented product and technology leader with a proven track record of driving user engagement, streamlining processes, and delivering impactful solutions across diverse industries. Skilled in both the technical and creative aspects of product development, with expertise in product vision & strategy, user research & analysis, agile methodologies, cross-functional collaboration, and technical communication.</p>
          <p><strong>Highlights:</strong></p>
          <ul>
            <li><strong>Product Manager:</strong> Increased B2B user engagement by 40%, reduced support tickets by 86%, and achieved 100% user adoption within 3 months, while driving significant business expansion at Suited Connector.</li>
            <li><strong>Mobile Engineer:</strong> Built a non-profit mobile platform with 8,000 users and a 4.5-star rating, and spearheaded a security overhaul within a medical app at TroutHouseTech.</li>
            <li><strong>Front-End Engineer:</strong> Built 16 diverse applications, mastered JavaScript, React, and other essential technologies, and thrived in collaborative environments at Turing School of Software & Design.</li>
            <li><strong>Technical Experience:</strong> Extensive background in IT solutions, hardware, infrastructure, security, and ITSM, with a 95% success rate in problem resolution and a knack for exceeding client expectations at Istonish.</li>
            <li><strong>Market & Customer Centric:</strong> Launched and scaled T-Mobile's TV Entertainment department in new markets, conducted over 1,000 user interviews to inform product development, and reduced churn rate by 15% through research-driven marketing campaigns.</li>
          </ul>
          <p><strong>Additional Skills:</strong></p>
          <ul>
            <li>Agile Methodologies (Scrum, Kanban)</li>
            <li>Technical Writing & API Documentation</li>
            <li>JIRA & Asana Proficient</li>
            <li>UI/UX Design & Mockups</li>
            <li>Data Analysis & User Metrics</li>
            <li>HTML, CSS, React Router, Cypress</li>
            <li>DOM Manipulation & Test-Driven Development</li>
            <li>Project Management & Collaboration</li>
            <li>Communication & Effective Presentation</li>
            <li>Independent Design Services & Client Satisfaction</li>
          </ul>
        <p><strong>Passionate about:</strong></p>
        <ul>
          <li>Building user-centric products that solve real problems</li>
          <li>Fostering cross-functional collaboration and communication</li>
          <li>Continuous learning and embracing new challenges</li>
        </ul>
        </p>
      </div>
    </div>
  );
}

export default AboutMeContainer;
