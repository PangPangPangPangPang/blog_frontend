/**
 * Created by Max on 2019-03-25.
 */
import React from 'react'
import './login.css'
import Modal from '../modal/modal'

class Login extends Modal {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      blog: '',
    }
  }

  subView = () => (
    <div className="login-container">
      <div>aaa</div>
    </div>
  );
}

export default Login
