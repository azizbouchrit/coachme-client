// import './App.less';
import { Redirect, Route, Switch } from 'react-router';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home/Home';
require('./App.less')

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className='main-container'>
        <Switch>
        <Redirect from="/" exact to="/home" />
        <Route path="/home" exact component={Home} />

        </Switch>
      </main>
    </div>
  );
}

export default App;
