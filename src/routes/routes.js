import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import Home from '../pages/Home'
import Register from '../pages/Register'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Switch>
    </Router>)
}


export default Routes