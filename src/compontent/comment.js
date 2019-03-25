/**
 * Created by Max on 2019-03-25.
 */
import React from 'react'
import './comment.css'
import PropTypes from 'prop-types'

const Comment = (props) => {
  const {
    iconUrl, name, uuid, content, blog, createDate,
  } = props
  const clickIconUrl = () => {
    window.location.href = blog
  }
  return (
    <div>
      <div className="comment-info">
        <img className="comment-icon" onClick={clickIconUrl} src={iconUrl} />
        <div className="comment-name">{name}</div>
        <div>{createDate}</div>
      </div>
      <div className="comment-content">{content}</div>
      <div />
    </div>
  )
}

Comment.propTypes = {
  iconUrl: PropTypes.string,
  name: PropTypes.string,
  uuid: PropTypes.string,
  blog: PropTypes.string,
  content: PropTypes.string,
  createDate: PropTypes.string,
}

Comment.defaultProps = {
  iconUrl: '',
  name: '',
  uuid: '',
  blog: '',
  content: '',
  createDate: '',
}

export default Comment
