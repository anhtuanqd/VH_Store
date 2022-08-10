import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Row from '../../components/atoms/Row/Row';
import Col from '../../components/atoms/Col/Col';
import StyleProducts from './Products.module.css';
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
        <Row>
          <Col>
            <div className={StyleProducts.navigate}>
              <ul className={StyleProducts.pages}>
                <li className={StyleProducts.active}>
                  <div style={{ color: 'white' }}>1</div>
                </li>
                <li>
                  <div>2</div>
                </li>
                <li>
                  <div>3</div>
                </li>
                <li>
                  <div>4</div>
                </li>
                <li>
                  <div>
                    <FontAwesomeIcon icon={faAngleRight} color="#121212" />
                  </div>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Products;
