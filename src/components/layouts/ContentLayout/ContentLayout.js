import React from "react";
import styles from "./ContentLayout.module.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const ContentLayout = (props) => {
  return (
    <>
      <Navbar />
      <div className={styles.layout}>{props.children}</div>
      <Footer />
    </>
  );
};

export default ContentLayout;
