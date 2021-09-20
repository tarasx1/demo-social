const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
  dialogs: [
    { id: 1, name: 'Dimich' },
    { id: 2, name: 'Vova' },
    { id: 3, name: 'Oksana' },
    { id: 4, name: 'Oleg' },
    { id: 5, name: 'Victor' },
  ],
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are your it-kamasutra' },
    { id: 3, message: 'Yo' },
    { id: 4, message: 'Yo' },
    { id: 5, message: 'YO' },
  ],
};
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }],
      };
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;
