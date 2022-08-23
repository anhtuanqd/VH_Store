import React, { useState } from "react";
import productsSweater from "../../../dummy-data/productsSweater.json";
import Col from "../../../components/atoms/Col/Col";
import ProductItem from "../../../components/molecules/ProductItem/ProductItem";
import commonStyle from "../../../styles/commonStyle.module.css";
import Row from "../../../components/atoms/Row/Row";
import { Pagination } from "antd";
import "../productbk.scss";
import StyleProducts from "../Products.module.scss";

function Vay() {
  const [current, setCurrent] = useState(1);
  const [data, setData] = useState(productsSweater.slice(0, 6));
  const onChange = (page) => {
    if (page === 1) {
      setData(productsSweater.slice(0, 6));
    } else {
      setData(productsSweater.slice((page - 1) * 6, (page - 1) * 6 + 6));
    }
    setCurrent(page);
  };
  return (
    <>
      <Row>
        {data.map((data) => (
          <Col key={data.id} className={commonStyle.col4}>
            <ProductItem
              id={data.id}
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
              total={productsSweater.length}
            />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Vay;
