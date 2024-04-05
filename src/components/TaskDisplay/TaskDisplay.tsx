import { useState } from "react";
import { todos, Todo } from "../../data/todos";
import { ButtonDelete } from "../Button/Button.style";
import { DisplayContainer, DisplayTaskBox, LineThroughText } from "./TaskDisplay.style";
import { CheckboxInput } from "../Checkbox/Checkbox.style";

function TaskDisplay() {

    const [todoList, setTodoList] = useState<Todo[]>(todos);

    const handleChangeCheckBox = (taskId: number) => {
        const updatedToDoList = todoList.map(todo => {
            if (todo.id === taskId) {
                return {... todo, completed: !todo.completed};
            }
            return todo;
        });
        setTodoList(updatedToDoList);
    }

    const handleDeleteTask = (taskId: number) => {
        //includes all todos except the one deleted
        const deleteToDo = todoList.filter(todo => todo.id !== taskId);
        setTodoList(deleteToDo);
        console.log("handledelete", todoList);
    }

    return (
            <DisplayContainer>

                { todoList.length === 0 ? (
                    <h3>No task found</h3>
                ) : (
                    todoList.map((todo: Todo) => (
                        <DisplayTaskBox key={todo.id}>
                        <CheckboxInput 
                            type="checkbox" 
                            onChange={() => handleChangeCheckBox(todo.id)}
                            checked={todo.completed}
                        />
                        { todo.completed ? (
                            <LineThroughText>{todo.task}</LineThroughText>
                            ) : ( 
                            <span>{todo.task} </span>
                            )
                        }
                            <ButtonDelete onClick={() => {handleDeleteTask(todo.id)}}>
                                X
                            </ButtonDelete>
                        </DisplayTaskBox>
                    ))
                )}
            </DisplayContainer>
    );
}

export default TaskDisplay;