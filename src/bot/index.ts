import {Machine} from 'xstate'
import {interpret} from 'xstate/lib/interpreter'

// MESSAGES - USER DECISION
const say = 'say'
const yes = 'yes'
const no = 'no'
const start = 'start'
const done = 'done'
const skip = 'skip'

// EVENTS - SYSTEM DECISION
const hasUnresolved = 'hasUnresolved'
const allResolved = 'allResolved'

// STATES
const askUser = 'askUser'
const listen = 'listen'
const searchVars = 'searchVars'
const resovleVars = 'resolveVars'
const finish = 'finish'
const idle = 'idle'
const listAllSteps = 'listAllSteps'
const defineStep = 'defineStep'
const ON = 'ON'
const WHEN = 'WHEN'
const DO = 'DO'
const description = 'description'

const section = {
  initial: askUser,
  states: {
    askUser: {on: {yes: listen}},
    listen: {on: {done: searchVars, say: listen}},
    searchVars: {on: {hasUnresolved: resovleVars, allResolved: finish}},
    resolveVars: {on: {done: finish, skip: finish}},
    finish: {on: {say: finish}},
  },
}

const step = {
  initial: askUser,
  states: {
    askUser: {on: {yes: description}},
    description: {on: {done: ON, say: description}},
    ON: {on: {done: WHEN}, ...section},
    WHEN: {on: {done: DO}, ...section},
    DO: {on: {done: finish}, ...section},
    finish: {on: {say: finish}},
  },
}

const list = {
  initial: askUser,
  states: {
    askUser: {on: {yes: listAllSteps, no: idle}},
    listAllSteps: {on: {done: defineStep}},
    defineStep: {on: {done: finish}, ...step},
    idle: {on: {start: listAllSteps, say: idle}},
    finish: {on: {say: finish}},
  },
}

const machine = Machine(list)

const log: string[] = []

const rootService = interpret(machine)
  .onTransition(state => log.push(state.event.type))
  .start()

function send(msg: string) {
  rootService.send(msg)

  return rootService.state
}

rootService.state //?$.value
send('no') //?$.value
send('start') //?$.value
send('blah') //?$.value
send('done') //?$.value
log
