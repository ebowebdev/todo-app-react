import TodoList from './components/TodoList';
import {Provider} from './components/Context';
import Form from './components/Form';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Provider>
      <div className="App">
        <Header />
        <Form />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
