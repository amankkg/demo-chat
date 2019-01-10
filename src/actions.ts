import {Action} from 'overmind'

export const loadMessages: Action = async ({state, backendService}) => {
  state.isLoadingMessages = true

  state.users = await backendService.getUsers()

  if (state.users.length > 0) state.currentUser = state.users[1].id
  else state.currentUser = undefined

  state.messages = await backendService.getMessages()

  if (state.messages.length > 0)
    state.playerMessage = state.messages[state.messages.length - 1].id
  else state.playerMessage = undefined

  state.isLoadingMessages = false
}
