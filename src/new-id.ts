// @ts-ignore
import nanoId from 'nanoid'
// @ts-ignore
import generate from 'nanoid/generate'

const newId = (): string => nanoId()

const newNum = (length: number = 10): number =>
  parseInt(generate('0123456789', length), 10)

export {newId, newNum}
