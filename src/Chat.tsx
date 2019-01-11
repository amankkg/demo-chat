import * as React from 'react'
import {Comment, Header} from 'semantic-ui-react'
import styled from '@emotion/styled'

import {Connect, connect} from './overmind'
import {Message} from './Message'
import {findFirst} from 'fp-ts/lib/Array'

const Chat: React.FunctionComponent<Connect> = ({overmind}) => {
  const {
    actions: {loadData},
    state: {isLoadingMessages, currentUser, messages, users},
  } = overmind

  React.useEffect(() => {
    loadData('1') // id of a user
  }, [])

  if (isLoadingMessages) return <h4>Loading messages...</h4>

  return (
    <Comment.Group as={RoseDiv}>
      <Header as='h3' dividing>
        Chat
      </Header>
      {messages.map(msg => {
        const isOwner = msg.userId === currentUser
        const sender = findFirst(users, u => msg.userId === u.id).getOrElse({
          name: 'unknown',
          id: 'unknown',
          avatar: 'unknown',
        })

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
  padding: 5px;
`

const ConnectedChat = connect(Chat)

export {ConnectedChat}
