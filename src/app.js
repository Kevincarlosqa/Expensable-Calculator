import Header from "./components/header";
import Container from "./components/container";
import CalendarDate from "./components/date";
import Display from "./components/display";
import Keyboard from "./components/keyboard";
import ContainerKeyboard from "./components/container-keyboard";
import CheckButton from "./components/check-button";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0)

  const [state, setState] = useState({
    prevNumber: null,
    currentNumber: null,
    operant: null
  })

  const setCurrentValue = (value) => {
    setState({
      ...state,
      currentNumber: state.currentNumber ? state.currentNumber + value : value,
    })
  }

  const setOperator = (value) => {
    setState({
      ...state,
      prevNumber: state.currentNumber,
      operant: value,
      currentNumber: null
    })
  }

  const handleClear = () => {
    setState({
      ...state,
      prevNumber: null,
      operant: null,
      currentNumber: null
    })
  }

  const handleCalculation = () => {
    switch(state.operant) {
      case "+":
        var result = parseFloat(state.prevNumber) + parseFloat(state.currentNumber)
        setState({
          ...state,
          prevNumber: null,
          operant: null,
          currentNumber: result
        });
        break
        case "-":
          result = parseFloat(state.prevNumber) - parseFloat(state.currentNumber)
          setState({
            ...state,
            prevNumber: null,
            operant: null,
            currentNumber: result
          })
        break
      default:
        break
    }
  }

  return (
    <Container>
      <Header />
      <Display state={state} />
      <ContainerKeyboard>
        <Keyboard value="÷" isOperator={true} onClick={() => setOperator("÷")}></Keyboard>
        <Keyboard value="1" onClick={() => setCurrentValue("1")}></Keyboard>
        <Keyboard value="2" onClick={() => setCurrentValue("2")}></Keyboard>
        <Keyboard value="3" onClick={() => setCurrentValue("3")}></Keyboard>
        <Keyboard value="<-"></Keyboard>
        <Keyboard value="x" isOperator={true} onClick={() => setOperator("x")}></Keyboard>
        <Keyboard value="4" onClick={() => setCurrentValue("4")}></Keyboard>
        <Keyboard value="5" onClick={() => setCurrentValue("5")}></Keyboard>
        <Keyboard value="6" onClick={() => setCurrentValue("6")}></Keyboard>
        <Keyboard value="C" onClick={handleClear}></Keyboard>
        <Keyboard value="-" isOperator={true} onClick={() => setOperator("-")}></Keyboard>
        <Keyboard value="7" onClick={() => setCurrentValue("7")}></Keyboard>
        <Keyboard value="8" onClick={() => setCurrentValue("8")}></Keyboard>
        <Keyboard value="9" onClick={() => setCurrentValue("9")}></Keyboard>
        <Keyboard value="+" isOperator={true} onClick={() => setOperator("+")}></Keyboard>
        <Keyboard value="cale"></Keyboard>
        <Keyboard value="0" onClick={() => setCurrentValue("0")}></Keyboard>
        <Keyboard value="."></Keyboard>
        <CheckButton onClick={handleCalculation}></CheckButton>
        <CalendarDate/>
      </ContainerKeyboard>
    </Container>
  );
}

export default App;
