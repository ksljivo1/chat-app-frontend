import logo from './logo.svg';
import './App.css';
import RegistrationForm from "./RegistrationForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to ChatApp
        </p>
          <RegistrationForm ></RegistrationForm>
      </header>
    </div>
  );
}

export default App;
