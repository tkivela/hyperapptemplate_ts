import { IState } from '../state'

export default (delta: number) => (state: IState): IState => {
  return {
    count: state.count + delta
  }
}
