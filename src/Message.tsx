import * as React from 'react'
import {Comment} from 'semantic-ui-react'
import {formatDistance} from 'date-fns'
import styled from '@emotion/styled'

import {Msg, User} from './state'

const Message: React.SFC<{message: Msg; sender: User; ownership: boolean}> = ({
  message,
  sender,
  ownership,
}) => (
  <Comment as={ownership ? MyComment : 'div'}>
    <Comment.Avatar as={Avatar} src={sender.avatar} />
    <Comment.Content>
      <Comment.Metadata>
        <strong>{sender.name}</strong>{' '}
        <small>{formatDistance(message.created, new Date())} ago</small>
      </Comment.Metadata>
      <Comment.Text>
        <P>{message.content}</P>
      </Comment.Text>
    </Comment.Content>
    <Comment.Actions>
      <Comment.Action>Edit</Comment.Action>
    </Comment.Actions>
  </Comment>
)

const MyComment = styled.div`
  background: #e0d0b8;
  transform: scale(-1, 1);
  text-align: right;
  & > * {
    transform: scale(-1, 1);
  }
`

const Avatar = styled.image`
  max-width: 50px;
  max-height: 40px;
  border: 1px solid lightgray;
`

const P = styled.p`
  padding-left: 5px;
  padding-right: 5px;
`

export {Message}
