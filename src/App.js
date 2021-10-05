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
        {/* <Route path="/massage" exact component={Massage}/>
        <Route path="/software" exact component={Software}/>
        <Route path="/coach" exact component={Coach}/>
        <Route path="/hire" exact component={Hire}/> */}
        {/* <Route path="/email" exact component={Email}/> */}
      </Switch>
    </Router>
  );
}

export default App;
