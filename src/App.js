import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from  '../src/components/Navigation';

// pages
import Tab1 from './pages/Tab1/index';
import Tab2 from './pages/Tab2/index';

function App() {
  return (
    <Router>
    <Navigation/>
    <Switch>
      <Route path="/tab1">
        <Tab1/>
      </Route>
      <Route path="/tab2">
        <Tab2/>
      </Route>
      <Route path="/">
        <Tab1/>
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
