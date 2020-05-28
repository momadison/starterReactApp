import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, FormGroup, TextInput, Button } from 'carbon-components-react';
import NavBar from '../../components/Navbar';

const LandingPage = () => {
  //state
  const [page, setPage] = useState(1);
  const [redirect, setRedirect] = useState(0);
  const [sessionID, setSessionID] = useState('');
  const [imgSRC, setImgSRC] = useState(
    'https://cdn.pixabay.com/photo/2018/05/31/15/06/not-hear-3444212__340.jpg'
  );
  let timeOutSessions = [];
  const submitForm = () => {
    setRedirect(1);
  };

  const displayError = () => {
    console.log('image loading error handler');

    //Check for Authorization using sessionID
    console.log('session Id is: ', sessionID);
    let request2 = new Request('/validation/' + sessionID, {
      method: 'get',
    });

    fetch(request2).then(response => {
      response.json().then(data => {
        console.log('THE BIG FINALE: ', data);
        if (data.status == 'SUCCESS') {
          let timer1 = setTimeout(() => {
            setRedirect(1);
          }, 2500);
          timeOutSessions.push(timer1);
        } else {
          let timer2 = setTimeout(() => {
            setRedirect(2);
          }, 2500);
          timeOutSessions.push(timer2);
        }
      });
    });
  };

  const mobileIdentify = () => {
    console.log('image loading handler');
  };

  const disconnectWireless = () => {
    console.log('disconnect wireless');

    timeOutSessions.forEach(timeOut => {
      clearTimeout(timeOut);
    });

    setTimeout(() => {
      setRedirect(2);
    }, 2000);
  };

  // Use effect to start API call after page has loaded
  useEffect(() => {
    console.log('running API 1');
    let request = new Request('/greeting', {
      headers: new Headers({
        'Content-Type': 'text/json',
      }),
      method: 'post',
    });

    fetch(request).then(response => {
      response.json().then(data => {
        console.log(data);
        console.log(data.carrier);
        setImgSRC(data.carrier);
        setSessionID(data.session_id);
      });
    });
  }, [page]);

  return (
    <>
      <NavBar />
      <div className="zdwrapper">
        WELCOME TO THE LANDING
        <img
          src="https://upload.wikimedia.org/wikipedia/en/b/b5/Wireless-icon.png"
          width="20px"
          height="20px"
          onClick={disconnectWireless}
        />
      </div>
      <img
        src={imgSRC}
        alt=""
        width="1px"
        height="1px"
        onLoad={mobileIdentify}
        onError={displayError}
      />
      {redirect == 1 ? (
        <Redirect
          to={{
            pathname: '/zipday',
            state: { id: sessionID },
          }}
        />
      ) : redirect == 2 ? (
        <Redirect
          to={{
            pathname: '/welcome',
            state: { id: sessionID },
          }}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default LandingPage;
