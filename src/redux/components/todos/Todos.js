import {Fragment} from "react";

export const Todos = ({todos, isLoading, onTodoDelete, onTodoComplete, onComplete}) =>{
    if(isLoading) return <h1>LOADING...</h1>

    return (
        <div>
            {
                todos.map(todo =>
                {

                    return (

                        <Fragment key={todo.id}>
                            <div>{todo.title}</div>
                            <div>{todo.description}</div>
                            <div>Created At: {new Date(todo.createdAt).toDateString()}</div>
                            <div>Status {todo.completed.toString()}</div>
                            <div>
                                <button onClick={()=>{
                                    onTodoDelete(todo.id);
                                }}>delete</button>
                                <button onClick={()=>{
                                    onTodoComplete(todo.id, todo.completed);

                                }}>complete</button>
                            </div>
                            <hr/>
                        </Fragment>

                    )})
            }
        </div>
    )
}