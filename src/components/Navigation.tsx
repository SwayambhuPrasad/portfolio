import styled from "styled-components";

const NavigationBox = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.background};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.09);
  display: flex;
  font-size: 1.7rem;
  height: auto;
  justify-content: space-between;
  left: 0;
  padding: 25px 40px 25px 50px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 200;
`;
const Name = styled.div`
  color: ${(props) => props.theme.font};
`;

export const Navigation: React.FC = () => {
  return (
    <NavigationBox>
      <Name>Swayambhu.dev</Name>
    </NavigationBox>
  );
};
