import * as React from 'react'
import {compose} from 'fp-ts/lib/function'
import {Lens} from 'monocle-ts'

import {ConnectedPosts} from './Posts'

const App = () => {
  const [value, setValue] = React.useState('helloz!')

  React.useEffect(greet, [])

  const onChange = compose(
    setValue,
    inputValue.get,
  )

  return (
    <>
      <input onChange={onChange} value={value} />
      <ConnectedPosts />
    </>
  )
}

type OnChange = React.ChangeEvent<HTMLInputElement>

const inputValue = Lens.fromPath<OnChange>()(['target', 'value'])

function greet() {
  console.log('hey!')
}

export {App}
