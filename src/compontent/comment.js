/**
 * Created by Max on 2019-03-25.
 */
import React from 'react'
import './comment.css'
import PropTypes from 'prop-types'

class Comment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      replyValue: '',
    }
  }

  clickIconUrl = () => {
    const { blog } = this.props
    if (blog === null || blog.length === 0) {
      return
    }
    window.location.href = blog
  };

  onClickReply = () => {
    const { clickReply } = this.props
    if (clickReply === null) {
      return
    }
    clickReply(this.props)
  };

  onClickComfirm = () => {
    const { clickConfirm } = this.props
    if (clickConfirm === null) {
      return
    }
    const { replyValue } = this.state
    const args = Object.assign({}, this.props, {
      reply: replyValue,
    })
    clickConfirm(args)
  };

  handleChange = (event) => {
    this.setState({
      replyValue: event.target.value,
    })
  };

  replyView = () => {
    const { showReply } = this.props
    if (!showReply) {
      return (
        <button onClick={this.onClickReply} type="button">
          reply
        </button>
      )
    }
    return (
      <div>
        <textarea
          placeholder="随便说点什么..."
          maxLength="100"
          rows="5"
          cols="100"
          value={this.state.replyValue}
          onChange={this.handleChange}
        />
        <button onClick={this.onClickComfirm} type="button">
          confirm
        </button>
      </div>
    )
  };

  render() {
    const {
      iconUrl, name, createDate, content,
    } = this.props
    return (
      <div className="comment-container">
        <div className="comment-info">
          <div
            className="comment-icon"
            onClick={this.clickIconUrl}
            role="presentation"
          >
            <img className="comment-img" src={iconUrl} alt="" />
          </div>
          <div className="comment-name">{name}</div>
          <div className="comment-date">{createDate}</div>
        </div>
        <div className="comment-content">{content}</div>
        {this.replyView()}
        <div />
      </div>
    )
  }
}

Comment.propTypes = {
  iconUrl: PropTypes.string,
  name: PropTypes.string,
  blog: PropTypes.string,
  content: PropTypes.string,
  createDate: PropTypes.string,
  clickReply: PropTypes.func,
  clickConfirm: PropTypes.func,
  showReply: PropTypes.bool,
  // commentID: PropTypes.number,
}

Comment.defaultProps = {
  iconUrl: '',
  name: '',
  blog: '',
  content: '',
  createDate: '',
  clickReply: null,
  clickConfirm: null,
  showReply: false,
  // commentID: -1,
}

export default Comment
