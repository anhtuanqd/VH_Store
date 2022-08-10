import cx from "clsx";
import styles from "./Img.module.css";

const Img = (props) => {
  return (
    <div className={cx(styles.imgWrapper, props.className)}>
      <img src={props.src} alt={props.alt} />
    </div>
  );
};

export default Img;
