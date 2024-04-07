import { useState, useEffect } from "react";
import { todos, Todo } from "../../data/todos";
import { ButtonDelete } from "../Button/Button.style";
import { DisplayContainer, DisplayTaskBox, LineThroughText, CheckboxInput } from "./TaskDisplay.style";

interface TaskDisplayProps {
    newTodoList: Todo[];
    onFormSubmit: (updatedTodoList: Todo[]) => void;
}

const TaskDisplay: React.FC<TaskDisplayProps> = ({ newTodoList, onFormSubmit }) => {

    const [todoList, setTodoList] = useState<Todo[]>(todos);

    useEffect(() => {
        setTodoList(newTodoList);
    }, [newTodoList]);

    const handleChangeCheckBox = (taskId: number) => {
        const updatedCompletedStatus = todoList.map(todo => {
            if (todo.id === taskId) {
                return {... todo, completed: !todo.completed};
            }
            return todo;
        });
        setTodoList(updatedCompletedStatus);
    }

    const handleDeleteTask = (taskId: number) => {
        const deleteToDoNewList = todoList.filter(todo => todo.id !== taskId);
        setTodoList(deleteToDoNewList);
        onFormSubmit(deleteToDoNewList);
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