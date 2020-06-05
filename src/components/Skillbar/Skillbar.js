import React from 'react';
import { Slider } from 'carbon-components-react';

const SkillBar = props => {
  console.log('here the props: ', props);

  return (
    <div className="skillBarWrapper">
      <div className="skillBarTitle">{props.title}</div>
      <div className="slider">
        {/* <Slider
                    ariaLabelInput="Label for slider value"
                    id="slider2"
                    labelText="HTML5"
                    max={100}
                    min={0}
                    step={1}
                    stepMuliplier={4}
                    value={99}
                /> */}
        {props.data.map(skill => {
          console.log(skill);
          return (
            <>
              <Slider
                labelText={skill.type}
                max={100}
                min={0}
                value={skill.value}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default SkillBar;
