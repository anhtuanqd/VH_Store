import React, { useEffect, useState } from "react";
import Col from "../../../components/atoms/Col/Col";
import ProductItem from "../../../components/molecules/ProductItem/ProductItem";
import commonStyle from "../../../styles/commonStyle.module.css";
import Row from "../../../components/atoms/Row/Row";
import { Pagination } from "antd";
import "../productbk.scss";
import StyleProducts from "../Products.module.scss";
import { getData } from "../../../api/axios";

function AoQuan() {
  const [currentData, setCurrentData] = useState();
  const [data, setData] = useState();
  useEffect(() => {
    const callApi = async () => {
      const a = await getData();
      console.log(a);
      setCurrentData(a);
      setData(a.slice(0, 6));
    };
    callApi();
  }, []);
  const [current, setCurrent] = useState(1);

  const onChange = (page) => {
    if (page === 1) {
      setData(currentData?.slice(0, 6));
    } else {
      setData(currentData?.slice((page - 1) * 6, (page - 1) * 6 + 6));
    }
    setCurrent(page);
  };

  return (
    <>
      <Row>
        {data?.map((data) => (
          <Col className={commonStyle.col4}>
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
              total={currentData?.length}
            />
          </div>
        </Col>
      </Row>
    </>
  );
}
export default AoQuan;
