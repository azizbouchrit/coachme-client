import React from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";
import { Radio } from 'antd';


const Step2 = props => {
  if (props.currentStep !== 2) {
    return null;
  }

  const onChange = e => {
    console.log('radio checked', e.target.value);
    localStorage.setItem("onboardingData", JSON.stringify({ goal: e.target.value }))
  };

  return (
    <>
      <p>what is your fitness goal?</p>
      <FormGroup>
        <p>
          <Radio.Group onChange={onChange}>
            <p>
              <Radio value="BUILD_MUSCLE">Tone you up</Radio></p>
            <p>
              <Radio value="MAINTAIN">Be in good shape</Radio></p>
            <p>
              <Radio value="LOOSE_WEIGHT">Losing weight</Radio></p>
          </Radio.Group>
        </p>

      </FormGroup>
    </>
  );
};

export default Step2;
