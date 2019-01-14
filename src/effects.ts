import {newId, newNum} from './new-id'
import {Msg, User} from './state'

export const backendService = {
  async getUsers(): Promise<User[]> {
    return [
      {
        id: '0',
        name: 'Bot',
        avatar: 'https://png.pngtree.com/svg/20170824/robot_378421.png',
      },
      {
        id: '1',
        name: 'User 1',
        avatar: 'https://api.adorable.io/avatars/50/abott@adorable.png',
      },
      {
        id: '2',
        name: 'User 2',
        avatar:
          'https://api.adorable.io/avatars/face/eyes4/nose3/mouth7/8e8895',
      },
    ]
  },

  async getMessages(userId: string): Promise<Msg[]> {
    const messages: Msg[] = []

    for (let i = 0; i < 5; i++) {
      const id = newId()
      const userId = (newNum() % 3).toString()
      const content = `hey hoo ${i}`
      const created = Date.now() - 1e8 + i * 9 * 1e6

      messages.push({id, content, userId, created})
    }

    return messages
  },
}
