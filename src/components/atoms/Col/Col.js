import cx from "clsx";
import styles from "./Col.module.css";

const Col = (props) => {
  return (
    <div className={cx(styles.col, props.className)}>{props.children}</div>
  );
};

export default Col;
