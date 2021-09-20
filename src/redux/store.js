import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "Its my first post", likesCount: 15 },
        { id: 3, message: "blabla", likesCount: 15 },
        { id: 4, message: "da da", likesCount: 15 }
      ],
      newPostText: 'React'
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Dimich' },
        { id: 1, name: 'Vova' },
        { id: 1, name: 'Oksana' },
        { id: 1, name: 'Oleg' },
        { id: 1, name: 'Victor' }
      ],
      messages: [
        { id: 1, message: 'Hi' },
        { id: 1, message: 'How are your it-kamasutra' },
        { id: 1, message: 'Yo' },
        { id: 1, message: 'Yo' },
        { id: 1, message: 'YO' }
      ],
      newMessageBody: ''
    },
    sideBar: {

    }
  },
  _callSubscriber () {
    console.log('State change');
  },
  getState() {
    return this._state
  },
  subscribe (observer) {
    this._callSubscriber = observer; //observer - pattern;
  },

  dispatch (action) { // {type: 'ADD-POST'}
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    
    this._callSubscriber(this._state);

    }
}


window.store = store;
export default store;