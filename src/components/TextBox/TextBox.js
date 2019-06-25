import styled from "styled-components"

const TextBox = styled.textarea`
  font-family: "Helvetica", sans-serif;
  padding: 0.5rem;
  font-size: 1rem;
  box-shadow: none;
  min-height: 5rem;
  width: auto;
  color: rgb(20, 23, 26);
  line-height: 1.25rem;
  border-radius: 0.5rem;
  border: 1px solid #e6ecf0;
  width: 31.25rem;
  resize: none;

  &:focus {
    box-shadow: 0 0 0 2pt #03A9F4;
    outline: none;
  }

  @media (max-width: 620px) {
    width: 100%;
  }
`

export default TextBox
