import {Machine} from 'xstate'
import {interpret} from 'xstate/lib/interpreter'

const toggleMAchine = Machine({
  initial: 'inactive',
  states: {
    inactive: {on: {TOGGLE: 'active'}},
    active: {on: {TOGGLE: 'inactive'}},
  },
})

const toggleService = interpret(toggleMAchine)
  .onTransition(state => console.log(state.value))
  .start()

toggleService.send('TOGGLE').value // ?

toggleService.send('TOGGLE').value // ?
