import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, FormGroup, TextInput, Button } from 'carbon-components-react';
import NavBar from '../../components/Navbar';
import Axios from 'axios';

const WelcomePage = props => {
  const [zipCode, setZipCode] = useState('');
  const [birthday, setBirthday] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [optIn, setOptIn] = useState(true);
  const [shipProps, setShipProps] = useState({});

  let sessionID = '';
  if (props.location.state) {
    sessionID = props.location.state.id;
  }

  const giveConsent = () => {
    let data = {};
    let data2 = {};
    if (optIn) {
      data2 = { zip: zipCode, dob: birthday };
      data = { consent: 'opt-in' };
      console.log('opting in');

      Axios({
        method: 'post',
        url: '/identity/' + sessionID,
        data: data2,
      })
        .then(response => {
          console.log('identity response: ', response.data);
          setShipProps(response.data);
        })
        .then(
          () => {
            setRedirect(true);
          },
          error => {
            console.log(error);
          }
        );
    } else {
      data = { consent: 'opt-out' };
      console.log('opting out');
    }

    Axios({
      method: 'post',
      url: '/consent/' + sessionID,
      data: data,
    }).then(
      response => {
        console.log('consent response: ', response);
        if (!optIn) {
          setRedirect(true);
        }
      },
      error => {
        console.log(error);
      }
    );
  };

  const toggleOpt = () => {
    setOptIn(!optIn);
  };

  return (
    <>
      <NavBar />
      <div className="zdwrapper">
        <div className="zdtitle">
          Almost
          <br /> Done!
        </div>
        <div className="zddesc">
          We just need a bit more information to verify you. Please enter your
          primary ZIP Code and your birth month/day.
        </div>
        <div className="pZC">Primary ZIP Code</div>
        <Form>
          <FormGroup legendText="">
            <TextInput
              light
              id="zdInput"
              invalidText="Invalid"
              placeholder="12345"
              labelText=""
              value={zipCode}
              onClick={event => setZipCode(event.target.value)}
            />
            <div className="bMD">Birth Month/Day</div>
            <TextInput
              light
              id="zdInput"
              invalidText="Invalid"
              placeholder="MM/DD"
              labelText=""
              value={birthday}
              onClick={event => setBirthday(event.target.value)}
            />
            <div className="zdbuttons">
              <div className="zdverifyLater">
                <span onClick={giveConsent} onMouseDown={toggleOpt}>
                  Don't Prefill
                </span>
              </div>
              <div className="zdverifyCode">
                <Button small onClick={giveConsent} id="zdButton">
                  Prefill
                  <span className="wpicon">
                    <img src="https://via.placeholder.com/16" alt="icon" />
                  </span>
                </Button>
              </div>
            </div>
          </FormGroup>
        </Form>
      </div>
      {redirect ? (
        <Redirect
          to={{
            pathname: '/registration',
            state: shipProps,
          }}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default WelcomePage;
