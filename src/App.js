import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "./components/Home"
import './App.css';
import Header from "./components/Header";
import Projects from "./components/Projects"
import About from './components/About Us'
const App = () => (
  <BrowserRouter>
  <Header /> 
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/about-us" component={About} />
  </Switch>
  </BrowserRouter>
)
export default App;
