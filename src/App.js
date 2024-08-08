import './App.css';
import RegistrationForm from "./RegistrationForm";
import SignInOption from "./SignInOption";
import LoginForm from "./LoginForm";
import SignUpOption from "./SignUpOption";

function App() {
  return (
    <div className="App">
      <div className="FormContainer">
          <SignInOption></SignInOption>
          <RegistrationForm></RegistrationForm>
      </div>
    </div>
  );
}

export default App;
