/**
 * Created by wangyefeng on 2017-04-25 13:32
 */

import React from 'react'
import './footer.css'
import PropTypes from 'prop-types'
import weiboImg from '../../img/weiboImg'
import githubImg from '../../img/githubImg'



const Footer = (props) => {
  const Weibo = weiboImg
  const Github = githubImg
  const getClazzName = () => {
    if (props.color === 'white') {
      return 'footer-white'
    }
    return 'footer-body'
  }
  const getIconClazz = () => {
    if (props.color === 'white') {
      return 'footer-icon-black'
    }
    return 'footer-icon-white'
  }
  const clickWeibo = () => {
    window.location.href = 'http://weibo.com/mmmmmmaxx'
  }
  const clickGithub = () => {
    window.location.href = 'http://www.github.com/PangPangPangPangPang'
  }

  return (
    <div className={getClazzName()}>
      <div>
        Powered by Max.
      </div>
      <div className="footer-icons">
        <Weibo className={getIconClazz()} onClick={clickWeibo} />
        <Github className={getIconClazz()} onClick={clickGithub} />
      </div>
    </div>
  )
}

Footer.propTypes = {
  color: PropTypes.string,
}
Footer.defaultProps = {
  color: 'black',
}

export default Footer
