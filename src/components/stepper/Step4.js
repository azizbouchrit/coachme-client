import React from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";
import { Radio } from 'antd';


const Step4 = props => {
    if (props.currentStep !== 4) {
    return null;
    }

    const onChange = e => {
    console.log('radio checked', e.target.value);
    };

    return (
    <>
        <p>When would you be available for training?</p>
        <FormGroup>
        <p>
        <Radio.Group onChange={onChange}>
        <p>
        <Radio value={1}>One day</Radio></p>
        <p>
        <Radio value={2}>Two days</Radio></p>
        <p>
        <Radio value={3}>Three days</Radio></p>
    </Radio.Group>
    </p>

        </FormGroup>
    </>
    );
};

export default Step4;

