import * as React from 'react'
import styled from '@emotion/styled'

import {ConnectedChat} from './Chat'
import {Player} from './Player'

const App = () => (
  <Layout>
    <ConnectedChat />
    <Player />
  </Layout>
)

const Layout = styled.div`
  display: flex;
  justify-content: space-around;
`

export {App}
