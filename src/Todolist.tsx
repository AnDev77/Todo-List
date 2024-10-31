import React, {useState} from "react";
import { Button } from 'react-bootstrap';
//FC =function component
type Todo = {
    id: number,
    text : string,
    isChecked:boolean
}
const TodoList : React.FC = ()=>{
    const [index, setIndex] = useState(0);

    function handleClick() {
        setIndex(index+1);
    }
    const [idValue, setId] = useState(0);
    const [todos, setTodos] = useState<Todo[]>([{
        id: idValue,
        text : "문제 풀기",
        isChecked: false
    }])
    //setId(idValue+1);
    const [newTodo, setNewTodo] = useState<string>('')

    const handleCheckedChange = (itemId : number) =>{
        setTodos( (prevItems) => 
            prevItems.map((item) => item.id === itemId
         ? { ...item, isChecked : !item.isChecked} : item
        )
        )
    }
    const handleAddTodo = ()=>{
        if(newTodo.trim() !== '')
            
            setTodos([...todos, {id : Date.now(), text : newTodo, isChecked:false}]);
            setNewTodo('');
    }

    return (

        <div className = 'container'>
            <h1>오늘할일</h1>
            <div>
                    <input type = "text" 
                    placeholder="할일 입력" 
                    value = {newTodo}
                    style = {{marginRight : '10px', writingMode : 'horizontal-tb'}}
                    onChange={(e)=>setNewTodo(e.target.value)}
                    >
                    
                    </input>
                    <Button variant="warning" onClick={handleAddTodo}>추가</Button>
                </div>
            <p></p>
            <div className = 'board'>
                
                <ul>
                    {todos.map( todo => (
                        <li key = {todo.id}>
                            <input type = "checkbox"
                            onChange={()=>{
                                handleCheckedChange(todo.id)
                            }}></input>
                            <span>
                                { todo.isChecked ? 
                                <del>{todo.text}</del> : 
                                <span> {todo.text}</span>
                                }
                            </span>
                            
                            
                        </li>
                    ))
                    }
                </ul>

            </div>
            <button onClick={handleClick}>
                Next
            </button>
            <h1>{index}</h1>
        </div>
    )
}

export default TodoList;