import React from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Avatar, Image, Dropdown, Menu, Space } from 'antd';
import {
  DownOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
  SmileOutlined,
} from '@ant-design/icons';

const NavbarComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  const splitLocation = pathname.split('/');

  const handleLogOut = () => {
    setTimeout(() => {
      localStorage.removeItem('access_token');
      navigate('/', { replace: true });
    }, 1500);
  };

  const handleCart = () => {
    navigate('/cart', { replace: true });
  };
  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/anhtuanqd"
            >
              Kuudoodoo
            </a>
          ),
        },
        {
          key: '2',
          label: <a onClick={handleCart}>Go to Cart</a>,
          icon: <ShoppingCartOutlined />,
        },
        {
          key: '4',
          danger: true,
          label: <a onClick={handleLogOut}>Logout</a>,
          icon: <LogoutOutlined />,
        },
      ]}
    />
  );
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <h2>
                VH <em>Store</em>
              </h2>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav">
                <li
                  className={
                    splitLocation[1] === '' ? 'active nav-item' : 'nav-item'
                  }
                >
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li
                  className={
                    splitLocation[1] === 'Products'
                      ? 'active nav-item'
                      : 'nav-item'
                  }
                >
                  <Link className="nav-link" to="/Products">
                    Products
                  </Link>
                </li>
                <li
                  className={
                    splitLocation[1] === 'About'
                      ? 'active nav-item'
                      : 'nav-item'
                  }
                >
                  <Link className="nav-link" to="/About">
                    About Us
                  </Link>
                </li>
                <li
                  className={
                    splitLocation[1] === 'Contact'
                      ? 'active nav-item'
                      : 'nav-item'
                  }
                >
                  <Link className="nav-link" to="/Contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="User">
          <Avatar
            className="Avatar"
            src={
              <Image
                src="https://joeschmoe.io/api/v1/random"
                style={{ width: 32 }}
              />
            }
          />
          <Dropdown overlay={menu}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Nguyễn Văn Hoàng
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      </header>
    </>
  );
};

export default NavbarComponent;
