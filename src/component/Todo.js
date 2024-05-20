import React from "react";

function Todo(){
    const [todos, setTodos] = React.useState([]);
    const [todo, setTodo] = React.useState("");
    const addTodo = () => {
        setTodos([...todos, todo]);
        setTodo("");
    }
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo, index) => index!==id));
    }
    const renderTodos = () => {
        return todos.map((todo, index) => {
            return (
                <tr key={index}>
                    <td>{todo}</td>
                    <td><button onClick={() => deleteTodo(index)}>Delete</button></td>
                </tr>
            )
        })
    }
    return(
        <div>
            <h1>Todo List</h1>
            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>
            <button onClick={addTodo}>Add Todo</button>
            <table>
                <thead>
                    <tr>
                        <th>Todo</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>                    
            {renderTodos()}
                </tbody>
            </table>
        </div>
    )
}

export default Todo;