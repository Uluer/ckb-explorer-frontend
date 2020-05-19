import { ComponentActions } from '../actions'

export const componentReducer = (
  state: State.AppState,
  { type, payload }: { type: ComponentActions; payload: State.Components },
): State.AppState => {
  switch (type) {
    case ComponentActions.UpdateHeaderSearchEditable:
      return {
        ...state,
        components: {
          ...state.components,
          searchBarEditable: payload.searchBarEditable,
        },
      }
    case ComponentActions.UpdateHeaderMobileMenuVisible:
      return {
        ...state,
        components: {
          ...state.components,
          mobileMenuVisible: payload.mobileMenuVisible,
        },
      }
    case ComponentActions.UpdateHomeSearchBarVisible:
      return {
        ...state,
        components: {
          ...state.components,
          homeSearchBarVisible: payload.homeSearchBarVisible,
        },
      }
    default:
      return state
  }
}

export default componentReducer
