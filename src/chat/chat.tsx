import * as React from 'react'
import {Comment, Header} from 'semantic-ui-react'
import styled from '@emotion/styled'
import {findFirst} from 'fp-ts/lib/Array'

import {Connect, connect} from '../overmind'
import {Message} from './message'
import {UnknownUser} from './unknown-user'
import {ConnectedNewMessage} from './new-message'

type TProps = Connect & {userId: string}

const Chat: React.FunctionComponent<TProps> = ({overmind, userId}) => {
  const {
    actions: {loadData},
    state: {isLoadingChat: isLoadingMessages, currentUser, messages, users},
  } = overmind

  React.useEffect(() => {
    loadData(userId) // id of a user
  }, [])

  if (isLoadingMessages) return <h4>Loading messages...</h4>

  return (
    <Root>
      <Comment.Group as={RoseDiv}>
        <Header as='h3' dividing>
          Chat
        </Header>
        {messages.map(msg => {
          const isOwner = msg.userId === currentUser
          const sender = findFirst(users, u => msg.userId === u.id).getOrElse(
            UnknownUser,
          )

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
      <ConnectedNewMessage />
    </Root>
  )
}

const RoseDiv = styled.div`
  min-width: 500px;
  padding: 5px;
`

const Root = styled.div`
  display: flex;
  flex-direction: column;
`

const ConnectedChat = connect(Chat)

export {ConnectedChat}
