import React, { useState, useRef } from 'react';
import {useDispatch} from 'react-redux';
import {deleteToDo, updateToDo} from '../../actions/index';

const TodoItem = ({task}) => {
    const dispatch = useDispatch();
    const [isUpdate, setIsUpdate] = useState(false);
    const textRef = useRef(null);

    function editItemToState(e){
        e.preventDefault();
        dispatch(updateToDo({ message: textRef.current.value, id:task.id }));
        setIsUpdate(false);
        textRef.current = null; 
    }

    const renderForm = () => {
        return (
            <form onSubmit={editItemToState}>
                <input ref={textRef} type="text" defaultValue={task.task}/>
                <button type="submit">Edit Todo</button>
            </form>
        );
    };

    const renderItem = () => {
        return (
            <div>
                {task.task}
                <button onClick={() => setIsUpdate(true)}>Edit</button>
                <button onClick={() => dispatch(deleteToDo(task.id))}>Delete</button>
            </div>
        );
    }
    return (
        <>
            <p></p>
            <div>
                { isUpdate ? renderForm() : renderItem() }
            </div>             
        </>
    );
}

export default TodoItem;
