/**
 * Created by Max on 2019-03-25.
 */
import React from 'react'
import './comment.css'
import PropTypes from 'prop-types'
import { getbaseUrl } from '../action/request'
import Reply from './reply'
import './reply.css'

class Comment extends React.Component {
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

  replyView = () => {
    const { showReply, commentId, clickConfirm } = this.props
    if (!showReply) {
      return (
        <button
          className="reply-button"
          onClick={this.onClickReply}
          type="button"
        >
          回复
        </button>
      )
    }
    return <Reply clickConfirm={clickConfirm} commentId={commentId} />
  };

  render() {
    const {
      iconUrl,
      name,
      createDate,
      content,
      subcomponent,
      marginLeft,
    } = this.props
    return (
      <div className="comment-container" style={{ marginLeft }}>
        <div>
          <div className="comment-info">
            <div
              className="comment-icon"
              onClick={this.clickIconUrl}
              role="presentation"
            >
              <img
                className="comment-img"
                src={`${getbaseUrl()}avatar/${iconUrl}`}
                alt=""
              />
            </div>
            <div className="comment-name">{name}</div>
            <div className="comment-date">{createDate}</div>
          </div>
          <div className="comment-content">{content}</div>
          {this.replyView()}
          <div />
        </div>
        {subcomponent}
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
  commentId: PropTypes.number,
  subcomponent: PropTypes.array,
  marginLeft: PropTypes.string,
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
  commentId: -1,
  subcomponent: [],
  marginLeft: '0px',
}

export default Comment
