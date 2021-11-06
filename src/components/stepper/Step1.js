import React from "react";
import { FormGroup, Label, Button } from "reactstrap";
import { Radio, InputNumber } from 'antd';
import { DatePicker, Space } from 'antd';
import moment from 'moment';
import "./styles.css";
import { Input, Tooltip } from 'antd';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import { Select } from 'antd';

const { Option } = Select;

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
          <div className="padding">
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
        <p>Your health situation?</p>
        <Select
          style={{ width: 300 }}
          placeholder="health situation"
          mode="multiple"

        // onChange={handleChange}
        >
          <Option value="hypertension">hypertension</Option>
          <Option value="hyperglycemie">hyperglycemie</Option>
          <Option value="pregnant">pregnant</Option>
        </Select>
        {/* <p>Any physical problems?</p> */}
        <Select
          style={{ width: 300 }}
          placeholder="physical problems"
          mode="multiple"
        // onChange={handleChange}
        >
          <Option value="back">Back pain</Option>
          <Option value="pregnant">Legs disability</Option>
          <Option value="pregnant">Arms disability</Option>
        </Select>
      </FormGroup>
    </>
  );
};

export default Step1;
