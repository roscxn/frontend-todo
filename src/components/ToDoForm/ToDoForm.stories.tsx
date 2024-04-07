import { useState } from 'react';
import { action } from '@storybook/addon-actions'
import { Meta } from '@storybook/react';
import { FormContainer, TextBox, SuccessSubmitMessage, ErrorSubmitMessage } from './ToDoForm.style';
import { ButtonSubmitTask } from '../Button/Button.style';

export default {
  title: 'Add a todo form',
  component: FormContainer,
} as Meta;

export const DisplayTodo= () => {

  const [addSuccess, setAddSuccess] = useState(false);

  const handleAdd = (event: any) => {
    event.preventDefault();
    setAddSuccess(true);
  }

  return (
      <FormContainer>
        <TextBox 
            type="text"
            placeholder="Add your new todo"
            name="task"
            minLength={3}
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