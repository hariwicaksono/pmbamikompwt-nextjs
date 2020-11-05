import React, { Component } from "react";
import Head from 'next/head';
import Link from 'next/link';
import Layout, {siteTitle} from '../components/layout';
import {Container, Row, Col, Carousel, Card, Button} from 'react-bootstrap';

class Home extends Component {
  render() {
  return (
  
     <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      <Carousel className="my-3 shadow-sm">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="http://pmb.amikompurwokerto.ac.id/files/Slider2020-11-05.09.50.46.jpeg"
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
      
            <Card className="h-100">
            <Card.Body>
           
            <Row className="text-center row-cols-4 px-2" noGutters>
                <Col>
                
                <Card>
                
                <Card.Body className="p-2">
                    <img src="/images/iconpack/directions_216453.png" alt="" width="60" />
                    </Card.Body>
                    <small style={{color: "#2E4F60",fontWeight: "600"}}>Alur Pendaftaran</small>
                </Card>
                
              
                </Col>
                <Col>
                
                <Card>
                    
                    <Card.Body className="p-2">
                    <img src="/images/iconpack/list_240279.png" alt="" width="60" />
                    </Card.Body>
                    <small style={{color: "#2E4F60",fontWeight: "600"}}>Jenis Pendaftaran</small>
                </Card>
                
               
                </Col>
                <Col>
               
                <Card>
                    
                    <Card.Body className="p-2">
                   <img src="/images/iconpack/smartphone.png" alt="" width="60" />
                    </Card.Body>
                    <small style={{color: "#2E4F60",fontWeight: "600"}}>Syarat Pendaftaran</small>
                </Card>
               
               
                </Col>
                <Col>
               
                <Card>
               
                <Card.Body className="p-2">
                    <img src="/images/iconpack/calendar_243925.png" alt="" width="60" />
                    </Card.Body>
                    <small style={{color: "#2E4F60",fontWeight: "600"}}>Gelombang Pendaftaran</small>
                </Card>
               
               
                </Col>
                
            </Row>

          

            </Card.Body>
            </Card>


      </Layout>

  );
  }
}

export default Home;