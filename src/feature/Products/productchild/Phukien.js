import React from "react";
import productsAccessory from "../../../dummy-data/productsAccessory.json";
import Col from "../../../components/atoms/Col/Col";
import ProductItem from "../../../components/molecules/ProductItem/ProductItem";
import commonStyle from "../../../styles/commonStyle.module.css";

function PhuKien(){
  return(
    <>
        {productsAccessory.map((data) => (
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
    </>
  )
}

export default PhuKien;