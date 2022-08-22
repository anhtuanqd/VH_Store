import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Row from '../../components/atoms/Row/Row';
import Col from '../../components/atoms/Col/Col';
import './productbk.scss';
import StyleProducts from './Products.module.scss';
import Banner from '../../components/molecules/Banner/Banner';
import dummyCarouselListProduct from '../../dummy-data/carouselListProduct.json';

const Products = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split('/products');

  return (
    <>
      <Banner datas={dummyCarouselListProduct.listProduct} />
      <Container>
        <Row>
          <Col>
            <div className={StyleProducts.filters}>
              <ul className={StyleProducts.ul}>
                <li
                  className={
                    splitLocation[1] === '' || !splitLocation[1]
                      ? `${StyleProducts.active}`
                      : ''
                  }
                >
                  <Link className={StyleProducts.category} to="/products">
                    Áo Quần
                  </Link>
                </li>
                <li
                  className={
                    splitLocation[1] === '/vay' ? `${StyleProducts.active}` : ''
                  }
                >
                  <Link className={StyleProducts.category} to="/products/vay">
                    Áo Len{' '}
                  </Link>
                </li>
                <li
                  className={
                    splitLocation[1] === '/phukien'
                      ? `${StyleProducts.active}`
                      : ''
                  }
                >
                  <Link
                    className={StyleProducts.category}
                    to="/products/phukien"
                  >
                    Phụ Kiện
                  </Link>
                </li>
                <li
                  className={
                    splitLocation[1] === '/khac'
                      ? `${StyleProducts.active}`
                      : ''
                  }
                >
                  <Link className={StyleProducts.category} to="/products/khac">
                    Khác
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <Outlet />
        </Row>
      </Container>
    </>
  );
};

export default Products;
