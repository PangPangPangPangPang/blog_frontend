/**
 * Created by Max on 2019-03-25.
 */
import React from 'react'
import './modal.css'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types'

class Modal extends React.Component {
  componentDidMount() {
    const { show } = this.props
    if (show) {
      document.body.style.position = 'fixed'
      document.body.style.top = '-0px'
    }
  }

  componentWillUnmount() {
    document.body.style.position = ''
    document.body.style.top = ''
  }

  subComponent = () => null;

  onClickSubmit = () => {
    const { clickSubmit } = this.props
    clickSubmit()
  };

  onClickCancel = () => {
    const { clickCancel } = this.props
    clickCancel()
  };

  render() {
    const { show } = this.props
    console.log(show)
    if (!show) {
      return null
    }
    // 该方法可以指定父组件
    return ReactDom.createPortal(
      <div className="modal">
        <div className="modal-container">{this.subComponent()}</div>
      </div>,
      document.body,
    )
  }
}

Modal.propTypes = {
  show: PropTypes.bool,
  clickSubmit: PropTypes.func,
  clickCancel: PropTypes.func,
}

Modal.defaultProps = {
  show: false,
  clickSubmit: null,
  clickCancel: null,
}

export default Modal
