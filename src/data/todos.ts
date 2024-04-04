export interface Todo {
    id: number;
    task: string;
    completed: boolean;
}

const todos: Todo[] = [
    { id: 1, task: 'Buy a new gaming laptop', completed: false },
    { id: 2, task: 'Complete a previous task', completed: true },
    { id: 3, task: 'Create video for YouTube', completed: false },
    { id: 4, task: 'Create a new portfolio site', completed: true },
    { id: 5, task: 'Create a new site', completed: true },
    { id: 6, task: 'Create a new site', completed: true },
    { id: 7, task: 'Create a new site', completed: true }



];

export default todos;