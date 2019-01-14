import {Action} from 'overmind'
import {findFirst, last} from 'fp-ts/lib/Array'

export const loadData: Action<string> = async ({
  value: userId,
  state,
  backendService,
}) => {
  state.isLoadingChat = true

  const [users, messages] = await Promise.all([
    backendService.getUsers(),
    backendService.getMessages(userId),
  ])

  state.users = users
  state.currentUser = findFirst(users, u => u.id === userId).fold(
    undefined,
    u => u.id,
  )

  state.messages = messages
  state.playerMessage = last(messages).fold(undefined, m => m.id)

  state.isLoadingChat = false
}
