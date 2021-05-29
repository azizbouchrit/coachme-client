// import './App.less';
import { Redirect, Route, Switch } from "react-router";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import ProgramPage from "./components/ProgramPage/ProgramPage";

require("./App.less");

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-container">
        <Switch>
          <Redirect from="/" exact to="/home" />
          <Route path="/home" exact component={Home} />
          <Route path="/programs/:id" exact component={ProgramPage} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
