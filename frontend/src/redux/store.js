import { combineReducers, configureStore } from '@reduxjs/toolkit'


/*Chamando reducers*/
import questionReducer from './question_reducer'
import resultReducer from './result_reducer'

const rootReducer = combineReducers({
    questions : questionReducer,
    result : resultReducer
})

/* Criando o armazenamento com reducer */

export default configureStore({reducer : rootReducer});