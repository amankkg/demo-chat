export type Post = {
  id: string
  userId: string
  title: string
  body: string
}

export type State = {
  isLoadingPosts: boolean
  posts: Post[]
}

export const state: State = {
  isLoadingPosts: false,
  posts: [],
}
