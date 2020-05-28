import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const RegistrationForm = props => {
  console.log('registration form props: ', props.location);
  const [redirect, setRedirect] = useState(false);
  return (
    <>
      <Navbar />
      <div>REGISTRATION FORM WORKS!</div>
      {redirect ? <Redirect to="/" /> : ''}
    </>
  );
};

export default RegistrationForm;
