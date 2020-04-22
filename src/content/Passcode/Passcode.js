import React, { useState } from 'react';
import { Form, FormGroup, TextInput, Button } from 'carbon-components-react';
import NavBar from '../../components/Navbar';
import { Redirect } from 'react-router-dom';

const Passcode = () => {
  const [passcode, setPasscode] = useState('');
  const [redirect, setRedirect] = useState(false);

  const submitForm = () => {
    console.log('passcode button hit');
    setRedirect(true);
  };

  return (
    <>
      <NavBar />
      <div class="pcwrapper">
        <div class="pctitle">
          Confirm
          <br />
          Passcode
        </div>
        <div class="pcdesc">
          Please enter the passcode sent to your mobile phone.
        </div>
        <Form>
          <FormGroup>
            <TextInput
              light
              type="password"
              id="passcodeInput"
              invalidText="Invalid"
              placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
              value={passcode}
              onChange={event => setPasscode(event.target.value)}
            />
            <div class="pcbuttons">
              <div class="pcverifyLater">
                <a>Verify Later</a>
              </div>
              <div class="pcverifyCode">
                <Button onClick={submitForm} id="passcodeButton" size="small">
                  Send Verification Code{' '}
                  <span class="wpicon">
                    <img src="https://via.placeholder.com/16" />
                  </span>
                </Button>
              </div>
            </div>
          </FormGroup>
        </Form>
        <div class="pcinfo">Didn't receive a verification code?</div>
        <div class="pcfooter">
          <a>Request a new one.</a>
        </div>
      </div>
      {redirect ? <Redirect to="/zipday" /> : ''}
    </>
  );
};

export default Passcode;
