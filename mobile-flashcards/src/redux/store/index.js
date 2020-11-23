import { createStore } from 'redux'
import reducer from '../reducers'

export const storeConfig = createStore(reducer)