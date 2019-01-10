type MsgId = string

export type Msg = {
  id: MsgId
  userId: string
  content: string
  created: number
}

export type State = {
  isLoadingMessages: boolean
  messages: Msg[]
  currentMessage?: MsgId
}

export const state: State = {
  isLoadingMessages: false,
  messages: [],
  currentMessage: undefined,
}
