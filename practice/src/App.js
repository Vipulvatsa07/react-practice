import './App.css';
import { Counter } from './Components/Basic/Counter';
import Todo from './Components/Todo/Todo';
import Toggle from './Components/Basic/Toggle';
import Apidata from './Components/Apifetch/Apidata';
import FetchApi from './Components/Apifetch/Fetch';
import Routing from './Components/RoutingLogin/Routing';
import Routingbas from './Components/Routingbasics/Routingbas';



function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
     {/* <Counter/> */}
     {/* <Toggle/> */}
     {/* <Todo/> */}
     {/* <Apidata/> */}
      {/* </header> */}
      {/* <FetchApi/> */}
      <Routing/>
      {/* <Routingbas/> */}
 
    </div>
  );
}

export default App;
