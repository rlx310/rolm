const initState = { active: false }
const sideNavReducer = (state=initState, action) => {
  switch (action.type) {
    case 'TRIGGER':
      return {
        active: !state.active
      }
    default:
      return state
  }
}

export default sideNavReducer