import * as React from 'react'
import {Comment, Header} from 'semantic-ui-react'
import styled from '@emotion/styled'

import {Connect, connect} from './overmind'
import {Message} from './Message'

const Chat: React.FunctionComponent<Connect> = ({overmind}) => {
  React.useEffect(() => {
    overmind.actions.loadMessages()
  }, [])

  if (overmind.state.isLoadingMessages) return <h4>Loading messages...</h4>

  return (
    <Comment.Group as={RoseDiv}>
      <Header as='h3' dividing>
        Chat
      </Header>
      {overmind.state.messages.map(msg => {
        const isOwner = msg.userId === overmind.state.currentUser
        const sender = overmind.state.users.find(u => u.id === msg.userId)
        if (sender === undefined) throw new Error('sender of message not found')

        return (
          <Message
            key={msg.id}
            message={msg}
            sender={sender}
            ownership={isOwner}
          />
        )
      })}
    </Comment.Group>
  )
}

const RoseDiv = styled.div`
  min-width: 500px;
  background-color: #fffbf5;
  padding: 5px;
`

const ConnectedChat = connect(Chat)

export {ConnectedChat}
