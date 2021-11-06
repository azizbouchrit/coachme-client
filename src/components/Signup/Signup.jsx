import { Form, Input, Button, Select, DatePicker } from 'antd'
import { Link } from 'react-router-dom'
import { register } from '../../services/authService'
import { history } from './../../App';
import './Signup.css'

const { Option } = Select

const Login = () => {

  const onFinish = async values => {
    console.log('Received values of form: ', values)
    const data = await register(values)
    if (data) {
      localStorage.setItem("token", data.token)
      localStorage.setItem("user", JSON.stringify(data.user))
      window.location.href = "/onboarding"
    }
  }

  return (
    <div className='signup-page'>
      <h1>
        Strat Your Fitness <br /> Journey Now!
      </h1>
      <Form
        name='normal_login'
        className='login-form'
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
      >
        <Form.Item
          className='signup-form-item'
          name='email'
          label='Email'
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!'
            },
            {
              required: true,
              message: 'Please input your E-mail!'
            }
          ]}
        >
          <Input placeholder='Email' />
        </Form.Item>
        <Form.Item
          className='signup-form-item'
          name='password'
          label='Password'
          rules={[
            {
              required: true,
              message: 'Please input your Password!'
            }
          ]}
        >
          <Input type='password' placeholder='Password' />
        </Form.Item>
        <Form.Item
          className='signup-form-item'
          name='firstName'
          label='First Name'
          rules={[
            {
              required: true
            }
          ]}
        >
          <Input placeholder='First Name' />
        </Form.Item>
        <Form.Item
          className='signup-form-item'
          name='lastName'
          label='Last Name'
          rules={[
            {
              required: true
            }
          ]}
        >
          <Input placeholder='Last Name' />
        </Form.Item>
        <Form.Item
          className='signup-form-item'
          name='username'
          label='Username'
          rules={[
            {
              required: true
            }
          ]}
        >
          <Input placeholder='Username' />
        </Form.Item>
        <Form.Item
          className='signup-form-item'
          name='gender'
          label='Gender'
          rules={[
            {
              required: true
            }
          ]}
        >
          <Select placeholder='Gender' allowClear>
            <Option value='male'>male</Option>
            <Option value='female'>female</Option>
          </Select>
        </Form.Item>
        <Form.Item
          className='signup-form-item'
          name='role'
          label='Joining as a:'
          rules={[
            {
              required: true
            }
          ]}
        >
          <Select placeholder='Gender' allowClear>
            <Option value='COACH'>Coach</Option>
            <Option value='USER'>Member</Option>
          </Select>
        </Form.Item>
        <Form.Item
          className='signup-form-item'
          name='birthDate'
          label='Date of birth:'
          rules={[
            {
              required: true
            }
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item style={{ marginTop: '1rem' }}>
          <Button
            type='primary'
            htmlType='submit'
            className='login-form-button'
          >
            Register
          </Button>{' '}
          Or <Link to='/login'>Already have an account?</Link>
        </Form.Item>
      </Form>
    </div>
  )
}
export default Login
