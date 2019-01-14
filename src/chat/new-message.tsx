import * as React from 'react'
import {Form} from 'semantic-ui-react'

import {Connect, connect} from '../overmind'

const initValue = ''

const NewMessage: React.FunctionComponent<Connect> = ({overmind}) => {
  const [value, setValue] = React.useState(initValue)
  const color = value ? 'blue' : undefined
  const submit = () => {
    overmind.actions.sendMessage(value)
    setValue(initValue)
  }

  return (
    <Form onSubmit={e => (e.preventDefault(), submit())}>
      <Form.Input
        placeholder='Say something...'
        value={value}
        onChange={e => setValue(e.target.value)}
        action={{type: 'submit', icon: 'send', color}}
      />
    </Form>
  )
}

const ConnectedNewMessage = connect(NewMessage)

export {ConnectedNewMessage}
