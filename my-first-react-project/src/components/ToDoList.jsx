import { useState } from 'react';

function ToDoList(props) {
    const [toDos, setToDos] = useState([]);
    const [newTask, setNewTask] = useState('');

    // Keep track of your input changes in state!!!
    // This way React and your DOM never fall out of sync!
    const inputChanged = (event) => {
        const newInputValue = event.target.value;
        setNewTask(newInputValue);
    };

    const formSubmit = (event) => {
        event.preventDefault(); // Stop the form from loading a new page.

        // Update our to-dos array.
        setToDos((prev) => {
            const newArr = [...prev]; // (Don't worry about this today!)
            newArr.push(newTask);
            return newArr;
        });

        // Clear out our task list.
        setNewTask('');
    };

    return (
        <>
            <h2>{props.heading || 'To-Do List Component'}</h2>
            <form onSubmit={formSubmit}>
                <label htmlFor="new-task">Enter new task:</label>
                <input
                    id="new-task"
                    type="text"
                    onChange={inputChanged}
                    value={newTask} />
                <input type="submit" value="Add New Task" />
            </form>
            {toDos.length === 0 && <p>No to-do items at this time.</p>}
            {toDos.length > 0 && <ul>
                {toDos.map((toDo, index) => <li key={index}>{toDo}</li>)}
            </ul>}
        </>
    );
}

export default ToDoList;
