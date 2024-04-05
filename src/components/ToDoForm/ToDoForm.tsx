import React, { useState } from "react";
import { Todo, todos } from "../../data/todos";
import { ButtonSubmitTask } from "../Button/Button.style";
import { FormContainer, TextBox } from "./ToDoForm.style";
import { ErrorSubmitMessage, SuccessSubmitMessage } from "./ToDoForm.style";

// interface ToDoFormProps {
//     updateTodoList: (newTodoList: Todo[]) => void;
// }

function ToDoForm() {

    const [formData, setFormData] = useState<Todo>({
        id: 0,
        task: '', 
        completed: false,
    }); 

    const [submitMessage, setSubmitMessage] = useState('');
    const [addSuccess, setAddSuccess] = useState(false);
    const [todoList, setTodoList] = useState<Todo[]>(todos);

    const handleTaskInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setSubmitMessage('');
        // Custom validation to ensure at least one alphabet character
        if (value.length > 0 && !/[a-zA-Z]/.test(value)) {
            // Display error message if validation fails
            setSubmitMessage('Task must contain at least one alphabet character.');
        } else {
            // Update the form data if validation passes
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
            const newTodo: Todo = {
                id: todoList.length + 1,
                task: formData.task,
                completed: false,
            };
            console.log("new to do todoformtsx", newTodo);
            // updateTodoList(prevTodoList => [ ... prevTodoList, newTodo ]);
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