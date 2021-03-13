import { BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import SideBar from './Components/SideBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <h1 className='titre'>Curriculum Vitae</h1>
      <BrowserRouter>
          <Route path="/" component={NavBar} />
          <Route path="/" component={SideBar} />
        
      </BrowserRouter>
    </div>
  );
}

export default App;
