import React from "react";
import { FormGroup, Label, Button } from "reactstrap";
import { Radio, InputNumber  } from 'antd';
import { DatePicker, Space } from 'antd';
import moment from 'moment';
import "./styles.css";
import { Input, Tooltip } from 'antd';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
const customFormat = value => `custom format: ${value.format(dateFormat)}`;

const Step1 = props => {
  if (props.currentStep !== 1) {
    return null;
  }
  
    const onChange = e => {
      console.log('radio checked', e.target.value);
    };

    
    
function onChangeDate(date, dateString) {
  console.log(date, dateString);
}

  return (
    <>
      <p>Can you give us some information?</p>
      <FormGroup>
      <p>
      <Radio.Group onChange={onChange}>
      <Radio value={1}>Woman</Radio>
      <Radio value={2}>Man</Radio>
    </Radio.Group>
    </p>
<p>
  <div className="padding">
    <DatePicker onChange={onChangeDate} picker="Date of birth" /></div></p>
  <p>
    <div className = "padding">
    <Input
      placeholder="Your weight" 
      suffix="KG" />
      </div>
      </p>
      <p>
        <div className="padding">
      <Input
      placeholder="Your height"
      suffix="CM" /> 
      </div>
      </p>
    </FormGroup>
    </>
  );
};

export default Step1;
