/**
 * Created by wangyefeng on 03/03/2017.
 */
import { combineReducers } from 'redux'
import Types from '../action/type'

const user = (state = {}, action) => {
  switch (action.type) {
    case Types.UPDATE_USER_NAME:
      return Object.assign({}, state, { name: action.name })
    default:
      return state
  }
}
function handleRequestSuccess(state, action) {
  const k = action.query
  switch (k) {
    case 'list':
      const articleList = action.res
      const articles = {}
      const articleMap = {}
      articles['list'] = action.res
      for (let index in articleList) {
        let id = articleList[index].id
        articleMap[id] = articleList[index]
      }
      articles['map'] = articleMap
      return Object.assign({}, state, { articles: articles })
    case 'register':
      return Object.assign({}, state, { register: action })
    case 'article':
      if (action.res.article_id) {
        const obj = {}
        obj[action.res.article_id] = action
        return Object.assign({}, state, obj)
      }
      return state
    default:
      return Object.assign({}, state, { ret: action })
  }
}

const request = (state = {}, action) => {
  switch (action.type) {
    case Types.REQUEST_START:
      return Object.assign({}, state, { type: action.type })
    case Types.REQUEST_SUCCESS:
      return handleRequestSuccess(state, action)
    case Types.REQUEST_FAILURE:
      return state
    default:
      return state
  }
}

const reducer = combineReducers({
  user,
  request,
})
export default reducer
