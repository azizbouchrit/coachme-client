import { Form, Input, Button } from 'antd'
import { MailOutlined, LockOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { login } from '../../services/authService'
import './Login.css'

const Login = () => {
  const onFinish = async values => {
    console.log('Received values of form: ', values)
    const data = await login(values)
    if (data) {
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))
      if (data.user.role === 'COACH')
        return (window.location.href = '/coach/' + data.user.username)
      window.location.href = '/member/' + data.user.username
    }
  }

  return (
    <div className='login-page'>
      <h1>Welcome Back</h1>
      <Form
        name='normal_login'
        className='login-form'
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name='email'
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
          <Input
            prefix={<MailOutlined className='site-form-item-icon' />}
            placeholder='Email'
          />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[
            {
              required: true,
              message: 'Please input your Password!'
            }
          ]}
        >
          <Input
            prefix={<LockOutlined className='site-form-item-icon' />}
            type='password'
            placeholder='Password'
          />
        </Form.Item>
        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            className='login-form-button'
          >
            Log in
          </Button>{' '}
          Or
          <Link to='/signup'>register now!</Link>
        </Form.Item>
      </Form>
    </div>
  )
}
export default Login
