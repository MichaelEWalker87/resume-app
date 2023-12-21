import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactMe.scss';
import { SITE_KEY, SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from '../../env';
import ContactSubmit from '../../components/Button/ContactSubmit/ContactSubmit';
import BlueBear from '../../assets/Contact/background/BlueBear.png';
import ThankYou from '../../components/ContactMe/Thankyou/ThankYou';
import FormField from '../../components/ContactMe/FormField/FormFeild';
import TextAreaField from '../../components/ContactMe/TextField/TextAreaField';
import CaptchaField from '../../components/ContactMe/CaptchaField/CaptchaField';


function ContactMe() {
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false)
  const [formData, setFormData] = useState({
    user_name: "",
    from_email: "",
    from_company: "",
    message: "",
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
    script.onload = () => window.grecaptcha.ready(() => {
    });
    document.body.appendChild(script);
  }, []);

  const resetEmailSent = () => {
    setIsSuccessful(false)
  }
  
  const handleChange = (value) => {
    setToken(value);
  };

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const form = useRef();

  const linkedInProfile = "https://www.linkedin.com/in/michael-walker-719471141/";
  const calendlyProfile = "https://calendly.com/michael-e-walker-87";
  
  const sendEmail = (e) => {
    setIsLoading(true);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        if (result.text === "OK") {
          setIsSuccessful(true)
          setFormData({
            user_name: "",
            from_email: "",
            from_company: "",
            message: "",
          });
        }
      })
      .catch((error) => {
        console.log(error.text);
        setErrorMessage("An error has occurred. If the issue persists, please feel free to contact me on ")
        setFormData({
            user_name: "",
            from_email: "",
            from_company: "",
            message: "",
          });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="contact-me-wrapper">  
        <form 
            ref={form} 
            onSubmit={(e) => sendEmail(e)}
            className={"form-container"} 
        >
            <div
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
                className={"calendly-container"} 
            >
                <ContactSubmit
                    disabled= {false} 
                    onClick={() => window.open(calendlyProfile, '_blank')}
                    className={"book-an-appointment-button"} 
                    enter={isHovered} 
                    submit={true}
                    calendlyStyle={"size-appointment-button"} 
                    icon={true} 
                    text={"Book An Appointment"}
                /> 
            </div>
            {isSuccessful ? 
              <ThankYou onClick={resetEmailSent}/> : 
              <div>
                <h1 className='shoot-me-an-email'>Shoot me a Message</h1>
                  {!errorMessage === "" ? 
                      <p className='error-submit-text'>{errorMessage}<a rel="noreferrer" href={linkedInProfile} target="_blank">LinkedIn</a></p> :
                      "" 
                  }
                  <FormField
                    label="Name"
                    type="text"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleInputChange}
                    className='name-container'
                  />
                  <FormField
                    label="Email"
                    type="email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleInputChange}
                    className='email-container'
                  />
                  <FormField
                    label="Company"
                    type="text"
                    name="from_company"
                    value={formData.from_company}
                    onChange={handleInputChange}
                    className='company-container'
                  />
                  <TextAreaField
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className='message-container'
                  />
                  <CaptchaField
                    sitekey={SITE_KEY}
                    onChange={handleChange}
                    token={token}
                    isLoading={isLoading}
                  />
                  <div className="form-group"
                      onMouseEnter={handleHover}
                      onMouseLeave={handleLeave}
                  >
                    <ContactSubmit
                        disabled= {!token || isLoading} 
                        onClick={(e) => sendEmail(e)} 
                        className={"submit-contact-me"} 
                        enter={isHovered} 
                        calendlyStyle={"placement-contact-me"} 
                        submit={!token}
                        icon={false} 
                        text={isLoading ? 'Sending...' : 'Send Message'}
                    /> 
                  </div>
              </div>     
            }
        </form>
        <div className='background-blue-bear'>
            <img
                src={BlueBear}
                alt='zoo entrance'
                className='blue-bear-img'
            />
        </div>
        <div className='contact-banners'/>
    </div>
  );
}

export default ContactMe;
