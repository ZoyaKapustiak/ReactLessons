const initialState = {
  name: 'Biba'
}

export const profileReduser = (state = initialState, action) => {
  const {type, payload } = action
  switch (type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: payload
      }
    case 'CHECKED':
      return {
        ...state,
        value: payload
      }
  
  
    default:
      return state
  }
}