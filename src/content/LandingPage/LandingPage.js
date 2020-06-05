import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, FormGroup, TextInput, Button } from 'carbon-components-react';
import NavBar from '../../components/Navbar';
import SkillBar from '../../components/Skillbar';
import {
  Accordion,
  AccordionItem,
  ContentSwitcher,
  Switch,
  Slider,
} from 'carbon-components-react';

const LandingPage = () => {
  //state
  const [redirect, setRedirect] = useState(0);
  let timeOutSessions = [];
  const submitForm = () => {
    setRedirect(1);
  };

  const programmingLanguages = [
    { type: 'Javascript', value: 95 },
    { type: 'Python', value: 85 },
    { type: 'Lua', value: 55 },
    { type: 'C++', value: 70 },
    { type: '.NET', value: 15 },
    { type: 'Swift', value: 65 },
  ];

  return (
    <>
      <NavBar />
      <div className="titleBar">
        <div className="position">
          Dynamic thinker and experienced developer with a proven record of
          building and motivating teams, designing and driving sales strategies,
          architecting and developing IT solutions, and managing projects from
          concept to completion.
        </div>
      </div>
      <div className="contentSwitcher">
        <ContentSwitcher onChange={console.log}>
          <Switch name={'first'} text="Education and Skills" />
          <Switch name={'second'} text="Second section" />
          <Switch name={'third'} text="Third section" />
        </ContentSwitcher>
      </div>
      <div className="slider">
        <SkillBar title="Programming Languages" data={programmingLanguages} />
      </div>
      {/* <div className="accordian">
        <Accordion>
          <AccordionItem title="Title 1"><p>The accordion component delivers large amounts of content in a small space through progressive disclosure. The user gets key details about the underlying content and can choose to expand that content within the constraints of the accordion. Accordions work especially well on mobile interfaces or whenever vertical space is at a premium.</p></AccordionItem>
          <AccordionItem title="Title 2"><p>The accordion component delivers large amounts of content in a small space through progressive disclosure. The user gets key details about the underlying content and can choose to expand that content within the constraints of the accordion. Accordions work especially well on mobile interfaces or whenever vertical space is at a premium.</p></AccordionItem>
          <AccordionItem title="Title 3"><p>The accordion component delivers large amounts of content in a small space through progressive disclosure. The user gets key details about the underlying content and can choose to expand that content within the constraints of the accordion. Accordions work especially well on mobile interfaces or whenever vertical space is at a premium.</p></AccordionItem>
        </Accordion>
        </div> */}
      {redirect == 1 ? (
        <Redirect
          to={{
            pathname: '/zipday',
            state: { id: '1234' },
          }}
        />
      ) : redirect == 2 ? (
        <Redirect
          to={{
            pathname: '/welcome',
            state: { id: '1234' },
          }}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default LandingPage;
