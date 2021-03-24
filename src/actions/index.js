const ADD_TODO = 'ADD_TODO';

export const addToDo = (message) => ({
    type : ADD_TODO,
    message,
    
});

const DELETE_TODO = 'DELETE_TODO';
export const deleteToDo = (id) => {
    return {
        type : DELETE_TODO,
        id, 
    }
};

const UPDATE_TODO = "UPDATE_TODO";
export const updateToDo = ({message, id}) => {
    return {
        type: UPDATE_TODO,
        message,
        id
    }

};