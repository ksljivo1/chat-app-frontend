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

/*document.getElementByClassName('sign-in-option__btn').onclick = () => {
    document.head.appendChild(Object.assign(document.createElement('link'), { rel: 'stylesheet', href: 'AnimationRight.css' }));
};*/

export default App;
