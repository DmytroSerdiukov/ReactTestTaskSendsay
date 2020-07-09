import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import formHandleReducer from './../reducer/formHandleReducer'

let reducers = combineReducers({
    form: formReducer,
    handler: formHandleReducer
});

let store = createStore(reducers)

window.store = store

export default store