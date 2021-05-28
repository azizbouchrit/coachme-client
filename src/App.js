import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import stepper from './components/stepper/stepper';
import Finish from './components/finish/finish';
import { Redirect, Route, Switch, Router } from 'react-router';
import { createBrowserHistory } from 'history';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import MemberProfile from './components/MemberProfile/MemberProfile';
import CoachProfile from './components/CoachProfile/CoachProfile';
require('./App.less')

export const history = createBrowserHistory();


function App() {
  console.log("App.js re-rendered");
  return (
    <Router history={history}>

      <div className="App">
        <Navbar />
        <main className='main-container'>
          <Switch>
            <Redirect from="/" exact to="/home" />
            <Route path="/home" component={Home} />
            <Route path="/onboarding" component={stepper} />
            <Route path="/finish" component={Finish} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/coach/:username" component={CoachProfile} />
            <Route path="/member/:username" component={MemberProfile} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
