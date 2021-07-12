// import {PushTodo} from "../../actionCreators";
// import {useDispatch} from "react-redux";
//
// const dispatch = useDispatch();
//
//    export const onTodoCreate = async (title, description)=>{
//     if (!title || !description) return;
//
//     const resp = await fetch('http://localhost:8888/create-todo', {
//         method: 'POST',
//         body: JSON.stringify({title, description}),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     const data = await resp.json();
//     dispatch(PushTodo(data))
//     //fetchTodos();
// }
