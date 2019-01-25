/**
 * Created by wangyefeng on 2017-03-31 11:26
 */
import React from 'react'
import { hashHistory } from 'react-router'
import './header.css'
import NormalButton from '../../compontent/normal_button'
import Logo from '../../img/logo.js'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      backgroundColor: '',
      iconColor: '',
    }
  }
  componentDidMount() {
    document.addEventListener('scroll', this.scrollEvent, false)
  }
  scrollEvent = () => {
    if (document.documentElement.scrollTop > 90) {
      this.setState({
        backgroundColor: 'header-animation',
        iconColor: 'header-default-icon-animation',
      })
    } else if (document.documentElement.scrollTop < 70) {
      this.setState({
        backgroundColor: 'header-animation-back',
        iconColor: 'header-default-icon-animation-back',
      })
    }
  }

  clickHome = () => {
    hashHistory.push('home')
  }
  clickArticle = () => {
    hashHistory.push('list')
  }
  clickTags = () => {
    hashHistory.push('tag')
  }
  clickAbout = () => {
    hashHistory.push('about')
  }
  render() {
    return (
      <div className="header-base">
        <div className={`header-default ${this.state.backgroundColor}`} >
          <NormalButton title="首页" img={'home'} handleClick={this.clickHome} />
          <NormalButton title="文章" img={'article'} handleClick={this.clickArticle} />
          <NormalButton title="标签" img={'tag'} handleClick={this.clickTags} />
          <NormalButton title="关于" img={'about'} handleClick={this.clickAbout} />
          <Logo className={`header-default-icon ${this.state.iconColor}`} />
        </div>

      </div>
    )
  }
}

export default Header
