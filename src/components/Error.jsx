
import styled from "styled-components";

const ErrorMessage = styled.h2`
  color: hsl(205, 78%, 60%);
  font-size: 2rem;
`;

const Error = () => {
  return <ErrorMessage>Ops! There might be connection issues...</ErrorMessage>;
};

export default Error;
