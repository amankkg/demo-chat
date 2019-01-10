import * as React from 'react'
import {Comment, Header} from 'semantic-ui-react'

import {Connect, connect} from './overmind'
import {Message} from './Message'

const Chat: React.FunctionComponent<Connect> = ({overmind}) => {
  React.useEffect(() => {
    overmind.actions.loadMessages()
  }, [])

  if (overmind.state.isLoadingMessages) return <h4>Loading messages...</h4>

  return (
    <Comment.Group>
      <Header as='h3' dividing>
        Chat
      </Header>
      {overmind.state.messages.map(p => (
        <Message key={p.id} {...p} />
      ))}
    </Comment.Group>
  )
}

const ConnectedChat = connect(Chat)

export {ConnectedChat}
