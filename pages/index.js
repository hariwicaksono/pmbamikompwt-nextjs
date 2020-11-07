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
      
            <div className="card mb-2">
            <div className="card-body">
                <ul className="feature-list feature-list-sm row">
                <li className="col-md-6 mb-0">
                    <a className="card text-center" href="http://fik.amikompurwokerto.ac.id">
                    <div className="card-body">
                    <img src="http://pmb.amikompurwokerto.ac.id/assets/main/images/iconpack/80xNxweb-development_2210153.png.pagespeed.ic.3ceQobAX7f.webp" alt="Fakultas Ilmu Komputer" width="80" />
                    <h5>Fakultas Ilmu Komputer</h5>
                    </div>
                    </a>
                </li>

                <li className="col-md-6 mb-0">
                    <a className="card text-center" href="http://fbis.amikompurwokerto.ac.id">
                    <div className="card-body">
                    <img src="http://pmb.amikompurwokerto.ac.id/assets/main/images/iconpack/80xNxdiagram_2210211.png.pagespeed.ic.GWP-mVkNQW.webp" alt="Fakultas Bisnis &amp; Ilmu Sosial" width="80" />
                    <h5>Fakultas Bisnis &amp; Ilmu Sosial</h5> 
                    </div>
                    </a>
                </li>
                </ul>
            </div>
            </div>

           <Card body>
            <Row className="text-center row-cols-4">
                <Link href="/login" passHref><a>
                <Col>
                    <img src="https://uselooper.com/assets/images/illustration/lab.svg" alt="" height="72" />
                    <h6>Alur Pendaftaran</h6>
                </Col>
                </a></Link>
                <Col>
                    <img src="https://uselooper.com/assets/images/illustration/easy-config.svg" alt="" height="72" />
                    <h6>Jenis Pendaftaran</h6>
                </Col>
                <Col>
                   <img src="https://uselooper.com/assets/images/illustration/scale.svg" alt="" height="72" />
                    <h6>Syarat Pendaftaran</h6>
                </Col>
                <Col>
                    <img src="https://uselooper.com/assets/images/illustration/support.svg" alt="" height="72" />
                    <h6>Gel. Pendaftaran</h6>
                </Col>
                
            </Row>
            </Card>

    <style jsx>{`
    h6 {
    color: #2E4F60;
    font-size: .875rem;
    font-weight: 400}
    `}</style>

    </Layout>
      

  );
  }
}

export default Home;