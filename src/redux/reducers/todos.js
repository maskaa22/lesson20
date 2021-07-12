import {
    ADD_TODOS,
    LOADING_TRUE,
    LOADING_FALSE,
    PUSH_TODO,
    DELETE_TODO,
    COMPLETE_STATUS
} from '../actionTypes'
const initialState = {
    todos:[],
    todosLoading: false,
    color: []
}

export const todosReducer = (state=initialState, action) => {
    switch (action.type){
        case ADD_TODOS: {
            return {...state, todos: action.payload}
        }
        case LOADING_TRUE: {
            return {...state, todosLoading:true}
        }
        case LOADING_FALSE: {
            return {...state, todosLoading:false}
        }
        case PUSH_TODO: {
            return {...state, todos:[...state.todos, action.payload]}
        }
        case DELETE_TODO: {
            return {...state, todos:[...state.todos.filter(val=> val.id !==action.payload)]}
        }
        case COMPLETE_STATUS: {
            return {
                ...state, todos: [...state.todos.map(todo =>
                    todo.id === action.id ?
                        {...todo, completed: action.completed} : todo)]
            }

        }
        case 'A_TODO': {
            return {
                // ...state, todos: [...state.todos.map(todo =>
                //     todo.id === action.id ?
                //         {...todo, color:todo.completed==='true'?'red':'grey'} : todo)]
            }
        }
        default: return state
    }
}