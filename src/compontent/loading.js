/**
 * Created by wangyefeng on 2017-04-14 16:55
 */

import React from 'react' // eslint-disable-line no-unused-vars
import './loading.css'
import PropTypes from 'prop-types'

class Loading extends React.Component {
  getHiddenStatus = (status) => {
    if (status === 1) {
      return 'sk-cube-grid'
    }
    return 'sk-cube-grid-hide'
  }

  render() {
    return (
      <div className={this.getHiddenStatus(this.props.show)}>
        <div className="sk-cube sk-cube1" />
        <div className="sk-cube sk-cube2" />
        <div className="sk-cube sk-cube3" />
        <div className="sk-cube sk-cube4" />
        <div className="sk-cube sk-cube5" />
        <div className="sk-cube sk-cube6" />
        <div className="sk-cube sk-cube7" />
        <div className="sk-cube sk-cube8" />
        <div className="sk-cube sk-cube9" />
      </div>
    )
  }
}

Loading.propTypes = {
  show: PropTypes.number,
}
Loading.defaultProps = {
  show: 1,
}

export default Loading
