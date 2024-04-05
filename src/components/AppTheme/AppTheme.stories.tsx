import { WebTheme, ToDoContainerBackground } from "./AppTheme.style";

export default {
    title: 'App Theme',
  };

export const Theme = () => {
  return (
    <WebTheme>
        <ToDoContainerBackground>
            Add task form and display task list here
        </ToDoContainerBackground>
    </WebTheme>
  )
};
