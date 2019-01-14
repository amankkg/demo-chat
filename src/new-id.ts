// @ts-ignore
import nanoId from 'nanoid'
// @ts-ignore
import generate from 'nanoid/generate'

function newId(): string {
  return nanoId()
}

function newNum(length: number = 10): number {
  const str = generate('0123456789', length)

  return parseInt(str, 10)
}

export {newId, newNum}
