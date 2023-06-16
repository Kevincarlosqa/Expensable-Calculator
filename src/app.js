import Header from "./components/header";
import Container from "./components/container";
import CalendarDate from "./components/date";
import Display from "./components/display";
import Keyboard from "./components/keyboard";
import ContainerKeyboard from "./components/container-keyboard";

function App() {
  return (
    <Container>
      <Header>Hello</Header>
      <Display>fdsa</Display>
      <ContainerKeyboard><Keyboard></Keyboard><Keyboard></Keyboard><Keyboard></Keyboard><Keyboard></Keyboard><Keyboard></Keyboard><Keyboard></Keyboard><Keyboard></Keyboard><Keyboard></Keyboard></ContainerKeyboard>
      <CalendarDate>wewe</CalendarDate>
    </Container>
  );
}

export default App;
