import './App.css';
import Home from './component/Home/Home';
import CountryDetails from './component/CountryDetail/CountryDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './component/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path="/home">
         <Home />
        </Route>

        <Route exact path="/">
           <Home/>
        </Route>

        <Route path="/country/:name">
          <CountryDetails/>
        </Route>

        <Route path="*">
          <NotFound/>
        </Route>

      </Switch>
    </Router>
    </div>
  );
}

export default App;
