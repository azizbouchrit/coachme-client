import React from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";
import { Radio } from 'antd';


const Step5 = props => {
    if (props.currentStep !== 5) {
    return null;
    }

    const onChange = e => {
    console.log('radio checked', e.target.value);
    };

    return (
    <>
        <p>How would you like to accomplish your health and fitness goals??</p>
        <FormGroup>
        <p>
        <Radio.Group onChange={onChange}>
        <p>
        <Radio value={1}>Bodyweight exercise</Radio></p>
        <p>
        <Radio value={2}>Bar and free weights exercise</Radio></p>
        <p>
        <Radio value={3}>Running</Radio></p>
        <p>
        <Radio value={4}>Cardio</Radio></p>
    </Radio.Group>
    </p>

        </FormGroup>
    </>
    );
};

export default Step5;
