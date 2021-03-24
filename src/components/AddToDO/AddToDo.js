import React, {useState} from 'react';
import {addToDo} from '../../actions/index';
import {useDispatch} from 'react-redux'; 
import cuid from 'cuid';

const AddToDo = (props) => {
    const [tasks, setTasks] = useState("");
    const dispatch = useDispatch();

    function handleInputChange(e){
        setTasks(e.target.value);
    }

    function handleFormSubmit(e){
        e.preventDefault()
        if(e.target.userInput.value.length > 1){
            setTasks(dispatch(addToDo({task: tasks, id: cuid() })));
            e.target.userInput.value = "";
        }
        else{
            alert("plz insert somthing");
        
        }
        
    }
    return (

        <form onSubmit={handleFormSubmit}>
            <input type="text" name="userInput" placeholder="Add Items" onChange={(e) => handleInputChange(e)}/>
            <button type="submit">ADD</button>

        </form>
    
    )
}

export default AddToDo;
