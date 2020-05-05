import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import './styles.less';

import Header from './Header';
import List from './pages/List';
import Main from './pages/Main';
import Room from './pages/Room';

export default function App() {
    return (
        <Router>
            <div>
                <Header/>
                <Switch>
                    <Route path="/list">
                        <List />
                    </Route>
                    <Route path="/room">
                        <Room />
                    </Route>
                    <Route path="/">
                        <Main />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}





