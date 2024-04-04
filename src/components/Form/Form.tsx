import styled from 'styled-components';

const FormContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
`

const TextBox = styled.input `
    color: #ffffff; 
    font-size: 18px;
    width: 400px;
    height: 23px;
    padding: 12px;
    border-radius: 3px;
    border: 1px solid #D0D0D0;
`

const ButtonSubmit = styled.button `
    background-color: #8d4be4;
    color: #ffffff;
    width: 50px;
    height: 50px;
    font-size: 40px;
    border-radius: 3px;
    border: none;
    margin-left: 10px;
`

function Form() {
    return (
        <div>
            <h1>Todo App</h1>
                <form>
                    <FormContainer>
                        <TextBox 
                            type="text"
                            placeholder="Add your new todo"
                            name="name"
                        />
                        <ButtonSubmit type="submit">+</ButtonSubmit>
                    </FormContainer>
                </form>
     
        </div>
    )
}

export default Form;