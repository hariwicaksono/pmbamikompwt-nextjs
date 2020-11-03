import React, { Component } from "react";
import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout';
import {Container, Row, Col, Carousel, Card, Button} from 'react-bootstrap';

class Home extends Component {
  render() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Layout>

      <Carousel className="my-2">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="http://pmb.amikompurwokerto.ac.id/files/Slider_.png"
                    alt="First slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="http://pmb.amikompurwokerto.ac.id/files/3.jpeg"
                    alt="Third slide"
                    />

                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="http://pmb.amikompurwokerto.ac.id/files/2.png"
                    alt="Third slide"
                    />

                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="http://pmb.amikompurwokerto.ac.id/files/4.png"
                    alt="Third slide"
                    />

                    
                </Carousel.Item>
            </Carousel>
      <header className="page-title-bar">
                <div className="d-flex flex-column flex-md-row">
                  <p className="lead">
                    <span className="font-weight-bold">Hi, Hari.</span> <span className="d-block text-muted">Here’s what’s happening with your business today.</span>
                  </p>
                </div>
      </header>


      </Layout>
    </>
  );
  }
}

export default Home;