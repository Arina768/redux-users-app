import React from "react";
import {Route, Switch} from "react-router-dom";

import CreateUser from "./components/createUserPage";
import UsersList from "./components/usersList";
import {PageNotFound} from './components/PageNotFound';
import ChangeUser from './components/changeUserPage';


export const Content = () => (
    <section>
        <Switch>
            <Route path="/" exact component={CreateUser}/>
            <Route path="/list" component={UsersList}/>
            <Route path="/changeinfo" component={ChangeUser}/>
            <Route component={PageNotFound}/>
        </Switch>
    </section>
);
