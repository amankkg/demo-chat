import {Msg} from './state'
import {newId, newNum} from './new-id'

export const backendService = {
  async getMessages(): Promise<Msg[]> {
    const messages: Msg[] = []

    for (let i = 0; i < 20; i++) {
      const id = await newId()
      const userId = (await newNum()) % 2 === 0 ? 'user1' : 'user2'
      const content = `hey hoo ${i}`
      const created = Date.now() - 1e8 + i * 9 * 1e6

      messages.push({id, content, userId, created})
    }

    return messages
  },
}
