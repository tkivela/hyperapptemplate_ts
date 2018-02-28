import { h } from 'hyperapp' // eslint-disable-line
import DeltaButton from './components/DeltaButton'
import { IState } from './state'
import { IActions } from './actions'

export default (state: IState, actions: IActions) => (
  <div>
    <h1>Count: {state.count}</h1>
    <DeltaButton
      action={actions.deltaCount}
      delta={-1}
      caption="-"
      color="red"
    />
    <DeltaButton
      action={actions.deltaCount}
      delta={1}
      caption="+"
      color="lightgreen"
    />
  </div>
)
