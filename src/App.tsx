import { WebTheme, ToDoContainerBackground } from './components/AppTheme/AppTheme.style';
import ToDoForm from './components/ToDoForm/ToDoForm';
import TaskDisplay from './components/TaskDisplay/TaskDisplay';

function App() {
  
  return (
    <WebTheme>
      <ToDoContainerBackground>
        <ToDoForm/>
        <TaskDisplay/>
      </ToDoContainerBackground>
    </WebTheme>
  )
}

export default App
