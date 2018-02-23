import { IState } from '../state'
import deltaCount from './deltaCount'

export interface IActions {
  deltaCount: (value: number) => (state: IState) => IState
}

const actions: IActions = {
  deltaCount
}

export default actions
