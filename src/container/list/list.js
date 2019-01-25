/**
 * Created by wangyefeng on 03/03/2017.
 */
import React from 'react'
import { connect } from 'react-redux'
import './list.css'
import Summary from '../../compontent/summary'
import request from '../../action/request'
import { getStore } from '../../App'
import Loading from '../../compontent/loading'
import Footer from '../footer/footer'
import '../footer/footer.css'
import PropTypes from 'prop-types'

class List extends React.Component {
  static propTypes = {
    displayLoading: PropTypes.number,
    dispatch: PropTypes.func,
    list: PropTypes.array,
  }
  static defaultProps = {
    displayLoading: 1,
    dispatch: {},
    list: [],
  }
  constructor(props) {
    super(props)
    this.state = {
      content: getStore().getState().request.list || {},
    }
  }
  componentDidMount() {
    const { dispatch } = this.props
    const state = getStore().getState()
    if (!state.request.list) {
      dispatch(request('list'))
    }
  }
  getlist = () => {
    const list = []
    const sourceList = this.props.list || []
    if (sourceList instanceof Array) {
      for (let i = 0; i < sourceList.length; i += 1) {
        list.push(<Summary
          key={i}
          tags={sourceList[i].tags}
          name={sourceList[i].title}
          id={sourceList[i].id}
          time={sourceList[i].time}
        />)
      }
      if (sourceList.length) {
        list.push(<Footer key={1000} />)
      }
    }
    return list
  }
  render() {
    return (
      <div className="list-template">
        {this.getlist()}
        <Loading show={this.props.displayLoading} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const getShow = () => {
    if (state.request.articles) {
      return 0
    }
    return 1
  }

  const getList = () => {
    if (state.request.articles) {
      return state.request.articles.list
    }
    return []

  }
  return {
    list: getList(),
    displayLoading: getShow(),
  }
}

export default connect(mapStateToProps)(List)
