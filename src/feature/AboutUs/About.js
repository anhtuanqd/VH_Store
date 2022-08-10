import React from "react";
import dummyCarouseAbout from "../../dummy-data/carouselAbout.json";
import Banner from "../../components/molecules/Banner/Banner";
import styles from "./About.module.css";
import Container from "../../components/atoms/Container/Container";
import Row from "../../components/atoms/Row/Row";
import SectionTitle from "../../components/molecules/SectionTitle/SectionTitle";
import Col from "../../components/atoms/Col/Col";
import Img from "../../components/atoms/Img/Img";
import { Link } from "react-router-dom";
import SocialMedia from "../../components/molecules/SocialMedia/SocialMedia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import commonStyle from "../../styles/commonStyle.module.css"
import dummydatateamMember from "../../dummy-data/teamMember.json"
import dummydataHappyPartner from "../../dummy-data/happypartner.json"

const About = () => {
  return (
    <>
      <Banner datas={dummyCarouseAbout.about} />
      <div className={styles.bestFeatures}>
        <Container>
          <Row className={styles.pd60}>
            <SectionTitle title="Nền tảng của chúng tôi" />

            <Col className={commonStyle.col6}>
              <Img
                className={styles.bestFeaturesImg}
                src="https://bazaarvietnam.vn/wp-content/uploads/2018/11/retro-look-phong-cach-retro-qua-cac-thap-nien-00-thumb.jpg"
                alt="abc"
              />
            </Col>
            <Col className={commonStyle.col6}>
              <div className={styles.leftContent}>
                <h4>Chúng tôi là ai & chúng tôi làm gì?</h4>
                <p className={commonStyle.p}>
                  Được hình thành trong thời đại 4.0, 
                  VH STORE áp dụng sức mạnh của công nghệ vào thời trang để đưa ra 
                  Giải pháp mua sắm đồ cơ bản cho nam giới với mô hình tiện lợi hơn, 
                  tiết kiệm hơn - khách hàng có thể mua cả tủ đồ đảm bảo chất lượng, 
                  giá tốt, giao hàng nhanh chóng, và dịch vụ chăm sóc vượt trội.
                  <br />
                  <br />
                  Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng góp từ khách hàng
                  để có thể nâng cấp trải nghiệm dịch vụ và sản phẩm tốt hơn nữa.
                </p>
                <SocialMedia/>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className={styles.teamMembers}>
        <Container>
          <Row>
            <Col className={commonStyle.col12}>
              <div className={styles.sectionHeading}>
                <h2>Story behind</h2>
              </div>
            </Col>

            {
              dummydatateamMember.map((data) => (

                <Col className={commonStyle.col3}>
                  <div className={styles.teamMember}>
                    <div className={styles.thumbContainer}>
                      <img src= {data.imgUrl} alt={data.alt} />
                      <div className={styles.hoverEffect}>
                        <div className={styles.hoverContent}>
                          <SocialMedia/>
                        </div>
                      </div>
                    </div>
                    <div className={styles.downContent}>
                      <h4>{data.name}</h4>
                      <span>{data.job}</span>
                      <p>{data.content} </p>
                    </div>
                  </div>
                </Col>

              ))}
          </Row>
        </Container>
      </div>

      <div className={styles.services}>
        <Container>
          <Row>
            <Col className={commonStyle.col4}>
              <div className={styles.serviceItem}>
                <div className={styles.icon}>
                  <Link to="/">
                    <FontAwesomeIcon icon={faStar} />
                  </Link>
                </div>
                <div className={styles.downContenttent}>
                  <h4>Product Management</h4>
                  <p className={commonStyle.p}>
                    Lorem ipsum dolor sit amet, consectetur an adipisicing elit.
                    Itaque, corporis nulla at quia quaerat.
                  </p>
                  <Link to="/" class="filled-button">
                    Read More
                  </Link>
                </div>
              </div>
            </Col>
            <Col className={commonStyle.col4}>
              <div className={styles.serviceItem}>
                <div className={styles.icon}>
                  <Link to="/">
                    <FontAwesomeIcon icon={faStar} />
                  </Link>
                </div>
                <div className={styles.downContenttent}>
                  <h4>Product Management</h4>
                  <p className={commonStyle.p}>
                    Lorem ipsum dolor sit amet, consectetur an adipisicing elit.
                    Itaque, corporis nulla at quia quaerat.
                  </p>
                  <Link to="/" class="filled-button">
                    Read More
                  </Link>
                </div>
              </div>
            </Col>
            <Col className={commonStyle.col4}>
              <div className={styles.serviceItem}>
                <div className={styles.icon}>
                  <Link to="/">
                    <FontAwesomeIcon icon={faStar} />
                  </Link>
                </div>
                <div className={styles.downContenttent}>
                  <h4>Product Management</h4>
                  <p className={commonStyle.p}>
                    Lorem ipsum dolor sit amet, consectetur an adipisicing elit.
                    Itaque, corporis nulla at quia quaerat.
                  </p>
                  <Link to="/" class="filled-button">
                    Read More
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className={styles.happyClients}>
        <Container>
          <Row>
            <Col className={commonStyle.col12}>
              <div className={styles.sectionHeadinging}>
                <h2>Thương hiệu nổi bật</h2>
              </div>
            </Col>


            <Col className={commonStyle.col12}>
              <div className={styles.owl}>
                <div className={styles.owlStageOuter}>
                  <div className={styles.owlStage}>
                    {
                      dummydataHappyPartner.map((data) => (
                        <div className={styles.owlItem}>
                          <div className={styles.clientItem}>
                            <img src={data.imgUrl} alt={data.alt} />
                          </div>
                        </div>

                      ))
                    }
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About;
