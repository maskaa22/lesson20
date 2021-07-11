import {
    ADD_TODOS,
    LOADING_TRUE,
    LOADING_FALSE,
    PUSH_TODO
} from '../actionTypes';
export const setLoadingFalse = ()=>({type:LOADING_FALSE})
export const setLoadingTrue = ()=>({type:LOADING_TRUE})
export const AddTodos = (payload)=>({type:ADD_TODOS, payload})
export const PushTodo = (payload)=>({type:PUSH_TODO, payload})