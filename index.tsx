import * as React from 'react'
import {render} from 'react-dom'
import styled from '@emotion/styled'

import {ConnectedChat} from './src/components/chat'
import {Player} from './src/components/player'

const Index = () => (
  <Layout>
    <ConnectedChat userId='1' />
    <Player />
  </Layout>
)

const Layout = styled.div`
  display: flex;
  justify-content: space-around;
`

const element = document.getElementById('root')

if (element) render(<Index />, element)
