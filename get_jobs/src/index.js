/**
 * 入口JS
 */
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import Register from './containers/register/register';
import Login from './containers/login/login';
import Main from './containers/main/main';
import store from './redux/store';
import Pulling from './components/pullingDown/pullingDown'

render((
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/register" component={Register}/>
                <Route path="/login" component={Login}/>
                <Route path="/pulling" component={Pulling}/>
                <Route component={Main}/>
            </Switch>
       </BrowserRouter> 
    </Provider>
),document.getElementById('root'));