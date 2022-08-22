import React from 'react';
import styles from './ContentLayout.module.css';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ContentLayout = (props) => {
  const location = useLocation();
  const token = localStorage.getItem('access_token');

  return !token ? (
    <Navigate to="/login" state={{ from: location }} replace />
  ) : (
    <>
      <Navbar />
      <div className={styles.layout}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default ContentLayout;
