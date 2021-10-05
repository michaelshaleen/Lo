import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Nav from './Nav/Nav';
import Contact from './Contact/Contact';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/contact" exact component={Contact}/>
        {/* <Route path="/email" exact component={Email}/> */}
      </Switch>
    </Router>
  );
}

export default App;
