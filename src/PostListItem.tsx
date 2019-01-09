import * as React from 'react'

import {Post} from './state'

type T = React.SFC<Post>

const PostListItem: T = ({title, userId}) => (
  <li>
    #{userId}: <i>{title}</i>
  </li>
)

export {PostListItem}
