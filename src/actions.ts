import {Action} from 'overmind'

export const loadMessages: Action = async ({state, backendService}) => {
  state.isLoadingMessages = true

  state.messages = await backendService.getMessages()

  state.isLoadingMessages = false

  const count = state.messages.length

  if (count > 0) state.currentMessage = state.messages[count - 1].id
  else state.currentMessage = undefined
}
