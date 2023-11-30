import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
    let [state, setState] = useState(0);
    const [state2, setState2] = useState('Hat');
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    {state2} <code>src/App.js</code> {state2}.
                </p>
                <button className={'button'} onClick={() => setState2(state2 + '1')} style={{
                    color: 'red',
                    fontFamily: "monospace",
                    fontSize: 50,
                    backgroundColor: 'blue'
                }}>{state2}</button>
                <button className={'button'} onClick={() => {
                    setState(state + 1)
                    if (state === 10) {
                        setState(state * state);
                        setState2('It\'s great')
                    }
                }} style={{
                    color: 'yellow',
                    fontFamily: "monospace",
                    fontSize: 50,
                    backgroundColor: 'red'
                }}>{state}</button>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {state2}
                </a>
            </header>
        </div>
    );
}

export default App;
