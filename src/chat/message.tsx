import * as React from 'react'
import {Comment} from 'semantic-ui-react'
import {formatDistance} from 'date-fns'
import styled from '@emotion/styled'

import {Msg, User} from '../state'

type TProps = {
  message: Msg
  sender: User
  ownership: boolean
}

const Message: React.SFC<TProps> = ({message, sender, ownership}) => (
  <Comment as={ownership ? MyComment : OthersComment}>
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
  transform: scale(-1, 1);
  text-align: right;
  & > * {
    transform: scale(-1, 1);
  }
  & > div.content > div.text {
    background-color: #e0d0b8;
  }
`

const OthersComment = styled.div`
  & > div.content > div.text {
    background-color: #fffbf5;
  }
`

const Avatar = styled.image`
  max-width: 50px;
  max-height: 40px;
`

const P = styled.p`
  padding-left: 5px;
  padding-right: 5px;
`

export {Message}
