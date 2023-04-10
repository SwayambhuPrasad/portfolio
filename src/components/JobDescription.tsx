import styled from "styled-components";

const Header = styled.h1`
  font-weight: 1400;
  font-size: 40px;
  color: ${(props) => props.theme.fontSecondary}; ;
`;
const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const JobDescription: React.FC = () => {
  return (
    <DescriptionBox>
      <Header>Front-End</Header>
      <Header>Developer</Header>
    </DescriptionBox>
  );
};
