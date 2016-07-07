import * as React from 'react';
import SearchForm from './_SearchForm';
import {Cursor} from "immutable/contrib/cursor";
import SharedContext from '../../context';
import * as access from './accessors';
import {Link} from 'react-router';

class Logo extends React.Component<any,any>{
    render(){
        return (
            <div className="navbar-header">
                <a href="#/" className="navbar-brand">
                    <div className="brand-logo">
                        <img src="/assets/img/logo.png" alt="App Logo" className="img-responsive"/>
                    </div>
                    <div className="brand-logo-collapsed">
                    </div>
                </a>
            </div>
        )
    }
}
class LeftNavBar extends React.Component<any,any>{
    render(){
        return (
            <ul className="nav navbar-nav">
                <li>
                    <a href="#" data-toggle-state="aside-collapsed" className="hidden-xs">
                        <em className="fa fa-navicon"></em>
                    </a>
                    <a href="#" data-toggle-state="aside-toggled" data-no-persist="true" className="visible-xs sidebar-toggle">
                        <em className="fa fa-navicon"></em>
                    </a>
                </li>
                <li className="top-search">
                    <input type="text" className="top-input-search" placeholder="Selectează angajat" />
                </li>
            </ul>
        )
    }
}

class Notifications extends React.Component<any,any>{
    render(){
        return (
            <li className="dropdown dropdown-list notifications">
                <a href="#" data-toggle="dropdown">
                    <em className="icon-bell"></em>
                    <div className="label label-danger">11</div>
                </a>
                <ul className="dropdown-menu animated flipInX">
                    <li>
                        <div className="list-group">
                            <a href="#" className="list-group-item">
                                <div className="media-box">
                                    <div className="pull-left">
                                        <em className="fa fa-twitter fa-2x text-info"></em>
                                    </div>
                                    <div className="media-box-body clearfix">
                                        <p className="m0">New followers</p>
                                        <p className="m0 text-muted">
                                            <small>1 new follower</small>
                                        </p>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="list-group-item">
                                <div className="media-box">
                                    <div className="pull-left">
                                        <em className="fa fa-envelope fa-2x text-warning"></em>
                                    </div>
                                    <div className="media-box-body clearfix">
                                        <p className="m0">New e-mails</p>
                                        <p className="m0 text-muted">
                                            <small>You have 10 new emails</small>
                                        </p>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="list-group-item">
                                <div className="media-box">
                                    <div className="pull-left">
                                        <em className="fa fa-tasks fa-2x text-success"></em>
                                    </div>
                                    <div className="media-box-body clearfix">
                                        <p className="m0">Pending Tasks</p>
                                        <p className="m0 text-muted">
                                            <small>11 pending task</small>
                                        </p>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="list-group-item">
                                <small>More notifications</small>
                                <span className="label label-danger pull-right">14</span>
                            </a>
                        </div>
                    </li>
                </ul>
            </li>
        )
    }
}


interface IUserInfoState {
    name:Cursor,
    role:Cursor,
    img:Cursor,
}

class UserInfo extends React.Component<any,IUserInfoState>{
    constructor(){
        super();
    }

    update(state){
        this.setState(state);
    }

    componentWillMount(){
        SharedContext.subscribe((cursor) => {

            const userInfo = access.userInfo(cursor);
            if (!userInfo) {
                return;
            }
            this.update(
                {
                    name: userInfo.get('name'),
                    role: userInfo.get('role'),
                    img: userInfo.get('img')
                });
        });
    }

    render(){
        // TODO: refactor this component
        if (!this.state) {
            return null;
        }
        return (
            <li className="user-info">
                <a href=""  className="role dropdown-toggle">
                    <img src={this.state.img} alt="User image" className="img-circle img-thumbnail" width="60" height="60"/>
                    <span className="username">{this.state.name}</span>
                    <span>{this.state.role}</span>
                    <span className="arrow"></span>
                </a>
            </li>
        )
    }
}

class RightNavBar extends React.Component<any,any>{
    render(){
        return (
            <ul className="nav navbar-nav navbar-right">
                <Notifications/>
                <UserInfo/>
            </ul>
        )
    }
}

export default class Header extends React.Component<any,any>{
    render(){
        return(
            <header>
                <nav role="navigation" className="navbar topnavpar">
                    <Link
                        to="/"
                        className="navbar-brand">The Business App
                    </Link>
                </nav>
            </header>
        )
    }
}