import {useSelector} from 'react-redux';
import TodoItem from '../../components/TodoItem/TodoItem';


const List = () => {
    const taskobj = useSelector((state) => state.todos.data);
    const taskItems = taskobj.map((task) => {
        return (
            <TodoItem task={task} key={task.id}/>
        )
    })
    return (
        <div>
            {taskItems}
        </div>
    )
}

export default List;
