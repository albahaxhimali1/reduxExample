import { createStore } from 'redux'
import rootReducer from './reducers'
import storeEnhancer from './middleware'

export default function configureStore() {
    return createStore(rootReducer, storeEnhancer)
}