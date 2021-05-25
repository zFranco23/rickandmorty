import Home from "./pages/Home";
import InfoCharacter from "./pages/InfoCharacter";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,

} from 'react-router-dom';

function App() {
  return(
    <Router basename={process.env.PUBLIC_URL}>

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path= "/:name/:id" component = {InfoCharacter} />
        <Redirect exact to="/" />
      </Switch>
    </Router>   
  )
}

export default App;
