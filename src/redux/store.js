import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: '1', message: 'Hi, how are you?', likesCount: 12},
                {id: '2', message: 'It\'s my first post', likesCount: 11},
                {id: '3', message: 'Blabl', likesCount: 13},
                {id: '4', message: 'dldlld', likesCount: 14},
            ],
            newPostText: 'it-kama'
        },
        dialogsPage: {
            dialogs: [
                {id: '1', name: 'Dimych'},
                {id: '2', name: 'Andrey'},
                {id: '3', name: 'Sveta'},
                {id: '4', name: 'Sasha'},
                {id: '5', name: 'Viktor'},
                {id: '6', name: 'Valera'}
            ],
            messages: [
                {id: '1', message: 'Hi'},
                {id: '2', message: 'How is your it?'},
                {id: '3', message: 'Yo'},
                {id: '4', message: 'Yo'},
                {id: '5', message: 'Yo'}
            ],
            newMessageBody: ''
        },
        sidebarPage: {}
    },

    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observe) {
        this._callSubscriber = observe;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);
        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;
//store - OOP