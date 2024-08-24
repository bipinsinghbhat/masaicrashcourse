import logo from './logo.svg';
import './App.css';
import Counterapp from './components/Counterapp';
import ToggleTheme from './components/ToggleTheme';
import Visibilitytext from './components/Visibilityvalue';
import Formdata from './components/Formdata';
import Collegeform from './components/Collegeform';
import Formdataa from './components/localstorage';

function App() {
  return (
    <div className="App">
          <Counterapp/>
          <ToggleTheme/>
          <Visibilitytext/>
          <Formdata/>
          <Collegeform/>
          <Formdataa/>
          </div>
  );
}

export default App;
