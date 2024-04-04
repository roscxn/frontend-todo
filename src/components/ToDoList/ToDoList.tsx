import styled from "styled-components";
import todos, { Todo } from "../../data/todos";

const DisplayBoxContainer = styled.div`
    max-height: 350px;
    overflow-y: auto;
`

const DisplayTaskBox = styled.div`
    font-size: 17px;
    display: flex;
    align-items: center;
    background-color: #f2f2f2;
    width: 485px;
    height: 50px;
    margin-top: 15px
`;

const ButtonDelete = styled.button`
    background-color: #e64d38;
    color: #ffffff;
    width: 49px;
    height: 100%;
    margin-left: auto;
    padding: 0 10px;
    border: 0px;
`

function ToDoList() {
    return (

            <DisplayBoxContainer>
                {todos.map((todo: Todo) => (
                    <DisplayTaskBox key={todo.id}>
                        <input type="checkbox" checked={todo.completed} />
                        <span>{todo.task}</span>
                        <ButtonDelete>X</ButtonDelete>
                    </DisplayTaskBox>
                ))}
            </DisplayBoxContainer>



       
    );
}

export default ToDoList;
