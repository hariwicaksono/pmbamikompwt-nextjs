import React, { Component } from "react";
import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout';
import {Container, Row, Col, Carousel, Card, Button} from 'react-bootstrap';

class Home extends Component {
  render() {
  return (
  
     <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

     

      <Carousel className="my-3">
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
                    <span className="font-weight-bold">Hi, Hari.</span> <span className="d-block text-muted">When single-page applications were really getting popular in the early Backbone/Ember/Angular days, one of the biggest selling points was that you could navigate around your site without re-rendering the entire document from scratch every time the URL changed.

This meant you could do things like preserve the scroll position in part of the UI that didn't change (like a sidebar for example) without the complexity of measuring it and trying to restore it on the next page load like you'd have to do in a traditional server-driven application.

Because this benefit was so heavily advertised, I was very surprised to find out that in many modern single-page application frameworks like Next.js and Gatsby, the default experience is re-rendering the entire UI every time you click a link — throwing away that nice feeling of a persistent UI we worked so hard to achieve a decade ago!

Next.js is such a wonderfully productive development experience and produces such incredibly fast websites that I just refused to believe it had to be this way.

So I spent a few weeks researching, asking questions, and experimenting, and came up with these four patterns for persistent layouts in Next.js applications.</span>
                  </p>
                </div>
      </header>


      </Layout>

  );
  }
}

export default Home;