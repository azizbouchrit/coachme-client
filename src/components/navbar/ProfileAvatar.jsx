import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List } from 'antd'
import {
  LogoutOutlined,
  QuestionCircleOutlined,
  UserOutlined
} from '@ant-design/icons'
import './ProfileAvatar.css'

class ProfileAvatar extends Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.handleOutsideClick = this.handleOutsideClick.bind(this)

    this.state = {
      showProfileDropdown: false
    }
  }

  handleLogout = () => {
    window.location.href = '/'
  }

  handleClick () {
    if (!this.state.showProfileDropdown) {
      // attach/remove event handler
      document.addEventListener('click', this.handleOutsideClick, false)
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false)
    }

    this.setState(prevState => ({
      showProfileDropdown: !prevState.showProfileDropdown
    }))
  }

  handleOutsideClick (e) {
    // ignore clicks on the component itself
    // if (this.element && this.element.contains(e.target)) {
    //   return;
    // }

    this.handleClick()
  }

  render () {
    const { user } = this.props
    console.log('avatar props ', user)
    return (
      <div
        className='profile-avatar'
        ref={element => {
          this.element = element
        }}
      >
        <div
          className='navbar-avatar'
          onClick={this.handleClick}
          style={{
            // backgroundImage: 'url(' + user.avatar + ')'
            backgroundColor: 'var(--primary)'
          }}
        >
          {user && (
            <span>
              {(user && user.firstName && user.firstName[0].toUpperCase()) +
                (user && user.lastName && user.lastName[0].toUpperCase())}
            </span>
          )}
        </div>
        {this.state.showProfileDropdown && (
          <div className='profile-dropdown-list'>
            <List
              className='dropdown_list dropdown-shadow '
              size='small'
              style={{ width: '150px' }}
              bordered
              itemLayout='vertical'
              dataSource={[
                <Link to='/profile/update' className='profile-list-item'>
                  <List.Item className='list-item'>
                    <UserOutlined className='profile-icons' /> My Profile
                  </List.Item>
                </Link>,

                <List.Item className='list-item'>
                  <QuestionCircleOutlined className='profile-icons' /> Ask for
                  Help
                </List.Item>,
                <List.Item className='list-item' onClick={this.handleLogout}>
                  <LogoutOutlined className='profile-icons' /> Log out
                </List.Item>
              ]}
              renderItem={item => item}
            />
          </div>
        )}
      </div>
    )
  }
}

export default ProfileAvatar
