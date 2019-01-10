export type Msg = {
  id: string
  userId: string
  content: string
  created: number
}

export type User = {
  id: string
  name: string
  avatar: string
}

export type State = {
  isLoadingMessages: boolean
  messages: Msg[]
  users: User[]
  playerMessage?: Msg['id']
  currentUser?: User['id']
}

export const state: State = {
  isLoadingMessages: false,
  messages: [],
  users: [],
  playerMessage: undefined,
  currentUser: undefined,
}
