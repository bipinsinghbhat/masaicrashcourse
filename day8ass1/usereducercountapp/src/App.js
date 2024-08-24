import logo from './logo.svg';
import './App.css';
import Counterapp from './components/Counterapp';
import ToggleTheme from './components/ToggleTheme';
import Visibilitytext from './components/Visibilityvalue';
import Formdata from './components/Formdata';

function App() {
  return (
    <div className="App">
          <Counterapp/>
          <ToggleTheme/>
          <Visibilitytext/>
          <Formdata/>
          </div>
  );
}

export default App;
