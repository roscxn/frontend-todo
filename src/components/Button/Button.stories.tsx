import { action } from '@storybook/addon-actions'; 
import { ButtonSubmitTask, ButtonDelete } from './Button.style';

// This will create a section in Storybook with the title "Button Styles"
export default {
  title: 'Buttons',
};

// Story for the Submit Button
export const AddTaskButton = () => {
    return (
    <ButtonSubmitTask onClick={action('Task added')}>+</ButtonSubmitTask>
    )
}

export const DeleteTaskButton = () => {
    return (
        <ButtonDelete onClick={action('Task deleted')}>X</ButtonDelete>
    )
}
