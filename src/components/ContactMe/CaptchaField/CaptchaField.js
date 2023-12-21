import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const CaptchaField = ({ sitekey, onChange, token, isLoading }) => {
  return (
    <>
      {sitekey ? (
        <div className='captcha-container'>
          <ReCAPTCHA sitekey="6LeKQSopAAAAABrwULbRW3Z-48LmbML9mkL73PVY" onChange={onChange} />
          {!token || isLoading ? (
            <p className='verify-me-text'>&#8593; Click here to verify and connect</p>
          ) : (
            ''
          )}
        </div>
      ) : (
        'Loading reCAPTCHA Checkbox'
      )}
    </>
  );
};

export default CaptchaField;
