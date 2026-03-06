import './App.css'
import TodoList from './wigets/TodoList';

function App() {

  return ( // 태그안의 내용은 JSX 문법으로 작성
    <> {/**  JSX에서는 한줄주석은 안된다. */}
      <TodoList />
    </>
  )
}

export default App;
