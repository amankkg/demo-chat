import {Action} from 'overmind'

import {Msg} from '../state'
import {newId} from '../new-id'

export const sendMessage: Action<string> = async ({
  value,
  state,
  backendService,
}) => {
  if (state.currentUser == null)
    throw new Error("can't send message when current user is not defined")

  const newMessage: Msg = {
    id: newId(),
    created: Date.now(),
    userId: state.currentUser,
    content: value,
  }

  state.messages.push(newMessage)

  await backendService.sendMessage(newMessage)
}
