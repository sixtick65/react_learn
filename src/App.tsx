import { useState } from 'react'
// import { useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassComponent from './test/ClassComponent.tsx';
import FunctionComponen from './test/functionComponent.tsx';
import { Header, Footer, Main } from './test/Components.tsx';

function App() {
  const [count, setCount] = useState(0);
  const txtLeave = 'leave';
  const txtEnter = 'enter';
  const [name, setName] = useState(txtLeave);


  return ( // 태그안의 내용은 JSX 문법으로 작성
    <> {/**  JSX에서는 한줄주석은 안된다. */}
    
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ClassComponent />
      <FunctionComponen />
      <Header name='My App'>hi</Header>
        {/* <Header /> */}
      <Main name='My Main' onClick={() => alert('clicked')}
        onMouseEnter={() => console.log('mouse enter')}
        onMouseLeave={() => console.log('mouse leave')}
        ><p>hello world</p></Main>
      <Footer name={'이름'} as='div' onClick={(e) => {console.log(e);}}
        onMouseEnter={() => setName(txtEnter)}
        onMouseLeave={() => setName(txtLeave)}
        >{name}</Footer>
      {/* <Footer/> */}
    </>
  )
}

export default App;
