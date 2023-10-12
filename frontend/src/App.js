import logo from './logo.svg';
import Layouts from './components/Layouts';
import './App.css';
import './styles/global.css';

function App() {
  return (
    <Layouts>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Layouts>
  );
}

export default App;
