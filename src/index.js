import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/header'
import Footer from './components/footer'
import Vote from './components/vote'
import ElectionAnalysis from './components/electionAnalysis'
import LoginRegister from './components/loginRegister';

ReactDOM.render(
  <React.StrictMode>
       <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/vote" component={Vote} />
        <Route path="/analysis" component={ElectionAnalysis} />
        <Route path ="/login" component ={LoginRegister} />
      </Switch>
      <Footer/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


