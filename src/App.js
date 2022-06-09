import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Routing from './React-router/Routing';

AOS.init()
const App = () => {
  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;
