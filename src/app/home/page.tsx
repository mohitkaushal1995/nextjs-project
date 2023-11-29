// @ts-nocheck
"use client";

import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Link from "next/link";
import Image from "next/image";

function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (index) => {
    setIndex(index);
  };

  return (
    <Container >
      <main>
        <Carousel activeIndex={index} onSelect={handleSelect}   className="slider">
          <Carousel.Item>
            <Image
              src="/pexels-fahad-alani-1789492.jpg"
              alt=""
              width={1200}
              height={500}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/pexels-emre-can-acer-2189696.jpg"
              alt=""
              width={1200}
              height={500}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/pexels-drift-shutterbug-1753027.jpg"
              alt=""
              width={1200}
              height={500}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/pexels-chris-f-2083164.jpg"
              alt=""
              width={1200}
              height={500}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="/pexels-artem-lysenko-2014460.jpg"
              alt=""
              width={1200}
              height={500}
            />
          </Carousel.Item>
        </Carousel>

        <h1 className="text-body-emphasis slider">Get started with Bootstrap</h1>
        <p className="fs-5 col-md-8">
          Quickly and easily get started with Bootstrap compiled,
          production-ready files with this barebones example featuring some
          basic HTML and helpful links. Download all our examples to get
          started.
        </p>

        <div className="mb-5">
          <Link href="/contact">
            <Button variant="primary" size="lg" className="px-4">
              Contact Us
            </Button>
          </Link>
        </div>

        <Row className="g-5">
          <Col md={6}>
            <h2 className="text-body-emphasis">Starter projects</h2>
            <p>
              Ready to go beyond the starter template? Check out these open
              source projects that you can quickly duplicate to a new GitHub
              repository.
            </p>
            <ul className="list-unstyled ps-0">
              <li>
                <Link href="https://github.com/twbs/examples/tree/main/icons-font">
                  Bootstrap npm starter
                </Link>
              </li>
              <li>
                <Link href="https://github.com/twbs/examples/tree/main/parcel">
                  Bootstrap Parcel starter
                </Link>
              </li>
              <li>
                <Link href="https://github.com/twbs/examples/tree/main/vite">
                  Bootstrap Vite starter
                </Link>
              </li>
              <li>
                <Link href="https://github.com/twbs/examples/tree/main/webpack">
                  Bootstrap Webpack starter
                </Link>
              </li>
            </ul>
          </Col>

          <Col md={6}>
            <h2 className="text-body-emphasis">Guides</h2>
            <p>
              Read more detailed instructions and documentation on using or
              contributing to Bootstrap.
            </p>
            <ul className="list-unstyled ps-0">
              <li>
                <Link href="../getting-started/introduction/">
                  Bootstrap quick start guide
                </Link>
              </li>
              <li>
                <Link href="../getting-started/webpack/">
                  Bootstrap Webpack guide
                </Link>
              </li>
              <li>
                <Link href="../getting-started/parcel/">
                  Bootstrap Parcel guide
                </Link>
              </li>
              <li>
                <Link href="../getting-started/vite/">
                  Bootstrap Vite guide
                </Link>
              </li>
              <li>
                <Link href="../getting-started/contribute/">
                  Contributing to Bootstrap
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </main>
    </Container>
  );
}

export default Home;
