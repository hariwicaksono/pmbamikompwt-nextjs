import React, { Component } from 'react';
import Link from 'next/link';
import Route from 'next/router';
import {Container, Form, Button, Navbar, Nav, NavItem, NavDropdown} from 'react-bootstrap';
import {MdArrowBack} from 'react-icons/md';
import Search from './search';
import { logout, isLogin } from '../libs/Util'

class NavBar extends Component {
    constructor(props){
        super(props)
        this.state = {
          login: false,
          showMobile: true
        }
        this.toggleMobile = this.toggleMobile.bind(this)
    }

    Logout = () => {
      logout();
    }

    toggleMobile = function() {
        this.setState({ showMobile: !this.state.showMobile });
      }

    componentDidMount = () => {
      if (isLogin()) {
        //console.log('LOGIN')
        const data = JSON.parse(localStorage.getItem('isLogin'))
        const id = data[0].email
     } else {
         this.setState({
             login:true
         })
     }
    }
    render() {
        
        return (
        <>
        <header className="app-header">
        {this.props.toggleBack ? 
          <Navbar className="shadow-sm" variant="light" expand="lg" fixed="top" style={{backgroundColor:'#fff'}}>
          <Container>

          <Navbar.Brand > 
          <Link href="/">
            <a className="hamburger hamburger-squeeze"><MdArrowBack size="1.4rem"/></a>
            </Link>
          </Navbar.Brand>

          <Navbar.Collapse id="basic-navbar-nav">
              
            <Search/>   

            <Nav>
              
              {this.state.login ?
              <>
              <Link href="/login" passHref>
              <Button variant="info">Daftar/Masuk</Button>
              </Link>
              </>
            :
            
            <NavDropdown title=
            {this.state.foto ? (
              <>
              <img
                  alt="Foto"
                  width="30"
                  className="rounded-circle"
                  src={this.state.url+this.state.foto} />
              </>
                  ) : (
              <>
              <img
                  alt="Foto"
                  width="30"
                  className="rounded-circle"
                  src={this.state.url+'no-photo.jpg'} />
              </>
              )} id="basic-nav-dropdown" alignRight>
              <NavDropdown.Item >Akun</NavDropdown.Item>
              <NavDropdown.Item onClick={this.Logout} href=''>Keluar</NavDropdown.Item>
              </NavDropdown>

              }
              </Nav>

          </Navbar.Collapse>
          <div className="d-md-none d-lg-none d-xl-none">
          <Button onClick={this.toggleMobile} className="hamburger hamburger-squeeze float-left" type="button" data-toggle="aside" aria-label="toggle menu" style={{backgroundColor:'#563D7C'}}><span className="hamburger-box"><span className="hamburger-inner"></span></span></Button>
          </div>
          </Container>
          </Navbar>
        :

      <Navbar className="shadow-sm" variant="dark" expand="lg" fixed="top" style={{backgroundColor:'#371260'}}>
      <Container>

      <Navbar.Brand > 
      <Link href="/" passHref>
      <a><img src="/images/logo.png" width="200" /></a>
    </Link>
      </Navbar.Brand>

      <Navbar.Collapse id="basic-navbar-nav">
          <Nav>  
          {this.state.login ?
            <>
            </>
            :
            <NavDropdown title={'Menu User'} id="basic-nav-dropdown">
              <NavDropdown.Item>Dashboard</NavDropdown.Item>
              <NavDropdown.Item >Form Pendaftaran</NavDropdown.Item>
              <NavDropdown.Item >Upload Dokumen</NavDropdown.Item>
              <NavDropdown.Item >Akun</NavDropdown.Item>
        </NavDropdown>
          }    

          <NavDropdown title="Menu Utama" id="basic-nav-dropdown">
          <NavDropdown.Item >Alur Pendaftaran</NavDropdown.Item>
          <NavDropdown.Item >Jenis Pendaftaran</NavDropdown.Item>
          <NavDropdown.Item >Syarat Pendaftaran</NavDropdown.Item>
          <NavDropdown.Item >Prosedur Pendaftaran</NavDropdown.Item>
          
          <NavDropdown.Item>Beasiswa - Beasiswa</NavDropdown.Item>
          <NavDropdown.Item>Tata Tertib Penerimaan Mahasiswa Baru</NavDropdown.Item>
          <NavDropdown.Item>Kegiatan Pra Kuliah Mahasiswa Baru</NavDropdown.Item>
          </NavDropdown>

        </Nav> 

        <Search/>   

        <Nav>
          
          {this.state.login ?
          <>
          <Link href="/login" passHref>
          <Button variant="info" activeClassName="active">Daftar/Masuk</Button>
          </Link>
          </>
        :
        
        <NavDropdown title=
        {this.state.foto ? (
          <>
          <img
              alt="Foto"
              width="30"
              className="rounded-circle"
              src={this.state.url+this.state.foto} />
          </>
              ) : (
          <>
          <img
              alt="Foto"
              width="30"
              className="rounded-circle"
              src={this.state.url+'no-photo.jpg'} />
          </>
          )} id="basic-nav-dropdown" alignRight>
          <NavDropdown.Item >Akun</NavDropdown.Item>
          <NavDropdown.Item onClick={this.Logout} href=''>Keluar</NavDropdown.Item>
          </NavDropdown>

          }
          </Nav>

      </Navbar.Collapse>
      <div className="d-md-none d-lg-none d-xl-none">
      <Button onClick={this.toggleMobile} className="hamburger hamburger-squeeze float-left" type="button" data-toggle="aside" aria-label="toggle menu" style={{backgroundColor:'#563D7C'}}><span className="hamburger-box"><span className="hamburger-inner"></span></span></Button>
      </div>
      </Container>
      </Navbar>
        
      } 
        
          </header>

            <aside className={this.state.showMobile ? 'app-aside' : 'app-aside app-aside-expand-md app-aside-light show' }>
            {this.state.showMobile ?     
            <></>
            :
            <>
            <Button onClick={this.toggleMobile} type="button" className="btn btn-secondary float-right">
                X
            </Button>
            
            </>
            }
            <div className="aside-content d-md-none d-lg-none d-xl-none">
         
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