import React from 'react';
import Navbar from './components/Navbar';
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Page/Home';
import Reports from './components/Page/Reports';
import Products from './components/Page/Products';
import Team from './components/Page/Team';
import Message from './components/Page/Message';
import Support from './components/Page/Support';



function App(){
    return(
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/reports' component={Reports} />
                    <Route path='/products' component={Products} />
                    <Route path='/team' component={Team} />
                    <Route path='/message' component={Message} />
                    <Route path='/support' component={Support} />
                </Switch>
            </Router>
        </>
    )
}


export default App; 