/**
 * Created by wangyefeng on 04/03/2017.
 */
import React from 'react'
import marked from 'marked'
import PropTypes from 'prop-types'
import hl from 'highlight.js'
import { connect } from 'react-redux'
import '../../../node_modules/highlight.js/styles/xcode.css'
import request from '../../action/request'
import replyComment from '../../action/replyComment'
import './article.css'
import { getStore } from '../../App'
import Loading from '../../compontent/loading'
import Footer from '../footer/footer'
import DevImage from '../../resource/jpg/splatoon.png'
import Comment from '../../compontent/comment'
import Login from '../login/login'
// import { debuglog } from 'util'

const renderer = new marked.Renderer()

marked.setOptions({
  renderer,
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: true,
  sanitize: true,
  smartLists: true,
  smartypants: true,
})

renderer.code = (code, language) => {
  const validLang = !!(language && hl.getLanguage(language))
  const highlighted = validLang ? hl.highlight(language, code).value : code
  return `<pre><code class="article-code hljs ${language}">${highlighted}</code></pre>`
}

renderer.image = (href, title, text) => {
  let size
  if (title) {
    size = title.split('x')
  }
  if (title) {
    if (size[1]) {
      size = `width=${size[0]}height=${size[1]}`
    } else {
      size = `width=${size[0]}`
    }
  } else {
    size = '100%'
  }
  // Use placeholder image in the development environment.
  let h = href
  if (process.env.NODE_ENV === 'development') {
    h = DevImage
  }

  return `<img onclick="window.open(this.src)" class="article-img" src="${h}" width="100%" height="auto" alt=${text}/>`
}

let articleObject
renderer.heading = function heading(text, level) {
  const font = 30 - level * 3
  if (level === 1) {
    // let tagStr = ''
    // for (let i = 0; i < articleObject.tags.length; i += 1) {
    // tagStr += `<div style="background-color: #D0104C;padding-left: 7px; padding-right: 7px; padding-bottom:3px; padding-top: 3px; margin-right: 10px; border-radius: 2px; color: white; font-size: 13px">
    // ${articleObject.tags[i]}
    // </div>`
    // }
    const timeStr = `<div style="background-color: #D0104C;padding-left: 7px; padding-right: 7px; padding-bottom:3px; padding-top: 3px; margin-right: 10px; border-radius: 2px; color: white; font-size: 13px">
                      ${articleObject.time}
                    </div>`
    return `<div>
              <div class="article-head" style="font-size: ${font}px;margin-bottom: 10px;margin-top: 30px;padding-bottom: 8px">
                <strong>${text}</strong>
              </div>
              <div style="margin-bottom:10px;font-weight: bold;display: flex;">
                ${timeStr}
              </div>
            </div>`
  }
  return `<div class="article-head" style="font-size: ${font}px;margin-bottom: 10px;margin-top: 30px;padding-bottom: 8px">
            <strong>${text}</strong>
          </div>`
}

renderer.strong = function strong(text) {
  return `<strong>${text}</strong>`
}

renderer.paragraph = function paragraph(text) {
  return `<div class="article-paragraph">${text}</div>`
}

renderer.list = function list(body, ordered) {
  const type = ordered ? 'decimal' : 'disc'
  return `<ul style="list-style-type: ${type}; margin-top: 0.6em; font-size: 15px; margin-bottom: 1.3em;">${body}</ul>`
}

renderer.listitem = function listitem(text) {
  return `<li style="margin-bottom: 0.3em;">${text}</li>`
}

renderer.blockquote = function em(text) {
  return `<blockquote class='article-blockquote'>${text}</blockquote>`
}

renderer.codespan = function code(text) {
  return `<code class="article-codespan">${text}</code>`
}

class Article extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
    const { dispatch, params } = this.props
    const dic = { id: params.id }
    const store = getStore()
    if (store.getState().request[params.id]) {
      return
    }
    const commentArgs = {}
    commentArgs.article_id = params.id
    dispatch(request('article', dic, 'get'))
    dispatch(request('fetchcomment', commentArgs, 'get'))
  }

  onClickReply = (args) => {
    const { dispatch } = this.props
    dispatch(replyComment(args.commentID))
  };

  onClickComfirm = (args) => {
    const { dispatch } = this.props
    console.log(args)
    // dispatch(replyComment(args))
  };

  getFooter() {
    const { displayLoading } = this.props
    if (displayLoading === 0) {
      return <Footer />
    }
    return null
  }

  getComments() {
    const { comments, commentID } = this.props
    if (comments === null || comments.length === 0) {
      return null
    }
    const ret = []
    Object.keys(comments).forEach((index) => {
      const comment = comments[index]
      const { content, name, blog } = comment
      const iconUrl = comment.icon_url
      const createDate = comment.create_date
      const currentCommentID = comment.comment_id
      ret.push(
        <Comment
          key={index}
          commentID={currentCommentID}
          content={content}
          name={name}
          iconUrl={iconUrl}
          showReply={commentID === currentCommentID}
          blog={blog}
          createDate={createDate}
          clickReply={this.onClickReply}
          clickConfirm={this.onClickComfirm}
        />,
      )
    })
    return <div className="article-page">{ret}</div>
  }

  render() {
    const { args, displayLoading, content } = this.props
    articleObject = args
    return (
      <div>
        <div className="article-page">
          <Loading show={displayLoading} />
          <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
        </div>
        {this.getComments()}
        {this.getFooter()}
        <Login />
      </div>
    )
  }
}

Article.propTypes = {
  dispatch: PropTypes.func,
  content: PropTypes.string,
  params: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  args: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  displayLoading: PropTypes.number,
  comments: PropTypes.array, // eslint-disable-line react/forbid-prop-types

  commentID: PropTypes.number,
}

Article.defaultProps = {
  dispatch: {},
  params: {},
  args: {},
  content: '',
  displayLoading: 1,
  comments: [],
  commentID: -1,
}

function mapStateToProps(state, ownProps) {
  const getShow = () => {
    const articleId = ownProps.params.id
    if (state.request[articleId]) {
      return 0
    }
    return 1
  }
  const getContent = () => {
    const articleId = ownProps.params.id
    if (state.request[articleId]) {
      return state.request[articleId].content
    }
    return ''
  }

  const getArgs = () => {
    const articleId = ownProps.params.id
    if (state.request[articleId]) {
      return state.request[articleId]
    }
    return {}
  }
  const getComments = () => {
    const articleId = ownProps.params.id
    if (state.request[articleId]) {
      return state.request[articleId].comments
    }
    return []
  }
  const getCommentID = () => {
    const { commentID } = state.reply
    if (commentID === null) {
      return -1
    }
    return commentID
  }
  return {
    content: getContent(),
    displayLoading: getShow(),
    args: getArgs(),
    comments: getComments(),
    commentID: getCommentID(),
  }
}

export default connect(mapStateToProps)(Article)
