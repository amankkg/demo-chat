import * as React from 'react'

import {Connect, connect} from './overmind'
import {PostListItem} from './PostListItem'

const Posts: React.FunctionComponent<Connect> = ({overmind}) => {
  React.useEffect(() => {
    overmind.actions.loadPosts(20)
  }, [])

  if (overmind.state.isLoadingPosts) return <h4>Loading posts...</h4>

  return (
    <ul>
      {overmind.state.posts.map(p => (
        <PostListItem key={p.id} {...p} />
      ))}
    </ul>
  )
}

const ConnectedPosts = connect(Posts)

export {ConnectedPosts}
