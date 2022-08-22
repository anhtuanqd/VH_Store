import React, { useState } from 'react';
import productsAccessory from '../../../dummy-data/productsAccessory.json';
import Col from '../../../components/atoms/Col/Col';
import ProductItem from '../../../components/molecules/ProductItem/ProductItem';
import commonStyle from '../../../styles/commonStyle.module.css';
import Row from '../../../components/atoms/Row/Row';
import { Pagination } from 'antd';
import '../productbk.scss';
import StyleProducts from '../Products.module.scss';

function PhuKien() {
  const [current, setCurrent] = useState(1);
  const [data, setData] = useState(productsAccessory.slice(0, 6));
  const onChange = (page) => {
    if (page === 1) {
      setData(productsAccessory.slice(0, 6));
    } else {
      setData(productsAccessory.slice((page - 1) * 6, (page - 1) * 6 + 6));
    }
    setCurrent(page);
  };
  return (
    <>
      <Row>
        {data.map((data) => (
          <Col key={data.id} className={commonStyle.col4}>
            <ProductItem
              src={data.imgUrl}
              title={data.title}
              price={data.price}
              content={data.content}
              star={data.star}
              review={data.review}
            />
          </Col>
        ))}
      </Row>
      <Row className="roww">
        <Col>
          <div className={StyleProducts.navigate}>
            <Pagination
              current={current}
              onChange={onChange}
              pageSize={6}
              total={productsAccessory.length}
            />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default PhuKien;
