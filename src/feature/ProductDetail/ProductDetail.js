import { Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import productItemDummyData from "../../dummy-data/carouselProductItem.json";
import Container from "../../components/atoms/Container/Container";
import Row from "../../components/atoms/Row/Row";
import SectionTitle from "../../components/molecules/SectionTitle/SectionTitle";
import Col from "../../components/atoms/Col/Col";
import commonStyle from "../../styles/commonStyle.module.css";
import styles from "./ProductDetail.module.css";

const ProductDetail = () => {
  return (
    <div className={styles.productDetail}>
      <Container>
        <Row className={styles.pd60}>
          <SectionTitle title="Chi tiết sản phẩm" />
          <Col className={commonStyle.col6}>
            <Carousel>
              {productItemDummyData.productItem.map((data) => (
                <Carousel.Item key={data.id} className={styles.item}>
                  <img
                    key={data.id}
                    className="d-block w-100"
                    src={data.src}
                    alt={data.alt}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
          <Col className={commonStyle.col6}>
            <Row>
              <p className={styles.nameProduct}>ÁO THUN W1ATN11101FOSHT</p>
              <p className={styles.cost}>265,000₫</p>
            </Row>
            <Row>
              <p className={styles.selectSize}>
                <Link to="/">Hướng dẫn chọn size</Link>
              </p>
              <p className={styles.color}>Màu sắc:</p>
              <div className={styles.imgList}>
                <img
                  src="https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20211109/09112021121127_1000_x_1500__Dai_dien_5.jpg"
                  alt="Ảnh đẹp"
                  width={75}
                  height={75}
                />
                <img
                  src="https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20211109/09112021121138_1000_x_1500__Dai_dien_3.jpg"
                  alt="Ảnh đẹp"
                  width={75}
                  height={75}
                />
                <img
                  src="https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20211109/09112021121151_1000_x_1500__Dai_dien_2.jpg"
                  alt="Ảnh đẹp"
                  width={75}
                  height={75}
                />
                <img
                  src="https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20211109/09112021121107_1000_x_1500__Dai_dien_1.jpg"
                  alt="Ảnh đẹp"
                  width={75}
                  height={75}
                />
              </div>
            </Row>
            <Row>
              <div className={styles.formSize}>
                <div className={styles.Size}>
                  Kích cỡ: <p>M</p> <p>L</p> <p>XL</p>
                </div>
                <div className={styles.Count}>
                  Số Lượng:
                  <input
                    type="number"
                    defaultValue="1"
                    name="quantity"
                    min="1"
                    max="5"
                  />
                </div>
              </div>
            </Row>
            <Row>
              <div className={styles.btnBuy}>
                <div className={styles.addProduct}>
                  <p>Thêm vào giỏ</p>
                </div>
                <div className={styles.buyNow}>
                  <p>MUA NGAY</p>
                </div>
              </div>
              <div className={styles.inStore}>
                <FontAwesomeIcon icon={faStore} color="#fff" />
                Đang có tại các cửa hàng{" "}
              </div>
            </Row>
            <Row>
              <div className={styles.insur}>» BẢO HÀNH SẢN PHẨM 90 NGÀY</div>
              <div className={styles.insur}>» ĐỔI HÀNG TRONG VÒNG 30 NGÀY</div>
              <div className={styles.insur}>
                » HOTLINE BÁN HÀNG 1900 633 501
              </div>
            </Row>
          </Col>
        </Row>
        <Row className={styles.mainDT}>
          <Row>
            <h3>Thông tin sản phẩm</h3>
            <div className={styles.prod}>
              <p>- Chất liệu: </p>
              <ul>
                <li>Form dáng</li>
                <li>Over size</li>
                <li>Chất liệu: Cotton 100%</li>
              </ul>
            </div>
            <p>
              - Mẫu quần ống suông này hứa hẹn là item không thể thiếu cho các
              tín đồ thời trang. Thiết kế cơ bản nhưng mang hơi thở hiện đại,
              cực kỳ tôn dáng và sành điệu. Item này có thể đồng hành cùng nàng
              đến văn phòng hoặc mix cùng những mẫu áo thun, croptop cho ra set
              đồ đi chơi cực hút mắt.
            </p>
          </Row>
          <Row>
            <img
              src="https://storage.googleapis.com/cdn.nhanh.vn/store/7136/psCT/20211109/35567531/1108_x_1500_layout_19_(1).jpg"
              alt=""
            />
            <img
              src="https://storage.googleapis.com/cdn.nhanh.vn/store/7136/psCT/20211109/35567531/1108_x_1500_layout_19_(3).jpg"
              alt="Ảnh đẹp"
            />
            <img
              src="https://storage.googleapis.com/cdn.nhanh.vn/store/7136/psCT/20211109/35567531/1108_x_1500_layout_19_(5).jpg"
              alt="Ảnh đẹp"
            />
            <img
              src="https://storage.googleapis.com/cdn.nhanh.vn/store/7136/psCT/20211109/35567531/1108_x_1500_layout_19_(7).jpg"
              alt="Ảnh đẹp"
            />
            <img
              src="https://storage.googleapis.com/cdn.nhanh.vn/store/7136/psCT/20211109/35567531/1108_x_1500_layout_19_(6).jpg"
              alt="Ảnh đẹp"
            />
          </Row>
          <Row>
            <div className={styles.likeproduct}>
              <p>SẢN PHẨM CÙNG DANH MỤC</p>
            </div>
          </Row>
          <Row>
            <Col className={commonStyle.col3}>
              <img
                className={styles.hehe}
                src="https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20211230/30122021121224_ao_thun_nu_W1ATN12107FOSBA_toto_shop__1_.jpg"
                width={260}
                alt=""
              />
              <p className={styles.costlikeProduct}>285,000 ₫</p>
            </Col>
            <Col className={commonStyle.col3}>
              <img
                className={styles.hehe}
                src="https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20211230/30122021111231_ao_thun_nu_W1ATN12105FOSHT_toto_shop__1_.jpg"
                width={260}
                alt=""
              />
              <p className={styles.costlikeProduct}>285,000 ₫</p>
            </Col>
            <Col className={commonStyle.col3}>
              <img
                className={styles.hehe}
                src="https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20211230/30122021111210_ao_thun_nu_W1ATN12106FOSBA_toto_shop__1_.jpg"
                width={260}
                alt=""
              />
              <p className={styles.costlikeProduct}>285,000 ₫</p>
            </Col>
            <Col className={commonStyle.col3}>
              <img
                className={styles.hehe}
                src="https://storage.googleapis.com/cdn.nhanh.vn/store/7136/ps/20211208/08122021081226_ao_thun_nu_W1ATN12102SOSHT_toto_shop__1_.jpg"
                width={260}
                alt=""
              />
              <p className={styles.costlikeProduct}>285,000 ₫</p>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
