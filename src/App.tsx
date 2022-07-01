import Home from './pages/Home';
import {TodosProvider} from "./context/TodoContext";

function App() {
  return (
    <div className="App">
      <TodosProvider>
        <Home />
      </TodosProvider>
    </div>
  );
}

export default App;
