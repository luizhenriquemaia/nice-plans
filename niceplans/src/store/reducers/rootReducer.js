import authReducer from './authReducer'
import planReducer from './planReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'


const rootReducer = combineReducers({
    auth: authReducer,
    plan: planReducer,
    firestore: firestoreReducer
})


export default rootReducer