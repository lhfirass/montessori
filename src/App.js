import About from './About';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import FPIXELS from './FPIXELS';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Stars from './fpixelsWidgets/Stars';
import { useState } from 'react';
import ShitFile from './Shitfile';
import Why from './Why';
import Testemonial from './Testemonial';

function App() {
  const [author, setText] = useState('المزيد عن المؤلفة');
  const [aColor, setColor] = useState('white');
  const [aBackgroundColor, setBackgroundColor] = useState('#222222');
  const handleClick = () => {
    alert('Button clicked!');
  };
  return (
    <Router>
      <div className="App">
      <Stars/>
      <Switch>
        {/*main landing page*/};
        <Route exact path="/">
          <Header />
          <Hero />
          <About />
          <ShitFile />
          <div className="spacer"></div>
          <Why />
          <div className="spacer"></div>
          <Testemonial />
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
