const _trigger = () => ({
  type: 'TRIGGER'
})

export const triggerSideNav = () => dispatch => {
  dispatch(_trigger())
}
