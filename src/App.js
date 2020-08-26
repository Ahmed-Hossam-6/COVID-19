import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import React,{Component} from 'react';

import { AiFillLinkedin } from 'react-icons/ai';
import Covid19 from './Componenet//Covid19'
import { FaFacebook } from 'react-icons/fa';
import Home from './Componenet/Home'

class App extends Component {
 

  render() {
    
    return (
      <Router>
      <div>
          <nav className="topnav ">
          <ul className=""></ul>
          <li><Link to={'/'} className="nav-link"> Home </Link></li>
          <li><Link to={'/src/Componenet/Covid19.js'} className="nav-link"> Covid19 </Link></li>
          </nav>
          <Switch>
              
              <Route exact path='/' component={Home} />
              <Route exact path='/src/Componenet/Covid19.js' component={Covid19} />
              </Switch>
        </div>
        <div className="navbar">
  <a href="https://www.facebook.com/profile.php?id=100014654559811"  target="_blank" rel="noopener noreferrer"><FaFacebook/></a>
  <a href="https://www.linkedin.com/in/ahmed-hossam-015bb114b/" target="_blank" className="link" rel="noopener noreferrer"><AiFillLinkedin/></a>
  <div className="contact" >Contact: 01114349352</div>
</div>
      </Router>
      
    )
  }
}
export default App;
