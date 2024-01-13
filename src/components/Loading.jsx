import React from "react";
import styled from "styled-components";

const LoadingSpinner = styled.div`
  width: 6rem;
  height: 6rem;
  margin: 0 auto;
  margin-top: 10rem;
  border-radius: 50%;
  border: 3px solid #ccc;
  border-top-color: hsl(205, 78%, 60%);
  animation: spinner 0.6s linear infinite;
`;

const Loading = () => {
  return <LoadingSpinner></LoadingSpinner>;
};

export default Loading;
