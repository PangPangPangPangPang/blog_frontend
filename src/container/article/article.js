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
import './article.css'
import { getStore } from '../../App'
import Loading from '../../compontent/loading'
import Footer from '../footer/footer'
import DevImage from '../../resource/jpg/splatoon.png'


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
  const validLang = !!(language && hl.getLanguage(language));
  const highlighted = validLang ? hl.highlight(language, code).value : code;
  return `<pre><code class="article-code hljs ${language}">${highlighted}</code></pre>`;
};

renderer.image = (href, title, text) => {
	if (title) {
		var size = title.split('x');
		if (size[1]) {
			size = 'width=' + size[0] + ' height=' + size[1];
		} else {
			size = 'width=' + size[0];
		}
	} else {
		size = '100%';
	}
  // Use placeholder image in the development environment.
  if (process.env.NODE_ENV === 'development') {
    href = DevImage
  }
  return (
		`<img onclick="window.open(this.src)" class="article-img" src="${href}" width="100%" height="auto" alt=${text}/>`
	)
};

var articleObject
renderer.heading = function heading(text, level) {
  const font = 30 - (level * 3)
  if (level === 1) {
    return `<div><div class="article-head" style="font-size: ${font}px;margin-bottom: 10px;margin-top: 30px;padding-bottom: 8px"><strong>${text}</strong></div><div>${articleObject.tags}</div></div>`
  } else {
    return `<div class="article-head" style="font-size: ${font}px;margin-bottom: 10px;margin-top: 30px;padding-bottom: 8px"><strong>${text}</strong></div>`

  }
}

renderer.strong = function strong(text) {
  return `<strong>${text}</strong>`
}

renderer.paragraph = function paragraph(text) {
  return `<div class="article-paragraph">${text}</div>`
}

renderer.list = function list(body, ordered) {
  var type = ordered ? 'decimal' : 'disc'
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
  constructor(props) {
    super(props)
    this.state = { content: '' }
  }
  componentDidMount() {
    window.scrollTo(0, 0)
    const { dispatch } = this.props
    const dic = { id: this.props.params.id }
    const store = getStore()
    if (store.getState().request[this.props.params.id]) {
      return
    }
    dispatch(request('article', dic, 'get'))
  }
  getFooter() {
    if (this.props.displayLoading === 0) {
      return (
        <Footer />
      )
    }
    return null
  }
  render() {
    articleObject = this.props.args
    console.log(this.props.args)
    return (
      <div>
        <div className="article-page">
          <Loading show={this.props.displayLoading} />
          <div
            dangerouslySetInnerHTML={{ __html: marked(this.props.content) }} />
        </div>
        {this.getFooter()}
      </div>
    )
  }
}

Article.propTypes = {
  dispatch: PropTypes.func,
  params: PropTypes.object,
  args: PropTypes.object,
  content: PropTypes.string,
  displayLoading: PropTypes.number,
}

Article.defaultProps = {
  dispatch: {},
  params: {},
  args: {},
  content: { res: { content: '' } },
  displayLoading: 1,
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
    if (state.request.articles) {
      return state.request.articles['map'][articleId]
    }
    return ''
  }
  return {
    content: getContent(),
    displayLoading: getShow(),
    args: getArgs(),
  }
}

export default connect(mapStateToProps)(Article)
