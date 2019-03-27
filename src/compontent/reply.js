/**
 * Created by Max on 2019-03-25.
 */
import React from 'react'
import PropTypes from 'prop-types'

class Reply extends React.Component {
  constructor() {
    super()
    this.state = {
      replyValue: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      replyValue: e.target.value,
    })
  };

  onClickConfirm = () => {
    const { clickConfirm, commentId } = this.props
    const { replyValue } = this.state
    if (clickConfirm === undefined) {
      return
    }
    clickConfirm({
      commentId,
      reply: replyValue,
    })
  };

  render() {
    const { replyValue } = this.state
    return (
      <div>
        <textarea
          placeholder="随便说点什么..."
          maxLength="100"
          rows="5"
          cols="100"
          value={replyValue}
          onChange={this.handleChange}
        />
        <button onClick={this.onClickConfirm} type="button">
          confirm
        </button>
      </div>
    )
  }
}

Reply.propTypes = {
  clickConfirm: PropTypes.func,
  commentId: PropTypes.number,
}

Reply.defaultProps = {
  clickConfirm: null,
  commentId: -1,
}

export default Reply
