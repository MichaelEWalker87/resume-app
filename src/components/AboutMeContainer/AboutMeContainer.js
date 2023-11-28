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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Nunc mi ipsum faucibus vitae aliquet. Accumsan in nisl nisi scelerisque eu. 
            Velit aliquet sagittis id consectetur purus ut faucibus. 
            Eget gravida cum sociis natoque penatibus. Duis tristique sollicitudin nibh sit amet. 
            Ante in nibh mauris cursus mattis molestie a. 
            Ipsum dolor sit amet consectetur adipiscing. Placerat in egestas erat imperdiet sed. 
            Varius vel pharetra vel turpis nunc eget lorem dolor. 
            Imperdiet massa tincidunt nunc pulvinar. In nisl nisi scelerisque eu ultrices vitae 
            auctor eu augue. Pulvinar sapien et ligula ullamcorper malesuada. 
            Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit. 
            Lectus arcu bibendum at varius. Hendrerit dolor magna eget est. 
            Massa id neque aliquam vestibulum morbi blandit cursus. A cras semper auctor neque 
            vitae tempus quam pellentesque. Quam adipiscing vitae proin sagittis nisl 
            rhoncus mattis rhoncus. Ut tortor pretium viverra suspendisse potenti nullam.
            Mus mauris vitae ultricies leo integer. Id porta nibh venenatis cras sed felis. 
            Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Semper 
            feugiat nibh sed pulvinar. Vitae nunc sed velit dignissim sodales ut eu sem. 
            Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Pretium 
            quam vulputate dignissim suspendisse. Adipiscing enim eu turpis egestas pretium 
            aenean pharetra magna ac. Orci sagittis eu volutpat odio facilisis mauris sit amet. 
            Eget magna fermentum iaculis eu non.
        </p>
      </div>
    </div>
  );
}

export default AboutMeContainer;
