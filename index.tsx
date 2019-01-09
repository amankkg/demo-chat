import * as React from 'react'
import {render} from 'react-dom'

import {App} from './src/App'

const element = document.getElementById('root')

if (element) {
  render(<App />, element)
}
