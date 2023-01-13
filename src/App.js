import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom'
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Outlet />
      <Header/>
    </div>
  );
}

export default App;
