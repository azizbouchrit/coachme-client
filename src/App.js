// import './App.less';
import { Redirect, Route, Switch } from 'react-router';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home/Home';
import stepper from './components/stepper/stepper';
import Finish from './components/finish/finish';
require('./App.less')

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className='main-container'>
        <Switch>
        <Redirect from="/" exact to="/home" />
        <Route path="/home" exact component={Home} />
        <Route path="/onboarding" exact component={stepper} />
        <Route path="/finish" exact component={Finish} />


        </Switch>
      </main>
    </div>
  );
}

export default App;
