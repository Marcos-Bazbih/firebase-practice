import './App.css';
import LoginButton from './components/features/login-button/Login-button';
import LogoutButton from './components/features/logout-buuton/Logout-button';
import FirebaseContextProvider from './contexts/firebase-context';

const App = () => {
  return (
    <div className="App">
      <h1>Firebase App</h1>
      <FirebaseContextProvider>
        <LoginButton />
        <LogoutButton />
      </FirebaseContextProvider>
    </div>
  );
}

export default App;