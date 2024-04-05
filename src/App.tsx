import { useState } from 'react';
import { todos, Todo } from './data/todos';
import ToDoForm from './components/ToDoForm/ToDoForm';
import TaskDisplay from './components/TaskDisplay/TaskDisplay';
import { WebTheme, ToDoContainerBackground } from './components/AppTheme/AppTheme.style';

function App() {

  const [newTodoList, setNewTodoList] = useState<Todo[]>(todos);

  const handleListRefresh = (updatedTodoList: Todo[]) => {
    setNewTodoList(updatedTodoList);
  };

  return (
    <WebTheme>
      <ToDoContainerBackground>
      <h1>Todo App</h1>
        <ToDoForm newTodoList={newTodoList} onFormSubmit={handleListRefresh}/>
        <TaskDisplay newTodoList={newTodoList} onFormSubmit={handleListRefresh}/>
      </ToDoContainerBackground>
    </WebTheme>
  )
}

export default App
