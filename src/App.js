import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import NotFound from './components/NotFound'
import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/ebank/login" component={LoginForm} />
    <Route path="/bad-path" component={NotFound} />
  </Switch>
)

export default App
