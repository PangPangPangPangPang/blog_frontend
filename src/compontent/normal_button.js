/**
 * Created by wangyefeng on 2017-03-31 16:57
 */

import React from 'react'
import './normal_button.css'
import PropTypes from 'prop-types'

const homeImg = require('../resource/svg/home.svg')
const pushpinImg = require('../resource/svg/paper-plane-1.svg')
const articleImg = require('../resource/svg/notebook-1.svg')
const aboutImg = require('../resource/svg/user-6.svg')
const defaultImg = require('../resource/svg/home.svg')
const weiboImg = require('../resource/svg/weibo.svg')
const githubImg = require('../resource/svg/github.svg')


class NormalButton extends React.Component {

  static propTypes = {
    // default button event handler
    handleClick: PropTypes.func,
    // // default button image
    img: PropTypes.string,
    // // defalut button content
    title: PropTypes.string,
  }
  static defaultProps = {
    handleClick: () => {},
    img: '',
    title: '',
  }

  constructor(props) {
    super(props)
    this.state = {
      backgroundColor: '',
      fontColor: '',
      imgColor: '',
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', this.scrollEvent, false)
  }

  getImg = () => {
    let Img = null
    switch (this.props.img) {
      case 'home': {
        Img = homeImg
        break
      }
      case 'tag': {
        Img = pushpinImg
        break
      }
      case 'article': {
        Img = articleImg
        break
      }
      case 'about': {
        Img = aboutImg
        break
      }
      case 'github': {
        Img = githubImg
        break
      }
      case 'weibo': {
        Img = weiboImg
        break
      }
      default: {
        Img = defaultImg
        break
      }
    }
    return (
      <img className={`normal-button-image ${this.state.imgColor}`} src={Img} />
    )
  }

  scrollEvent = () => {
    if (document.documentElement.scrollTop > 90) {
      this.setState({
        backgroundColor: 'normal-button-animation',
        fontColor: 'normal-button-title-animation',
        imgColor: 'normal-button-image-animation',
      })
    } else if (document.documentElement.scrollTop < 70) {
      this.setState({
        backgroundColor: 'normal-button-animation-back',
        fontColor: 'normal-button-title-animation-back',
        imgColor: 'normal-button-image-animation-back',
      })
    }
  }

  render() {
    return (
      <button className={`normal-button ${this.state.backgroundColor}`} onClick={this.props.handleClick}>
        {this.getImg()}
        <div className={`normal-button-title ${this.state.fontColor}`}>{this.props.title}</div>
      </button>
    )
  }
}
export default NormalButton
