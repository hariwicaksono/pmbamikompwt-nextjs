import React, {Component} from 'react';
import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout';
import {Container, Row, Col, Carousel, Card, Button} from 'react-bootstrap';


class Login extends Component{
  constructor(props) {
    super(props)
        this.state = {
        
        }
    }
    componentDidMount = () => {
  
    }
    render(){
        
        return(
       
         <Layout>
        <Head>
        <title>Login - {siteTitle}</title>
        </Head>

        <Card body>
        Login
        </Card>


        </Layout>
             
        
      
        )
    }
}

export default Login;