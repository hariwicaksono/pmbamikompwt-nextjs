import React, { Component } from "react";
import Router from 'next/router';
import '../styles/globals.css';
import '../styles/styles.css';
import 'spin.js/spin.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

class App extends Component {
  constructor(props){
      super(props)
      this.state = {
          login:false
      }
  }

  Logout = () => {
      localStorage.setItem('isLogin','')
      localStorage.clear()
      this.setState({
          login:false
      })
  }

  componentDidMount = () => {
      //if (!localStorage.getItem('isLogin')) {
        //return( Router.push('/login') )
      //}
  }

  render() {
    const { Component, pageProps } = this.props;

    return (   
    <>
    <Component {...pageProps} />
    <ToastContainer />
    </>
    );
  }
}

export default App;