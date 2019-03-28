/**
 * Created by Max on 03/03/2017.
 */

import Types from './type'

export default function updateUserName(text) {
  return {
    type: Types.UPDATE_USER_NAME,
    name: text,
  }
}
