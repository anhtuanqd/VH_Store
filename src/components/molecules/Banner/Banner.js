import { Carousel } from "react-bootstrap";
import styles from "./Banner.module.css";



const Banner = (props) => {
  return (
    <Carousel>
      {props.datas.map((data) => (
        <Carousel.Item key={data.id} className={styles.item}>
          <img
            key={data.id}
            className="d-block w-100"
            src={data.src}
            alt={data.alt}
          />
          <Carousel.Caption className={styles.caption}>
            <h3>{data.caption.title}</h3>
            <p>{data.caption.content}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Banner;
