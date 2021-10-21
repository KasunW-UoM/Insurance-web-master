import './App.css';
import Navbar from './components/Navbar';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import User from './components/User';

function App() {
  return (

    <>
      <Router>

        <Navbar />

        <Switch>

          <Route path="/user" exact component={User} />

        </Switch>

      </Router>
      
    </>
  );
}

export default App;
