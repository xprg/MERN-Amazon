import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">Amazon App</header>
      <main>
        <p>Who do you love??? 😊😊</p>
        <button>Divya</button>
        <button
          onClick={() => {
            alert('I love you!')
          }}
        >
          Divya
        </button>
      </main>
      <footer>All rights reserved</footer>
    </div>
  )
}

export default App
