import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import './header.scss';
import { pathKeys } from '../../../constants';

const Header = () => {
  const activeStyle = { color: 'white', fontWeight: 'bold' };
  const menuHeader = [
    {
      name: 'Home',
      pathName: pathKeys.ROOT,
    },
    {
      name: 'Login',
      pathName: pathKeys.LOGIN,
    },
    {
      name: 'About',
      pathName: pathKeys.ABOUT,
    },
  ];
  return (
    <header className="App-header">
      <div className="top-header">
        <div className="container">
          <div className="top-header-nav">
            <ul className="nav-list">
              <li className="nav-list-items">
                <a
                  className="items-link"
                  href="https://gamek.vn/"
                  title="Kênh thông tin mới nhất về Game trong nước và thế giới"
                  target="_blank"
                  rel="nofollow"
                >
                  GameK
                </a>
              </li>
              <li className="nav-list-items">
                <a
                  className="items-link"
                  href="http://kenh14.vn/"
                  title="Kênh tin tức giải trí - Xã hội "
                  target="_blank"
                  rel="nofollow"
                >
                  Kenh14
                </a>
              </li>
              <li className="nav-list-items">
                <a
                  className="items-link"
                  href="http://cafebiz.vn/"
                  target="_blank"
                  title="CafeBiz - Thông tin kinh doanh - Doanh nhân"
                  rel="nofollow"
                >
                  Cafebiz
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-header">
        <div className="container">
          <div className="bottom-header-menu"></div>
          <h1>
            <a href="/" title="Trang thông tin dành cho tín đồ công nghệ" class="logo-genk ">
              <img src="https://static.mediacdn.vn/genk/web_images/logogenk.svg" />
            </a>
          </h1>
          <ul className="menu-list">
            <li className="menu-items">
              <a href="https://genk.vn/mobile.chn" title="mobile">
                Mobile
              </a>
            </li>
            <li className="menu-items">
              <a href="https://genk.vn/tin-ict.chn" title="Tin ICT">
                Tin ICT
              </a>
            </li>
            <li className="menu-items">
              <a href="https://genk.vn/internet.chn" title="Internet">
                Internet
              </a>
            </li>
            <li className="menu-items">
              <a href="https://genk.vn/kham-pha.chn" title="Khám phá">
                Khám phá
              </a>
            </li>
            <li className="menu-items">
              <a href="https://genk.vn/xem-mua-luon.chn" title="Khám phá">
                Xem - Mua - Luôn
              </a>
            </li>
            <li className="menu-items">
              <a href="https://genk.vn/mobile.chn" title="mobile"></a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
