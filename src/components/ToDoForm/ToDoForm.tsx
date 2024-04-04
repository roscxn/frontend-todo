import React, { useState } from "react";
import { ButtonSubmitTask } from "../Button/Button.style";
import { FormContainer, TextBox } from "./ToDoForm.style";
import { ErrorSubmitMessage, SuccessSubmitMessage } from "./ToDoForm.style";

interface TaskDetails {
    task: string
    completed?: boolean
    createdAt?: Date
}

function ToDoForm() {

    const [formData, setFormData] = useState<TaskDetails>({
        task: '', 
        completed: false,
        createdAt: new Date()
    }); 

    const [submitMessage, setSubmitMessage] = useState('');
    const [addSuccess, setAddSuccess] = useState(false);

    const handleTaskInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setSubmitMessage('');
        setFormData(prevState => ({ ...prevState, [name]: value }));
    }

    const handleAddTask = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const trimmedValue = formData.task.trim();
        if (trimmedValue === '' || trimmedValue.length < 3) {
            setFormData({ task: '' });
            setSubmitMessage('Task length must be at least 3 characters.');
            setAddSuccess(false);
        } else {
            console.log("Form submitted", formData);
            setFormData({ task: '' });
            setSubmitMessage('New task added successfully.');
            setAddSuccess(true);
        }
    }

    return (
        <div>
            <h1>Todo App</h1>
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