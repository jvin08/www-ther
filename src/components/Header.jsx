import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding-left: 4rem;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid #f6f6f6;
`;
const Title = styled.h1`
  width: 60%;
  margin: 0;
`;

const Text = styled.p`
  line-height: 1rem;
  font-size: 0.59rem;
  width: 30%;
  margin: 0;
`;

const Header = () => {
  return (
    <Container>
      <Title>
        Here you can find a word <br />
        wide weather forecast
      </Title>

      <Text>
        Contented get distrusts certainty nay are frankness concealed ham.
        <br /> On unaffected resolution on considered of. No thought me husband
        or
        <br /> colonel forming effects. End sitting shewing who saw besides son
        <br /> musical adapted. Contrasted interested eat alteration pianoforte
        <br /> sympathize was.
      </Text>
    </Container>
  );
};

export default Header;
