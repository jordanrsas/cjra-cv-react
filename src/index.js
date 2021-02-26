import React from 'react';
import ReactDOM from 'react-dom';
import './fonts/Inconsolata-Light.ttf'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import CvNavbar from './components/Navbar'
import Home from './components/Home'
import Fotos from './components/Fotos'
import Blog from './components/Blog'

ReactDOM.render(
<React.StrictMode>
<Router>
<CvNavbar/>
      <div className="container App">
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/fotos" component={Fotos}/>
          <Route path="/blog" component={Blog}/>
          <Redirect to="/" />
      </Switch>
      </div>
</Router>
</React.StrictMode>, document.getElementById('root'));
registerServiceWorker();
