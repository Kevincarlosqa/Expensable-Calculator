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
        <Keyboard value="/" isOperator={true}></Keyboard>
        <Keyboard value="1"></Keyboard>
        <Keyboard value="2"></Keyboard>
        <Keyboard value="3"></Keyboard>
        <Keyboard value="<-"></Keyboard>
        <Keyboard value="x"></Keyboard>
        <Keyboard value="4"></Keyboard>
        <Keyboard value="5"></Keyboard>
        <Keyboard value="6"></Keyboard>
        <Keyboard value="C"></Keyboard>
        <Keyboard value="-"></Keyboard>
        <Keyboard value="7"></Keyboard>
        <Keyboard value="8"></Keyboard>
        <Keyboard value="9"></Keyboard>
        <Keyboard value="+"></Keyboard>
        <Keyboard value="cale"></Keyboard>
        <Keyboard value="0"></Keyboard>
        <Keyboard value="."></Keyboard>
        <CheckButton></CheckButton>
      </ContainerKeyboard>
      <CalendarDate>wewe</CalendarDate>
    </Container>
  );
}

export default App;
