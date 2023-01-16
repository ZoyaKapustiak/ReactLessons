
export const selectChat = (state) => Object.keys(state.messages).map((chat, ind) => ({
  id: ind,
  name: chat
})) 

export const selectMessage = (state) => state.messages