import React, { Component } from 'react';
import Route from 'next/router';
import {Container, Form, Button, Navbar, Nav, NavItem, NavDropdown} from 'react-bootstrap'

class NavBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            showMobile: true
        }
        this.toggleMobile = this.toggleMobile.bind(this)
    }

    Logout = () => {
        

    }

    toggleMobile = function() {
        this.setState({ showMobile: !this.state.showMobile });
      }

    componentDidMount = () => {
     
    }
    render() {
        
        return (
        <>
            <header className="app-header app-header-dark" style={{backgroundColor:'#f2f2f2'}}>
      
            <div className="top-bar">
            <div className="top-bar-brand">
            <Button onClick={this.props.toggleMenu} className="hamburger hamburger-squeeze mr-2" type="button" data-toggle="aside-menu" aria-label="toggle aside menu" style={{backgroundColor:'#563D7C'}}><span className="hamburger-box"><span className="hamburger-inner"></span></span></Button> 
            </div>

            <div className="top-bar-list">
            <div className="top-bar-item px-2 d-md-none d-lg-none d-xl-none">
              <Button onClick={this.toggleMobile} className="hamburger hamburger-squeeze" type="button" data-toggle="aside" aria-label="toggle menu" style={{backgroundColor:'#563D7C'}}><span className="hamburger-box"><span className="hamburger-inner"></span></span></Button>
            </div>
            </div>

            </div>
            </header>
            <aside className={this.state.showMobile ? 'app-aside app-aside-expand-md app-aside-light' : 'app-aside app-aside-expand-md app-aside-light show' }>
            {this.state.showMobile ?     
            <></>
            :
            <>
            <Button onClick={this.toggleMobile} type="button" className="btn btn-secondary float-right">
                X
            </Button>
            </>
            }
            <div className="aside-content">
         
            <header className="aside-header d-block d-md-none">

            <button className="btn-account" type="button" data-toggle="collapse" data-target="#dropdown-aside">
            Image
            </button>
           
            <div id="dropdown-aside" className="dropdown-aside collapse">
             
              <div className="pb-3">
                <a className="dropdown-item" href="user-profile.html"><span className="dropdown-icon oi oi-person"></span> Profile</a> <a className="dropdown-item" href="auth-signin-v1.html"><span className="dropdown-icon oi oi-account-logout"></span> Logout</a>
                <div className="dropdown-divider"></div><a className="dropdown-item" href="#">Help Center</a> <a className="dropdown-item" href="#">Ask Forum</a> <a className="dropdown-item" href="#">Keyboard Shortcuts</a>
              </div>
            </div>
            </header>
            <div className="aside-menu overflow-hidden">

            <nav id="stacked-menu" className="stacked-menu">
             
              <ul className="menu">
           
                <li className="menu-item has-active">
                  <a href="index.html" className="menu-link"><span className="menu-icon fas fa-home"></span> <span className="menu-text">Dashboard</span></a>
                </li>
                </ul>
                </nav>
            </div>
            
            </div>
            </aside>
            
        </>
        )
    }
}

export default NavBar;