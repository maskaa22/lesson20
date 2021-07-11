const initialState = {
    todos:[],
    todosLoading: false
}

export const todosReducer = (state=initialState, action) => {
    switch (action.type){
        case 'ADD_TODOS': {
            return {...state,todos: action.payload}
        }
        case 'LOADING_TRUE': {
            return {...state,todosLoading:true}
        }
        case 'LOADING_FALSE': {
            return {...state,todosLoading:false}
        }
        default: return state
    }
}