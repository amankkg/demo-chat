import * as React from 'react'
import {Form} from 'semantic-ui-react'
import {compose} from 'fp-ts/lib/function'

import {Connect, connect} from '../overmind'
import {onSubmit, getValue} from '../utils'

const initValue = ''

const NewMessage: React.FunctionComponent<Connect> = ({overmind}) => {
  const [value, setValue] = React.useState(initValue)
  const color = value ? 'blue' : undefined
  const change = compose(
    setValue,
    getValue,
  )
  const submit = compose(
    () => setValue(initValue),
    () => overmind.actions.sendMessage(value),
    onSubmit,
  )

  return (
    <Form onSubmit={submit}>
      <Form.Input
        placeholder='Say something...'
        value={value}
        onChange={change}
        action={{type: 'submit', icon: 'send', color}}
      />
    </Form>
  )
}

const ConnectedNewMessage = connect(NewMessage)

export {ConnectedNewMessage}
