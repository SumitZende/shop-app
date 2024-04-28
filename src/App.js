import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import { useRoutes } from 'react-router-dom';
import { routes } from './routes.js';


function App() {
  const element =useRoutes(routes)
  return (
    <div className="App">
      <Header/>
      {element}
    </div>
  );
}

export default App;
