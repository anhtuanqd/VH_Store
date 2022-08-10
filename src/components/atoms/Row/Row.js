import cx from "clsx";
import styles from "./Row.module.css";

const Row = (props) => {
    return <div className={cx(styles.row, props.className)}>{props.children}</div>
};

export default Row;