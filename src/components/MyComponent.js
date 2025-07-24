import { useState } from "react"

const MyComponent = () => {
    const [newTodo, setNewtodo] = useState("dat");
    const todo = 'doing homework'
    const [listTodo, setListTodo] = useState([
        { id: 'todo1', value: 'doing homework' },
        { id: 'todo2', value: 'Learning react' }
    ]);
    const handlechangInput = (event) => {
        setNewtodo(event.target.value)
    }

    const handleAddTodo = () => {
        setListTodo([...listTodo, { id: Math.floor((Math.random() * 10000) + 1), value: newTodo }])
    }

    const handleDeleteTodo = (todoId) => {
        let newFilter = listTodo.filter(item => item.id !== todoId);
        setListTodo(newFilter)
    }
    return (
        <div>
            <div>To do List</div>

            {listTodo.map((todo, index) => {
                return (
                    <div>{index + 1}. {todo.value}
                        <button onClick={() => handleDeleteTodo(todo.id)}>delete</button>
                    </div>
                )
            })}
            <br />
            <div>my to do = {newTodo}</div>
            <input type={'text'} onChange={(event) => handlechangInput(event)} />
            <button onClick={handleAddTodo}>add to do</button>
        </div>
    )
}

export default MyComponent;