import { ActionResult } from 'hyperapp'

import { IState } from '../state'

export default (delta: number) => (state: IState): ActionResult<IState> => {
  return {
    count: state.count + delta
  }
}
