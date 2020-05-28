import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import {
  Form,
  FormGroup,
  TextInput,
  Button,
  Header,
} from 'carbon-components-react';
import Axios from 'axios';
import NavBar from '../../components/Navbar';

const WelcomePage = props => {
  const [phone, setPhone] = useState('');
  const [redirect, setRedirect] = useState(false);

  let sessionID = '';
  if (props.location.state) {
    sessionID = props.location.state.id;
  }

  const submitForm = () => {
    let data = { mobile: phone };
    Axios({
      method: 'post',
      url: '/sendmobile/' + sessionID,
      data: data,
    }).then(
      response => {
        console.log('sendMobile response: ', response);
        if (response.data.status == 'SUCCESS') {
          setRedirect(true);
        }
      },
      error => {
        console.log(error);
      }
    );
  };

  const phoneChanged = e => {
    const target = e.target;
    setPhone(target.value);
  };

  return (
    <>
      <NavBar />
      <div className="wpwrapper">
        <div className="wptitle">Welcome!</div>
        <div className="wpdesc">
          Let's get started! Validate your identity by providing your phone
          number and we'll pre-fill your application.
        </div>
        <Form>
          <FormGroup legendText="">
            <TextInput
              light
              id="phone"
              invalidText="Invalid"
              placeholder="(123)555-0519"
              labelText=""
              value={phone}
              onChange={phoneChanged}
            />
            <div className="wpbuttons">
              <div className="verifyLater">
                <span onClick={submitForm}>Verify Later</span>
              </div>
              <div className="verifyCode">
                <Button small onClick={submitForm} id="phoneButton">
                  Send Verification Code{' '}
                  <span className="wpicon">
                    <img src="https://via.placeholder.com/16" alt="icon" />
                  </span>
                </Button>
              </div>
            </div>
          </FormGroup>
        </Form>
        <div className="wpinfo">
          We'll send you a mobile passcode, which you'll need to enter on the
          next screen
        </div>

        <div className="wpfooter">
          By clicking Verify, you authorize your wireless carrier to disclose to
          ABCD Company and its service providers your mobile subscriber details
          (name, billing address, email, phone) in order to populate this form.
          See our Privacy Policy for how we treat your data
        </div>
      </div>
      {redirect ? (
        <Redirect
          to={{
            pathname: '/passcode',
            state: { id: sessionID },
          }}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default WelcomePage;
