import React from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";
import { Radio } from 'antd';


const Step3 = props => {
  if (props.currentStep !== 3) {
    return null;
  }

  const onChange = e => {
    console.log('radio checked', e.target.value);
    const onboardingData = JSON.parse(localStorage.getItem("onboardingData"))
    localStorage.setItem("onboardingData", JSON.stringify({...onboardingData, level: e.target.value }))

  };

  return (
    <>
      <p>What is your current fitness level?</p>
      <FormGroup>
        <p>
          <Radio.Group onChange={onChange}>
            <p>
              <Radio value={1}>Not in shape</Radio></p>
            <p>
              <Radio value={2}>Occasional training</Radio></p>
            <p>
              <Radio value={3}>Regular training</Radio></p>
            <p>
              <Radio value={4}>Sport is part of my life</Radio></p>
            <p>
              <Radio value={5}>Confirmed athlete</Radio></p>
          </Radio.Group>
        </p>

      </FormGroup>
    </>
  );
};

export default Step3;
