import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Website</h1>
      </header>
      <main>
        <section>
          <h2>About</h2>
          <p>This is the about section.</p>
          <button onClick={() => setCount(count + 1)}>
            Clicked {count} times
          </button>
        </section>
        <section>
          <h2>Contact</h2>
       
          <p>This is the contact section.</p>
        </section>
      </main>
      <footer>
        <p>© 2024 My Website</p>
      </footer>
    </div>
  );
}
export default App;