import { useState } from 'react';
import { todos, Todo } from './data/todos';
import ToDoForm from './components/ToDoForm/ToDoForm';
import TaskDisplay from './components/TaskDisplay/TaskDisplay';
import { WebTheme, ToDoContainerBackground } from './components/AppTheme/AppTheme.style';


function App() {

  const [todoList, setTodoList] = useState<Todo[]>(todos);

  const updateTodoList = (newTodoList: Todo[]) => {
    setTodoList(newTodoList);
  }
  
  return (
    <WebTheme>
      <ToDoContainerBackground>
        <ToDoForm />
        <TaskDisplay />
      </ToDoContainerBackground>
    </WebTheme>
  )
}

export default App
