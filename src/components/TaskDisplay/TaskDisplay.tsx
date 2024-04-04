import { useState } from "react";
import { todos, Todo } from "../../data/todos";
import { ButtonDelete } from "../Button/Button.style";
import { DisplayContainer, DisplayTaskBox } from "./TaskDisplay.style";
import { CheckboxInput } from "../Checkbox/Checkbox.style";

function TaskDisplay() {

    const [todoList, setTodoList] = useState<Todo[]>(todos);
    // const [completedTask, setCompletedTask] = useState(false);

    // const handleChangeCheckBox = (taskId: number) => {
    //     // todoList (array of objects) - toDoList[1] -> means selecting second item
    //     const taskSelected = todoList[taskId - 1];          
    // };

    const handleChangeCheckBox = (taskId: number) => {
        const updatedToDoList = todoList.map(todo => {
            if (todo.id === taskId) {
                return {... todo, completed: !todo.completed};
            }
            return todo;
        });
        setTodoList(updatedToDoList);
        console.log("updated", updatedToDoList);
    }


    return (
            <DisplayContainer>
                {todos.map((todo: Todo) => (
                    <DisplayTaskBox key={todo.id}>
                    <CheckboxInput 
                        type="checkbox" 
                        checked={todo.completed}
                        onChange={() => handleChangeCheckBox(todo.id)}
                    />
                        <span>{todo.task}</span>
                        <ButtonDelete>X</ButtonDelete>
                    </DisplayTaskBox>
                ))}
            </DisplayContainer>
    );
}

export default TaskDisplay;