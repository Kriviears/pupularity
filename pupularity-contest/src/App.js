import './App.css';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import SwipePage from './pages/SwipePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            
            <SwipePage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;