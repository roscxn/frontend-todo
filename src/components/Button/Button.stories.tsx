import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions'; 
import { ButtonSubmitTask, ButtonDelete } from './Button.style';

export default {
  title: 'Buttons',
} as Meta;

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
