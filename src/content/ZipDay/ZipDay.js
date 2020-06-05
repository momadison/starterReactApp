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

    const onClickFunction = () => {
      console.log('onclick function');
    };

    const onChangeFunction = () => {
      console.log('onchange function');
    };

    return (
      <>
        <NavBar />
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
                <span onClick={onClickFunction} onMouseDown={onChangeFunction}>
                  option 1
                </span>
              </div>
              <div className="zdverifyCode">
                <Button small onClick={onClickFunction} id="zdButton">
                  option 2
                  <span className="wpicon">
                    <img src="https://via.placeholder.com/16" alt="icon" />
                  </span>
                </Button>
              </div>
            </div>
          </FormGroup>
        </Form>
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
  }
};

export default WelcomePage;
