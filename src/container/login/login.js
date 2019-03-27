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
      icon: '',
      file: null,
    }
  }

  onClickSubmit = () => {
    const { clickConfirm } = this.props
    if (clickConfirm) {
      clickConfirm(this.state)
    }
  };

  onGetImage = (e) => {
    const file = e.target.files[0]
    if (file === null) {
      return
    }
    const { type } = file
    if (/^image\/\S+$/.test(type)) {
      const src = URL.createObjectURL(file)
      this.setState({
        icon: src,
        file,
      })
    }
  };

  changeName = (e) => {
    this.setState({
      name: e.target.value,
    })
  };

  changeEmail = (e) => {
    this.setState({
      email: e.target.value,
    })
  };

  changeBlog = (e) => {
    this.setState({
      blog: e.target.value,
    })
  };

  subComponent = () => (
    <div className="login-container">
      <label className="login-label" htmlFor="register">
        Name:
        <input
          value={this.state.name}
          type="text"
          name="name"
          onChange={this.changeName}
        />
        email:
        <input
          value={this.state.email}
          type="text"
          name="name"
          onChange={this.changeEmail}
        />
        blog:
        <input
          value={this.state.blog}
          type="text"
          name="name"
          onChange={this.changeBlog}
        />
      </label>
      <button type="button" onClick={this.onClickSubmit}>
        Submit
      </button>
      <div className="file-box">
        <img className="login-icon" alt="" src={this.state.icon} />
        <input
          type="file"
          name="file"
          id="input_file"
          accept="image/jpeg,image/jpg,image/png"
          onChange={this.onGetImage}
        />
      </div>
    </div>
  );
}

export default Login
