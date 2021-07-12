import {
    ADD_TODOS,
    LOADING_TRUE,
    LOADING_FALSE,
    PUSH_TODO,
    DELETE_TODO,
    COMPLETE_STATUS
} from '../actionTypes';
export const setLoadingFalse = ()=>({type:LOADING_FALSE})
export const setLoadingTrue = ()=>({type:LOADING_TRUE})
export const AddTodos = (payload)=>({type:ADD_TODOS, payload})
export const PushTodo = (payload)=>({type:PUSH_TODO, payload})
export const DeleteTodo = (payload)=>({type:DELETE_TODO, payload})
export const CompliteTodo = (payload)=>({type:COMPLETE_STATUS, payload})