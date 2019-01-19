/**
 * Created by wangyefeng on 02/03/2017.
 */
// navigator height 48px

import React from 'react'
import { hashHistory } from 'react-router'
import { connect } from 'react-redux'
import Header from '../container/navigator/header'
import './navigator/header.css'
import PropTypes from 'prop-types'


class Navigator extends React.Component {
  static protoTypes = {
    children: PropTypes.Object,
  }
  static defaultProps = {
    children: {},
  }
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    switch (e.key) {
      case 'smile':
        hashHistory.push('about')
        break
      case 'home':
        hashHistory.push('home')
        break
      case 'article':
        hashHistory.push('list')
        break
      case 'tag':
        hashHistory.push('tag')
        break
      default:
        break
    }
    this.setState({
      current: e.key,
    })
  }
  render() {
    return (
      <div>
        <Header />
        <div className="header-placeholder" />
        {this.props.children}
      </div>
    )
  }
}

// function mapStateToProps(state) {
  // return {
    // value: state.count
  // }
// }

// Map Redux actions to component props
// function mapDispatchToProps(dispatch) {
  // return {
    // onIncreaseClick: () => dispatch(increaseAction)
  // }
// }

export default connect()(Navigator)
