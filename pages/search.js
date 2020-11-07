import React, {Component} from 'react';
import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout';
import {Container, Row, Col, Carousel, Card, Button} from 'react-bootstrap';


class Search extends Component{
  constructor(props) {
    super(props)
        this.state = {
        
        }
    }
    componentDidMount = () => {
  
    }
    render(){
        
        return(
       
         <Layout search>
        <Head>
        <title>Search - {siteTitle}</title>
        </Head>

        <Card body>
       
        </Card>


        </Layout>
             
        
      
        )
    }
}

export default Search;