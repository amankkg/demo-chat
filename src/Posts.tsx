import * as React from 'react'
import {Connect, connect} from './overmind'

class Posts extends React.Component<Connect> {
  componentDidMount() {
    const {overmind} = this.props

    overmind.actions.loadPosts()
  }

  render() {
    const {overmind} = this.props

    if (overmind.state.isLoadingPosts) return <h4>Loading posts...</h4>

    return (
      <ul>
        {overmind.state.posts.map(p => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    )
  }
}

const ConnectedPosts = connect(Posts)

export {ConnectedPosts}
