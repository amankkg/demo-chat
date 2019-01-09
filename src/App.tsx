import * as React from 'react'
import {compose} from 'fp-ts/lib/function'

export function App() {
  const [value, setValue] = React.useState('helloz!')

  React.useEffect(greet, [])

  const onChange = compose(
    setValue,
    getInputValue,
  )

  return <input onChange={onChange} value={value} />
}

function greet() {
  alert('hey!')
}

function getInputValue(e: React.ChangeEvent<HTMLInputElement>) {
  return e.target.value
}
