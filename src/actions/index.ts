import { ActionResult, ActionsType } from 'hyperapp'

import { IState } from '../state'
import deltaCount from './deltaCount'

export interface IActions {
  deltaCount: (value: number) => (state: IState) => ActionResult<IState>
}

export const actions: ActionsType<IState, IActions> = {
  deltaCount
}
