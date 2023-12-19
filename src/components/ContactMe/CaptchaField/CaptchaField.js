import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const CaptchaField = ({ sitekey, onChange, token, isLoading }) => {
  return (
    <div className='captcha-container'>
      <ReCAPTCHA sitekey={sitekey} onChange={onChange} />
      {!token || isLoading ? (
        <p className='verify-me-text'>&#8593; Click here to verify and connect</p>
      ) : (
        ''
      )}
    </div>
  );
};

export default CaptchaField;