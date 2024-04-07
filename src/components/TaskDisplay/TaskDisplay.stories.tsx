import { Meta, StoryFn } from '@storybook/react';
import { DisplayTaskBox, CheckboxInput, LineThroughText } from "./TaskDisplay.style";

export default {
  title: 'Task Display',
  component: DisplayTaskBox,
  argTypes: {
    checked: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<{ checked: boolean }> = (args) => (
  <DisplayTaskBox>
    <CheckboxInput 
      type="checkbox" 
      checked={args.checked}
    />
    <span>
      {args.checked ? (
        <LineThroughText>Task 1</LineThroughText>
      ) : (
        'Task 1'
      )}
    </span>  
  </DisplayTaskBox>
);

export const DisplayTodo= Template.bind({});
DisplayTodo.args = {
  checked: true,
};


