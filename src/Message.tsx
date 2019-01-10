import * as React from 'react'
import {Comment} from 'semantic-ui-react'
import {formatDistance} from 'date-fns'
import styled from '@emotion/styled'

import {Msg} from './state'

const Message: React.SFC<Msg> = ({content, userId, created}) => (
  <Comment>
    <Comment.Avatar
      as={Avatar}
      src='https://api.adorable.io/avatars/50/abott@adorable.png'
    />
    <Comment.Content>
      <Comment.Author>{userId}</Comment.Author>
      <Comment.Metadata>
        <small>{formatDistance(created, new Date())} ago</small>
      </Comment.Metadata>
      <Comment.Text>
        <p>{content}</p>
      </Comment.Text>
    </Comment.Content>
    <Comment.Actions>
      <Comment.Action>Edit</Comment.Action>
    </Comment.Actions>
  </Comment>
)

const Avatar = styled.image`
  max-width: 50px;
  max-height: 40px;
  border: 1px solid lightgray;
`

export {Message}
