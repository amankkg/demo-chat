import {Overmind, TConfig} from 'overmind'
import {TConnect, createConnect} from 'overmind-react'

import {state} from './state'

import * as rootActions from './actions'
import * as chatActions from './chat/actions'
import * as playerActions from './player/actions'

import * as effects from './effects'

const actions = {
  ...rootActions,
  ...chatActions,
  ...playerActions,
}

const config = {state, actions, effects}

declare module 'overmind' {
  interface IConfig extends TConfig<typeof config> {}
}

export type Connect = TConnect<typeof config>

export const overmind = new Overmind(config)

export const connect = createConnect(overmind)
