import * as React from 'react'
// @ts-ignore
import nanoId from 'nanoid'
// @ts-ignore
import generate from 'nanoid/generate'
import {Lens} from 'monocle-ts'

import {State} from './state'

export function newId(): string {
  return nanoId()
}

export function newNum(length: number = 10): number {
  const value = generate('0123456789', length)

  return parseInt(value, 10)
}

export function getValue(e: React.ChangeEvent<HTMLInputElement>) {
  return e.target.value
}

export function onSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault()
  return e
}

export const stateLens = Lens.fromPath<State>()
