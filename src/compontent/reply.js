/**
 * Created by Max on 2019-03-25.
 */
import React from 'react'
import PropTypes from 'prop-types'

const Reply = (props) => {
  const {
    iconUrl, name, blog, content,
  } = props
  return (
    <div>
      <textarea cols="30" rows="10">
        input content
      </textarea>
    </div>
  )
}

Reply.propTypes = {
  iconUrl: PropTypes.string,
  name: PropTypes.string,
  blog: PropTypes.string,
  content: PropTypes.string,
}

Reply.defaultProps = {
  iconUrl: '',
  name: '',
  blog: '',
  content: '',
}

export default Reply
