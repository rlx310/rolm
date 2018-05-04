const trigger = () => ({
  type: 'TRIGGER'
})

export const triggerSideNav = () => dispatch => {
  dispatch(trigger())
}
