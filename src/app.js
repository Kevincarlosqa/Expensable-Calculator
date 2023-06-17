import Header from "./components/header";
import Container from "./components/container";
import CalendarDate from "./components/date";
import Display from "./components/display";
import Keyboard from "./components/keyboard";
import ContainerKeyboard from "./components/container-keyboard";
import CheckButton from "./components/check-button";

function App() {
  // const [number, setNumber] = React.useState(0)
  return (
    <Container>
      <Header>Hello</Header>
      <Display>fdsa</Display>
      <ContainerKeyboard>
        <Keyboard value="1"></Keyboard>
        <Keyboard value="2"></Keyboard>
        <Keyboard value="3"></Keyboard>
        <Keyboard value="4"></Keyboard>
        <Keyboard value="5"></Keyboard>
        <Keyboard></Keyboard>
        <Keyboard></Keyboard>
        <Keyboard></Keyboard>
        <CheckButton></CheckButton>
      </ContainerKeyboard>
      <CalendarDate>wewe</CalendarDate>
    </Container>
  );
}

export default App;
