const SEND_MESSAGE = 'SEND_MESSAGE'
const ADD_FILE = 'ADD_FILE'

let initState = {
    messages: [],
    pinnedFiles: []
}

const formHandleReducer = (state = initState, action) =>  {
    switch(action.type) {
        case SEND_MESSAGE:{
            let message = {
                date: action.msg.date,
                header: action.msg.header,
                st: action.msg.st
            }
        return { ...state, messages: [...state.messages, message]}
        }
        case ADD_FILE: {
            console.log('file added')
            return {...state, pinnedFiles: [...state.pinnedFiles, action.file]}
        }
        default:
            return state
    }
 }

export default formHandleReducer

export const sendMessage = message => ({type: 'SEND_MESSAGE', msg: message})
export const addFile = file => ({type: 'ADD_FILE', file})