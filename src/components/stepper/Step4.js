import React from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";
import { Radio } from 'antd';


const Step4 = props => {
    if (props.currentStep !== 4) {
        return null;
    }

    const onChange = e => {
        console.log('radio checked', e.target.value);
        console.log('radio checked', e.target.value);
        const onboardingData = JSON.parse(localStorage.getItem("onboardingData"))
        localStorage.setItem("onboardingData", JSON.stringify({...onboardingData, days: e.target.value }))
    
    };

    return (
        <>
            <p>When would you be available for training?</p>
            <FormGroup>
                <p>
                    <Radio.Group onChange={onChange}>
                        <p>
                            <Radio value={1}>One day</Radio>
                        </p>

                        <p>
                            <Radio value={3}>Three days</Radio>
                        </p>
                        <p>
                            <Radio value={4}>Four days</Radio>
                        </p>
                        <p>
                            <Radio value={5}>Five days</Radio>
                        </p>
                    </Radio.Group>
                </p>

            </FormGroup>
        </>
    );
};

export default Step4;

