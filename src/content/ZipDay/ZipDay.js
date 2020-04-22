import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, FormGroup, TextInput, Button } from 'carbon-components-react';
import NavBar from '../../components/Navbar';

const WelcomePage = () => {
  const [zipCode, setZipCode] = useState('');
  const [birthday, setBirthday] = useState('');
  const [redirect, setRedirect] = useState(false);

  const submitForm = () => {
    setRedirect(true);
  };

  return (
    <>
      <NavBar />
      <div class="zdwrapper">
        <div class="zdtitle">
          Almost
          <br /> Done!
        </div>
        <div class="zddesc">
          We just need a bit more information to verify you. Please enter your
          primary ZIP Code and your birth month/day.
        </div>
        <div class="pZC">Primary ZIP Code</div>
        <Form>
          <FormGroup>
            <TextInput
              light
              id="zdInput"
              invalidText="Invalid"
              placeholder="12345"
            />
            <div class="bMD">Birth Month/Day</div>
            <TextInput
              light
              id="zdInput"
              invalidText="Invalid"
              placeholder="MM/DD"
            />
            <div class="zdbuttons">
              <div class="zdverifyLater">
                <a onClick={submitForm}>Don't Prefill</a>
              </div>
              <div class="zdverifyCode">
                <Button small onClick={submitForm} id="zdButton">
                  Prefill
                  <span class="wpicon">
                    <img src="https://via.placeholder.com/16" />
                  </span>
                </Button>
              </div>
            </div>
          </FormGroup>
        </Form>
      </div>
      {redirect ? <Redirect to="/passcode" /> : ''}
    </>
  );
};

export default WelcomePage;
