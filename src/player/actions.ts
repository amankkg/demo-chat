import {Action} from 'overmind'

export const selectMessage: Action<string> = ({value: msgId, state}) => {
  state.playerMessage = msgId
}

export const resetPlayer: Action = ({state}) => {
  state.playerMessage = undefined
}
