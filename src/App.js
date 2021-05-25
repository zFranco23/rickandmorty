import Home from "./page/Home";
import InfoCharacter from "./page/InfoCharacter";

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from 'react-router-dom';

function App() {
  return(
    <Router>

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path= "/:name/:id" component = {InfoCharacter} />
      </Switch>
    </Router>   
  )
}

export default App;
