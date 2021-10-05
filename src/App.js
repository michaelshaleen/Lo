import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Nav from './Nav/Nav';
import Contact from './Contact/Contact';
import Services from './Services/Services';
import Landing from './Landing/Landing';
function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/contact" exact component={Contact}/>
        <Route path="/services" exact component={Services}/>
        <Route path="/" exact component={Landing}/>
      </Switch>
    </Router>
  );
}

export default App;
