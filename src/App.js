import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


import Header from './components/header';
import Footer from './components/footer';
import List from './pages/List/components';
import Main from './pages/Main';
import Room from './pages/Room';

import './styles.less';

export default function App() {
    return (
            <Router>
                <div>
                    <Header/>
                    <Switch>
                        <Route path="/list">
                            <List />
                        </Route>
                        <Route path="/room/:id">
                            <Room />
                        </Route>
                        <Route path="/">
                            <Main />
                        </Route>
                    </Switch>
                    <Footer/>
                </div>
            </Router>
    );
}





