import {Action} from 'overmind'
import {take} from 'fp-ts/lib/Array'

export const loadPosts: Action<number> = async ({
  value,
  state,
  jsonPlaceholder,
}) => {
  state.isLoadingPosts = true

  const posts = await jsonPlaceholder.getPosts()

  state.posts = take(value, posts)

  state.isLoadingPosts = false
}
