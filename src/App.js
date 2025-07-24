import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';

function App() {

  const name = "Dat";
  const age = 18;
  const isfemale = true;
  const student = {
    name: 'easy frontend'
  };
  const colorList = ['red', 'green', 'blue']

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <MyComponent />
        </p>
        <p> xin chao {name} - {age}</p>

        {isfemale ? <p>Male</p> : <p>Femal</p>}

        <ul>
          {colorList.map(color => (
            <li style={{ color }}>{color}</li>
          ))}
        </ul>

      </header>
    </div>
  );
}

export default App;
