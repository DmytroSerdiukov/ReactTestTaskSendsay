const SEND_MESSAGE = 'SEND_MESSAGE'

let initState = {
    messages: [],
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
        
        default:
            return state
    }
 }

export default formHandleReducer

export const sendMessage = (message) => ({type: 'SEND_MESSAGE', msg: message})
    