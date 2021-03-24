import './App.css';
import AddToDo from './components/AddToDO/AddToDo';
import List from './components/List/list';

function App() {
  return (
    <div className="App">
      <h1 className="todoapp">TODO App</h1>
      <AddToDo />
      <List />
    </div>
  );
}

export default App;
