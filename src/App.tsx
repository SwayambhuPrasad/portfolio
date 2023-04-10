import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { Container } from "./components/Container";
import { JobDescription } from "./components/JobDescription";

const theme = {
  background: "white",
  font: "#2d2e32",
  fontSecondary: "#7364D0",
};
const ContainerBox = styled.div`
  background-color: ${(props) => props.theme.background};
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ContainerBox>
        <Container>
          <JobDescription />
        </Container>
      </ContainerBox>
    </ThemeProvider>
  );
}

export default App;
