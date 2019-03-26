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
    case 'list': {
      const articleList = JSON.parse(action.res.result)
      const articles = {}
      const articleMap = {}
      articles.list = articleList
      Object.keys(articleList).forEach((index) => {
        const { id } = articleList[index]
        articleMap[id] = articleList[index]
      })
      articles.map = articleMap
      return Object.assign({}, state, { articles })
    }
    case 'register':
      return Object.assign({}, state, { register: action })
    case 'article': {
      const article = JSON.parse(action.res.result)
      if (article.id) {
        const origin = state[article.id] ? state[article.id] : {}
        const combine = Object.assign({}, article, origin)
        const obj = {}
        obj[article.id] = combine

        return Object.assign({}, state, obj)
      }
      return state
    }
    case 'fetchcomment': {
      const { comments } = action.res.result
      const articleId = action.res.result.article_id
      if (articleId) {
        const article = state[articleId] ? state[articleId] : {}
        const combine = Object.assign({}, article, { comments })
        const obj = {}
        obj[articleId] = combine
        return Object.assign({}, state, obj)
      }
      return state
    }
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

const reply = (state = {}, action) => {
  switch (action.type) {
    case Types.REPLY_COMMENT: {
      return Object.assign({}, state, { commentID: action.commentID })
    }
    default:
      return state
  }
}

const reducer = combineReducers({
  user,
  request,
  reply,
})
export default reducer
