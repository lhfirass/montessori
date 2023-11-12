import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Stars from './fpixelsWidgets/Stars';
import { useState } from 'react';
import Header from './header';
import Hero from './Hero';
import About from './About';
import Why from './Why';
import Testy from './Testy';
import Download from './Download';
import Contact from './Contact';

function App() {
  const [author, setText] = useState('المزيد عن المؤلفة');
  const [aColor, setColor] = useState('white');
  const [aBackgroundColor, setBackgroundColor] = useState('#222222');
  const handleClick = () => {
    alert('Button clicked!');
  };
  return (
    <Router>
      <Stars/>
      <div className="App">
      <Switch>
        {/*main landing page*/};
        <Route exact path="/">
          <Header />
          <Hero />
          <About />
          <Why />
          <Testy />
          <Download />
          <Contact />
        </Route>
        {/*end*/};
        {/*FPIXELS landing page*/};
        <Route  path="/fpixels">

        </Route>
        {/*end*/}
      </Switch>
      </div>
    </Router>
  );
}

export default App;
