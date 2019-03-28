/**
 * Created by Max on 2019-03-26.
 */

import Types from './type'

export default function replyComment(text) {
  return {
    type: Types.REPLY_COMMENT,
    commentID: text,
  }
}
