import {Action} from 'overmind'

export const loadPosts: Action = async ({state, jsonPlaceholder}) => {
  state.isLoadingPosts = true
  state.posts = await jsonPlaceholder.getPosts()
  state.isLoadingPosts = false
}
