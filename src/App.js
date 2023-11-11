import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Stars from './fpixelsWidgets/Stars';
import { useState } from 'react';
import Header from './header';
import Hero from './Hero';

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
