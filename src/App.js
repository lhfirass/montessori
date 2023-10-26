import About from './About';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import FPIXELS from './FPIXELS';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        {/*main landing page*/};
        <Route exact path="/">
          <Header />
          <Hero />
          <About />
        </Route>
        {/*end*/};
        {/*FPIXELS landing page*/};
        <Route  path="/fpixels">
          <FPIXELS />
        </Route>
        {/*end*/}
      </Switch>
      </div>
    </Router>
  );
}

export default App;
