import React from 'react';
import { Route } from 'react-router-dom';
import PlaceList from './containers/PlaceListView';
import PlaceDetail from './containers/PlaceDetailView';
import Login from './containers/Login';
import Signup from './containers/Signup';
import JPM from './containers/jpm';
import MS from './containers/ms';
import StudentList from './containers/students';
import Home from './containers/home';
import Quantiphi from './containers/quantiphi';
import Google from './containers/google';
import Companies from './containers/companies';
import CommentList from './containers/CommentListView';
import CommentDetail from './containers/CommentDetailView';
const BaseRouter = () => (
    <div>
        <Route exact path='/companies' component={Companies} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/student' component={StudentList} />
        <Route exact path='/quantiphi' component={Quantiphi} />
        <Route exact path ='/google' component={Google} />
        <Route exact path='/ms' component={MS} />
        <Route exact path='/jpm' component={JPM} />
        <Route exact path='/place' component={PlaceList} />
        <Route exact path='/places/:placeID/' component={PlaceDetail} />
        <Route exact path='/login' component={Login} />{" "}
        <Route exact path='/signup/' component={Signup} />{" "}
        <Route exact path='/comment' component={CommentList} />{" "}
        <Route exact path='/comments/:commentID' component={CommentDetail} />{" "}
    </div>
);

export default BaseRouter;