export function sendStateToStore(state) {
  return {
    type: 'ADD_INPUTS_TO_STORE',
    payload: state,
  };
}