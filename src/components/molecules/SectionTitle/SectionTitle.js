import { Link } from "react-router-dom";
import styles from "./SectionTitle.module.css";
import Col from "../../atoms/Col/Col";
import commonStyle from "../../../styles/commonStyle.module.css";

const SectionTitle = (props) => {
  return (
    <Col className={commonStyle.col12}>
      <div className={styles.sectionTitle}>
        <div className={styles.heading}>
          <h2>{props.title}</h2>
          <Link to="/Products">{props.right}</Link>
        </div>
      </div>
    </Col>
  );
};

export default SectionTitle;
