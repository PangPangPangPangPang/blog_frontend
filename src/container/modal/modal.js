/**
 * Created by Max on 2019-03-25.
 */
import React from 'react'
import './modal.css'
import ReactDom from 'react-dom'

class Modal extends React.Component {
  render() {
    document.body.style.position = 'fixed'
    document.body.style.top = '-0px'
    document.body.style.position = ''
    document.body.style.top = ''
    // 该方法可以指定父组件
    return ReactDom.createPortal(
      <div className="modal">
        <div className="modal-container" />
      </div>,
      document.body,
    )
  }
}

export default Modal
