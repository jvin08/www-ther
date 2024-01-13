import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  width: 30px;
  height: 30px;
  margin: 0 1rem 0 5rem;
`;
const HeaderBox = styled.div``;
const Title = styled.h2`
  font-size: 0.7rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 0.15rem;
`;
const Text = styled.p`
  font-size: 0.6rem;
  margin: 0;
`;

const Logo = () => {
  return (
    <div>
      <Container>
        <Image
          src="https://raw.githubusercontent.com/jvin08/weatherAPP/main/logo.png"
          alt="logo"
        />
        <HeaderBox>
          <Title>ByForecast</Title>
          <Text>Find the perfect weather</Text>
        </HeaderBox>
      </Container>
    </div>
  );
};

export default Logo;
