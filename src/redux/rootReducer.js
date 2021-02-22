import {lightReducer,lightKey} from './lightRedux/light.reducer'
import {combineReducers} from 'redux'

let rootReducer = combineReducers({
    lightStore : lightReducer
})

export {rootReducer}