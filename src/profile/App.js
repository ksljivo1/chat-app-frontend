import './App.css';
import RegistrationForm from "./RegistrationForm";
import SignInOption from "./SignInOption";
import LoginForm from "./LoginForm";

function App() {
  return (
    <div className="App">
      <div className="FormContainer">
          <SignInOption></SignInOption>
          <LoginForm></LoginForm>
          <RegistrationForm></RegistrationForm>
      </div>
    </div>
  );
}

export default App;
