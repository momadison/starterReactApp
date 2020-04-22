import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, FormGroup, TextInput, Button } from 'carbon-components-react';
import NavBar from '../../components/Navbar';

const WelcomePage = () => {
  const [phone, setPhone] = useState('');
  const [redirect, setRedirect] = useState(false);

  const submitForm = () => {
    setRedirect(true);
  };

  return (
    <>
      <NavBar />
      <div class="wpwrapper">
        <div class="wptitle">Welcome!</div>
        <div class="wpdesc">
          Let's get started! Validate your identity by providing your phone
          number and we'll pre-fill your application.
        </div>
        <Form>
          <FormGroup>
            <TextInput
              light
              id="phoneInput"
              invalidText="Invalid"
              placeholder="(123)555-0519"
            />
            <div class="wpbuttons">
              <div class="verifyLater">
                <a onClick={submitForm}>Verify Later</a>
              </div>
              <div class="verifyCode">
                <Button small onClick={submitForm} id="phoneButton">
                  Send Verification Code{' '}
                  <span class="wpicon">
                    <img src="https://via.placeholder.com/16" />
                  </span>
                </Button>
              </div>
            </div>
          </FormGroup>
        </Form>
        <div class="wpinfo">
          We'll send you a mobile passcode, which you'll need to enter on the
          next screen
        </div>
        <div class="wpfooter">
          By clicking Verify, you authorize your wireless carrier to disclose to
          ABCD Company and its service providers your mobile subscriber details
          (name, billing address, email, phone) in order to populate this form.
          See our <a>Privacy Policy</a> for how we treat your data
        </div>
      </div>
      {redirect ? <Redirect to="/passcode" /> : ''}
    </>
  );
};

export default WelcomePage;
