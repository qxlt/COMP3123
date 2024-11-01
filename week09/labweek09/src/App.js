import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <body>
      <h1>
          Welcome to Fullstack Development - I
        </h1>
        <h2>
          React JS Programming Week09 Lab Exercise
        </h2>
        <div className="p">
          <p>101415216</p>
          <p>Qinxi Liu</p>
          <p>George Brown College</p>
        </div>
      </body>
    </div>
  );
}

export default App;
