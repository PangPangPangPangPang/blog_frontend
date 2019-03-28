/**
 * Created by Max on 05/03/2017.
 */
import React from 'react'
import { connect } from 'react-redux'
import './tag.css'
import Footer from '../footer/footer'

const tagWindowStyle = {
  height: `${window.innerHeight - 70}px`,
}

const Tag = () => {
  window.scrollTo(0, 0)
  return (
    <div className="tag-base" style={tagWindowStyle}>
      <div className="tag-header">2019のFlag</div>
      <ul>
        <li className="tag-item">体脂18（目前24）</li>
        <li className="tag-item">leetCode刷完简单以及一半中等</li>
        <li className="tag-item">野吹全神庙</li>
      </ul>
      <div className="tag-header">2018のFlag</div>
      <ul>
        <li className="tag-item">荒废的一年</li>
      </ul>
      <div className="tag-footer">
        <Footer />
      </div>
    </div>
  )
}

export default connect()(Tag)
