/**
 * Created by Max on 2019-03-25.
 */
import React from 'react'
import './login.css'
import ReactDom from 'react-dom'
import Modal from '../modal/modal'

class Login extends React.Component {
  render() {
    return (
      <Modal>
        <div className="login-container" />
      </Modal>
    )
  }
}

export default Login
