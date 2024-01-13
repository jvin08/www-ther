import styled from "styled-components";
import { GoSearch } from "react-icons/go";

const SubmitForm = styled.form`
  margin: 0;
  width: 185px;
  color: "lightgrey";
  background-color: #f6f6f6;
`;
const Button = styled.div`
  position: absolute;
  top: -2.8rem;
  left: 15.3rem;
  padding: 0;
  background-color: #f6f6f6;
  width: 20px;
  height: 20px;
  padding-left: 6px;
  padding-top: 4px;
  border-radius: 3px;
  cursor: pointer;
`;

const Input = styled.input`
  border: none;
  margin-left: 1rem;
  background-color: #f6f6f6;
  font-size: 0.75rem;
  padding: 0.5rem 0.8rem 0.6rem;
  &:focus {
    outline: none;
  }
`;
const InputHandler = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 0rem 1.7rem;
  background-color: #f6f6f6;
  border-radius: 3px;
`;

const SearchIcon = {
  color: "#050F32",
  marginLeft: "-1.5rem",
  backgroundColor: "#f6f6f6",
  cursor: "pointer"
};
const Text = styled.p`
  font-size: 0.85rem;
  line-height: 1rem;
  margin: 0;

  padding: 0;
  color: #050f32;
  cursor: pointer;
`;

const Form = ({
  handleSubmit,
  placeholder,
  error,
  handleChange,
  handleFahrenheit,
  fahrenheit,
  city
}) => {
  return (
    <InputHandler>
      <GoSearch style={SearchIcon} onClick={handleSubmit} />
      <SubmitForm onSubmit={handleSubmit}>
        <Input
          placeholder={error ? error : placeholder}
          value={city}
          onChange={handleChange}
        />
      </SubmitForm>
      <Button type="button" onClick={handleFahrenheit}>
        <Text>{fahrenheit ? "°F" : "°C"}</Text>
      </Button>
    </InputHandler>
  );
};
export default Form;
