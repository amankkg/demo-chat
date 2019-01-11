import {Action} from 'overmind'
import {findFirst, last} from 'fp-ts/lib/Array'

export const loadMessages: Action<string> = async ({
  value: userId,
  state,
  backendService,
}) => {
  state.isLoadingMessages = true

  const users = await backendService.getUsers()
  state.users = users
  state.currentUser = findFirst(users, u => u.id === userId).fold(
    undefined,
    u => u.id,
  )

  const messages = await backendService.getMessages()
  state.messages = messages
  state.playerMessage = last(messages).fold(undefined, m => m.id)

  state.isLoadingMessages = false
}
