import React, { useState } from 'react';
import { Form, FormGroup, TextInput, Button } from 'carbon-components-react';
import NavBar from '../../components/Navbar';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';

const Passcode = props => {
  const [passcode, setPasscode] = useState('');
  const [redirect, setRedirect] = useState(false);

  let sessionID = '';
  if (props.location.state) {
    sessionID = props.location.state.id;
  }

  const submitForm = () => {
    let data = { passcode: passcode };
    Axios({
      method: 'post',
      url: '/passcode/' + sessionID,
      data: data,
    }).then(
      response => {
        console.log('sendpasscode response: ', response);
        setRedirect(true);
      },
      error => {
        console.log(error);
      }
    );
  };

  return (
    <>
      <NavBar />
      <Form>
        <FormGroup legendText="">
          <TextInput
            labelText=""
            light
            type="password"
            id="passcodeInput"
            invalidText="Invalid"
            placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
            value={passcode}
            onChange={event => setPasscode(event.target.value)}
          />
          <div className="pcbuttons">
            <div className="pcverifyLater">Verify Later</div>
            <div className="pcverifyCode">
              <Button onClick={submitForm} id="passcodeButton" size="small">
                Send Verification Code{' '}
                <span className="wpicon">
                  <img src="https://via.placeholder.com/16" alt="icon" />
                </span>
              </Button>
            </div>
          </div>
        </FormGroup>
      </Form>
      <div className="pcinfo">Didn't receive a verification code?</div>
      <div className="pcfooter">Request a new one.</div>
      {redirect ? (
        <Redirect
          to={{
            pathname: '/zipday',
            state: { id: sessionID },
          }}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default Passcode;
