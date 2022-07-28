import { BrowserRouter as Router } from 'react-router-dom';
import ApplicationRoutes from './Routes/ApplicationRoutes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <ApplicationRoutes/>
      </Router>
    </div>
  );
}

export default App;
