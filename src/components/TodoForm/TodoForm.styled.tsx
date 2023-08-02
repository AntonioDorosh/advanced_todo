import styled from "styled-components";

export const TodoFormStyled = styled.form`
  display: flex;
  flex-wrap: wrap;
`

export const TodoFormLabel = styled.label`
  width: 100%;
  margin: 0 0 0.5rem 0;
`

export const TodoFormInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #fff;
  border-radius: 0.5rem;
  margin: 0 0.5rem 0.5rem 0;
  font-size: 1rem;
  color: #000;
  background-color: #F7F1F1;
`

export const TodoFormButton = styled.button`
  padding: 0.5rem;
  border: 1px solid #fff;
  border-radius: 0.5rem;
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  color: #fff;
  background-color: transparent;
  cursor: pointer;
  font-weight: 700;
  letter-spacing: 0.1rem;
  flex: 1 1 auto;

  &:hover {
    background-color: #00FF00;
    transition: 0.3s ease-in-out;
  }
`