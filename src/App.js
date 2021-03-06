import {useDispatch, useSelector} from "react-redux";
import './App.css';
import {useEffect, useState} from "react";
import {Fragment} from "react";
import {todosReducer} from './redux/reducers';
import {setLoadingFalse, setLoadingTrue, AddTodos, PushTodo} from "./redux/actionCreators";




const CreateTodoForm = ({onSubmit}) =>{
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
    const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description || isLoading) return;

    try {
        setIsLoading(true)
        await onSubmit(title, description);
        setTitle('')
        setDescription('')
    }
    catch (e){
        console.log(e);
    }finally {
        setIsLoading(false)
    }

  }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title}
                   onChange={({target: {value}})=> setTitle(value)}
                   placeholder="todo title"/>
          <br/>
          <br/>
            <input type="text" value={description}
                   onChange={({target: {value}})=>setDescription(value)}
                   placeholder="todo description"/>
          <br/>
          <button type="submit" disabled={!title || !description || isLoading}>create todo</button>
        </form>
    )
}
const Todos = ({todos, isLoading}) =>{
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
                        <div></div>
                        <hr/>
                    </Fragment>

                    )})
            }
        </div>
    )
}

function App()
{
  const {todos, todosLoading} = useSelector(store=>store.todosReducer);
    const dispatch = useDispatch();

  const fetchTodos = async ()=> {
      try {
    dispatch(setLoadingTrue())
    const resp = await fetch ('http://localhost:8888/get-todos');
    const data = await resp.json();

    dispatch(AddTodos(data))
    } catch (e){
          console.log(e);
    }finally {
          dispatch(setLoadingFalse())
    }

  }
  useEffect(()=>{
    fetchTodos();
  },[])

    const onTodoCreate = async (title, description)=>{
        if (!title || !description) return;

        const resp = await fetch('http://localhost:8888/create-todo', {
            method: 'POST',
            body: JSON.stringify({title, description}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await resp.json();
        dispatch(PushTodo(data))
        //fetchTodos();
    }
  return (
    <div>
        <CreateTodoForm onSubmit={onTodoCreate}/>
          <Todos todos={todos} isLoading={todosLoading}/>

    </div>
  );
}

export default App;
