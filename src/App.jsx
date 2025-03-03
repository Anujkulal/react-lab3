import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [step, setStep]  = useState(1)

  const increase = () => setCount(count + step);

  const decrease = () => setCount(count - step >= 0 ? count - step : 0);

  const reset = () => setCount(0);
  return (
    <>
     <div style={styles.container}>
      <h1>Counter App</h1>
      <h2>Counter value: {count}</h2>
      <input style={styles.input} type="number" value={step} onChange={(e) => setStep(Number(e.target.value))} />
      <div style={styles.btns}>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
      </div>
      <button style={styles.reset} onClick={reset}>Reset</button>

     </div>
    </>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '70vh',
    gap: '1rem',
    backgroundColor: '#3c3c3c',
    padding: '1rem',
    borderRadius: '10px',
  },
  reset: {
    backgroundColor: 'red',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer'
  },
  btns: {
    display: 'flex',
    gap: '1rem'
    },
  input: {
    padding: '0.5rem',
    borderRadius: '5px',
    border: 'none',
    outline: 'none'
  }
}


export default App
