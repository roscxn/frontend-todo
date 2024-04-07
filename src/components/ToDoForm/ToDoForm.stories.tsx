import React, { useState } from 'react';
import { action } from '@storybook/addon-actions'
import { Meta } from '@storybook/react';
import { FormContainer, TextBox, SuccessSubmitMessage, ErrorSubmitMessage } from './ToDoForm.style';
import { ButtonSubmitTask } from '../Button/Button.style';

export default {
  title: 'Add a todo form',
  component: FormContainer,
} as Meta;

export const DisplayTodo= () => {

  const [todo, setTodo] = useState('');
  const [addSuccess, setAddSuccess] = useState(false);

  const handleAdd = (event: any) => {
    event.preventDefault();
    if (todo.length < 3 || !/[a-zA-Z]/.test(todo)) {
      setAddSuccess(false);
      action('Error in adding task')(todo)
    } else {
      setAddSuccess(true);
      action('Task added')(todo)
      setTodo('')
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  }

  return (
      <FormContainer>
        <TextBox 
            type="text"
            placeholder="Add your new todo"
            name="task"
            value={todo}
            minLength={3}
            onChange={handleChange}
            required
        />
          <ButtonSubmitTask onClick={(event) => { 
            handleAdd(event); 
            action('Task added')(event); 
          }}>+</ButtonSubmitTask>

        { !addSuccess? (
          <ErrorSubmitMessage>
           Task length must be at least 3 characters long.
         </ErrorSubmitMessage>          
          ) : (
          <SuccessSubmitMessage>
            New task added successfully.
          </SuccessSubmitMessage>  

          )
        }
    </FormContainer>
  )
}