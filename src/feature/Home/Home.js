import React from "react";
import { Link } from "react-router-dom";
import cx from "clsx";
import productDummyData from "../../dummy-data/products.json";
import ProductItem from "../../components/molecules/ProductItem/ProductItem";
import Row from "../../components/atoms/Row/Row";
import Container from "../../components/atoms/Container/Container";
import SectionTitle from "../../components/molecules/SectionTitle/SectionTitle";
import Col from "../../components/atoms/Col/Col";
import Img from "../../components/atoms/Img/Img";
import Button from "../../components/atoms/Button/Button";
import dummyCarouselHome from "../../dummy-data/carouselHome.json";
import Banner from "../../components/molecules/Banner/Banner";
import commonStyle from "../../styles/commonStyle.module.css";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <Banner datas={dummyCarouselHome.home} />
      <div className={styles.latestProducts}>
        <Container>
          <Row>
            <SectionTitle title="Sản phẩm mới" right="Tất cả sản phẩm >" />
            {productDummyData.map((data) => (
              <Col key={data.id} className={commonStyle.col4}>
                <ProductItem
                  key={data.id}
                  src={data.imgUrl}
                  alt={data.alt}
                  title={data.title}
                  price={data.price}
                  content={data.content}
                  star={data.star}
                  review={data.review}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <div className={styles.bestFeatures}>
        <Container>
          <Row className={styles.pd60}>
            <SectionTitle title="Về cửa hàng HT Store" />
            <Col className={commonStyle.col6}>
              <div className={styles.leftContent}>
                <h4>Bạn đang tìm kiếm những sản phẩm tốt nhất?</h4>
                <p className={commonStyle.p}>
                  Ra đời từ 2014, thương hiệu thời trang HT Store xác định sứ
                  mệnh giúp các chàng trai, cô gái trở nên đẹp hơn với phiên bản của
                  chính mình. Ngày nay giới trẻ đang đứng những cơ hội tuyệt
                  vời của xã hội hiện đại, công nghệ thông tin phát triển, cuộc
                  cách mạng của các trang mạng xã hội để khẳng định bản thân.
                  Bên cạnh đó, HT Store hiểu rằng người trẻ cũng đang phải đối diện
                  với những áp lực, thử thách thôi thúc bản thân phải thể hiên
                  mình so với những người khác..{" "}
                  <Link to="/Contact">Liên hệ</Link> với chúng tôi để biết thêm thông tin.
                </p>
                <ul className={commonStyle.ul}>
                  <li>Luôn đặt uy tín lên hàng đầu</li>
                  <li>Giá rẻ đến tận tay khách hàng</li>
                  <li>Chuyên sỉ lẻ quần áo tận xưởng, không qua trung gian</li>
                  <li>Cập nhật mẫu mã liên tục</li>
                  <li>Sản phẩm chất lượng hàng đầu</li>
                </ul>
                <Link to="/About">
                  <Button className={styles.filledButton}>Đọc thêm</Button>
                </Link>
              </div>
            </Col>
            <Col className={commonStyle.col6}>
              <Img
                className={styles.bestFeaturesImg}
                src="https://c0.wallpaperflare.com/preview/870/553/120/workshop-woman-clothing-dress.jpg"
                alt="abc"
              />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="call-to-action">
        <Container>
          <Row>
            <Col className={commonStyle.col12}>
              <div className={styles.innerContent}>
                <Row>
                  <Col className={commonStyle.col8}>
                    <h4>
                      Sáng tạp &amp; độc nhất tại <em>VH </em> Store
                    </h4>
                    <p className={commonStyle.p}>
                      Nhanh tay đặt hàng để nhận nhiều ưu đãi của HT Store các bạn iuuuu
                    </p>
                  </Col>
                  <Col className={cx(commonStyle.textRight, commonStyle.col4)}>
                    <Button>Mua hàng ngay</Button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
