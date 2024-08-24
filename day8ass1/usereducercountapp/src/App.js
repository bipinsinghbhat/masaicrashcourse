import logo from './logo.svg';
import './App.css';
import Counterapp from './components/Counterapp';
import ToggleTheme from './components/ToggleTheme';
import Visibilitytext from './components/Visibilityvalue';

function App() {
  return (
    <div className="App">
          <Counterapp/>
          <ToggleTheme/>
          <Visibilitytext/>
          </div>
  );
}

export default App;
