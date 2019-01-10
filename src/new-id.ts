// @ts-ignore
import nanoId from 'nanoid/async'
// @ts-ignore
import generate from 'nanoid/async/generate'

async function newId(): Promise<string> {
  return await nanoId()
}

async function newNum(): Promise<number> {
  const value = await generate('0123456789', 10)

  return parseInt(value, 10)
}

export {newId, newNum}
