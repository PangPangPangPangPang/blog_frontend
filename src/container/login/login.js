/**
 * Created by Max on 2019-03-25.
 */
import React from 'react'
import './login.css'
import Modal from '../modal/modal'
import '../../compontent/reply'
import { getStore } from '../../App'
import request from '../../action/request'
import PropTypes from 'prop-types'

class Login extends Modal {
  constructor(props) {
    super(props)
    const state = {
      name: '',
      email: '',
      blog: '',
      icon: '',
      file: null,
      dispatch: getStore().dispatch,
    }
    this.state = Object.assign({}, this.state, state)
  }

  onClickSubmit = () => {
    const {
      dispatch, name, email, blog, file,
    } = this.state
    const { onLoginSuccess, onLoginFailure } = this.props
    const form = new FormData()
    form.append('name', name)
    form.append('file', file)
    form.append('email', email)
    form.append('blog', blog)
    dispatch(request('register', form, 'post')).then((res) => {
      const { errormsg, errorcode, result } = res
      if (errorcode === 0) {
        const storage = window.localStorage
        storage.uuid = result.uuid
        if (onLoginSuccess) {
          onLoginSuccess()
        }
      } else if (onLoginFailure) {
        onLoginFailure(errormsg)
      }
    })
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

  subComponent = () => {
    const { onClickCancel } = this.props
    return (
      <div className="login-container">
        <button className="reply-button" type="button" onClick={onClickCancel}>
          close
        </button>
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
        <button
          className="reply-button"
          type="button"
          onClick={this.onClickSubmit}
        >
          Submit
        </button>
        <div className="file-box">
          <img className="login-icon" alt="" src={this.state.icon} />
          <label className="reply-button login-choose" htmlFor="upload-photo">
            选择照片
          </label>
          <input
            id="upload-photo"
            type="file"
            // name="file"
            // id="input_file"
            accept="image/jpeg,image/jpg,image/png"
            onChange={this.onGetImage}
          />
        </div>
      </div>
    )
  };
}

Login.PropTypes = {
  onLoginSuccess: PropTypes.func,
  onLoginFailure: PropTypes.func,
  onClickCancel: PropTypes.func,
}

Login.defaultProps = {
  onLoginSuccess: null,
  onLoginFailure: null,
  onClickCancel: null,
}

export default Login
