import {Post} from './state'

export const jsonPlaceholder = {
  getPosts(): Promise<Post[]> {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(resp => resp.json()) // prettier-ignore
  },
}
