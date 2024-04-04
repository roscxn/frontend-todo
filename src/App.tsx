import styled from 'styled-components';
import Form from "./components/Form/Form"
import ToDoList from "./components/ToDoList/ToDoList"

const Theme = styled.div`
  background: linear-gradient(#64d8d1, #4e8fe3);
  min-height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Helvetica', sans-serif;
  color: #000000;
  letter-spacing: 0.2px;
`;

const FormBackground = styled.div`
  background-color: #FFFFFF;
  width: 500px;
  height: 70vh;
  padding: 30px;
  margin: 0;
  border-radius: 8px;
`;

function App() {
  
  return (
    <Theme>
      <FormBackground>
        <Form/>
        <ToDoList/>
      </FormBackground>
    </Theme>
  )
}

export default App
