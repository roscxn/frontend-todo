import React, { useState, useEffect } from "react";
import { Todo, todos } from "../../data/todos";
import { ButtonSubmitTask } from "../Button/Button.style";
import { FormContainer, TextBox } from "./ToDoForm.style";
import { ErrorSubmitMessage, SuccessSubmitMessage } from "./ToDoForm.style";

interface FormProps {
    newTodoList: Todo[];
    onFormSubmit: (updatedTodoList: Todo[]) => void;
}

const ToDoForm: React.FC<FormProps> = ({ newTodoList, onFormSubmit }) => {

    const [formData, setFormData] = useState<Todo>({
        id: 0,
        task: '', 
        completed: false,
    }); 

    const [submitMessage, setSubmitMessage] = useState('');
    const [addSuccess, setAddSuccess] = useState(false);
    const [todoList, setTodoList] = useState<Todo[]>(todos);

    useEffect(() => {
        setTodoList(newTodoList);
    }, [newTodoList]);

    const handleTaskInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setSubmitMessage('');
        if (value.length > 0 && !/[a-zA-Z]/.test(value)) {
            setAddSuccess(false);
            setSubmitMessage('Task must contain at least one alphabet character.');
        } else {
            setFormData(prevState => ({ ...prevState, [name]: value }));
        }
    };
    
    const handleAddTask = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const trimmedValue = formData.task.trim();
        if (trimmedValue === '' || trimmedValue.length < 3) {
            setFormData({ id: 0, task: '', completed: false });
            setSubmitMessage('Task length must be at least 3 characters long.');
            setAddSuccess(false);
        } else {
            
            const findMaxId = (todos: Todo[]): number => {
                let maxId = 0;
                for (const todo of todos) {
                    if (todo.id > maxId) {
                        maxId = todo.id;
                    }
                }
                return maxId;
            };
            
            const maxId = findMaxId(todoList); 
            
            const newTodo: Todo = {
                id: maxId + 1, 
                task: formData.task,
                completed: false,
            };

            const updatedTodoList = [... todoList, newTodo];
            setTodoList(updatedTodoList);
            onFormSubmit(updatedTodoList);
            setFormData({ id: 0, task: '', completed: false });
            setSubmitMessage('New task added successfully.');
            setAddSuccess(true);
        }
    }

    return (
        <div>
                <form 
                    onSubmit={handleAddTask}>
                    <FormContainer>
                        <TextBox 
                            type="text"
                            placeholder="Add your new todo"
                            name="task"
                            value = {formData.task}
                            onChange={handleTaskInputChange}
                            minLength={3}
                            required
                        />
                        <ButtonSubmitTask type="submit">+</ButtonSubmitTask>
                    </FormContainer>
                </form>

            { !addSuccess ? 
            <ErrorSubmitMessage>{submitMessage}</ErrorSubmitMessage> 
            :
            <SuccessSubmitMessage>{submitMessage}</SuccessSubmitMessage>
            }

        </div>
    )
}

export default ToDoForm;