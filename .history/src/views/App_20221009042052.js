// import { Route, Switch } from 'react-router-dom';
import React from 'react';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// import { LoginPage, DashboardPage } from '../containers';
// import { Header, Loading, ProtectedRoute } from '../components/common';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { pathKeys } from '../constants';
// import { loginActions } from '../redux/actions';
// import { isEmpty } from '../utils/common';
// import { globalKeys } from '../constants';
// import { I18nextProvider } from 'react-i18next';
// import i18next from '../translations/i18next';
// import styled from 'styled-components';
// import { DrawerLeft } from '../components';
// import { LAYOUT } from '../constants/common';
// const AboutView = lazy(() => import('../views/About/AboutView'));
// const HomeView = lazy(() => import('../views/Home/HomeView'));
// const NotFoundView = lazy(() => import('../views/NotFound/NotFoundView'));
// const AppWrapper = styled.div`
//   width: 100%;
//   margin: 0 auto;
//   display: flex;
//   min-height: 100%;
//   flex-direction: column;
// `;

// const Layout = ({ layout, props = null, children }) => {
//   switch (layout) {
//     case LAYOUT.FULLPAGE: {
//       return React.createElement(AppWrapper, null, children);
//     }
//     case LAYOUT.DRAWERLEFT: {
//       return React.createElement(DrawerLeft, props, children);
//     }
//     default: {
//       return React.createElement(AppWrapper, null, children);
//     }
//   }
// };

class App extends React.PureComponent {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     checked: false,
  //     isLoggedIn: false,
  //   };

  //   const language = this.props.locale || navigator.language.split(/[-_]/)[0];
  //   i18next.changeLanguage(language);
  //   this.checkLogin();
  // }

  // setRender(isLoggedIn = false) {
  //   this.setState({ isLoggedIn: isLoggedIn, checked: true });
  // }

  // checkLogin() {
  //   this.props.getMemberDetail().then(
  //     result => {
  //       if (isEmpty(result) || isEmpty(result.token)) {
  //         this.setRender(false);
  //       } else {
  //         global[globalKeys.AUTH_TOKEN] = result.token;
  //         this.setRender(true);
  //       }
  //     },
  //     () => {
  //       this.setRender(false);
  //     },
  //   );
  // }

  render() {
    // const { isLoggedIn } = this.props.loginState;
    // const layout = isLoggedIn ? LAYOUT.DRAWERLEFT : LAYOUT.FULLPAGE;
    // const { logout } = this.props;
    return (
      // <I18nextProvider i18n={i18next}>
      //   <div>
      //     <Loading loading={this.props.loading} />
      //     <Layout layout={layout} props={{ logout: logout }}>
      //       {!isLoggedIn && <Header />}
      //       <Switch>
      //         <Route exact path="/" component={HomeView} />
      //         <Route path={pathKeys.ABOUT} component={AboutView} />
      //         <Route path={pathKeys.LOGIN} component={LoginPage} />
      //         <ProtectedRoute path={pathKeys.DASHBOARD} component={DashboardPage} isAuthenticated={isLoggedIn} />
      //         <Route component={NotFoundView} />i
      //       </Switch>
      //     </Layout>
      //   </div>
      // </I18nextProvider>
      <div className="App">
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
            <div className="bottom-header-menu container">
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
                  <a href="javascript:void(0);" title="">
                    <i className="icon-menu fa-solid fa-bars"></i>
                  </a>
                  <div className="header-menu-drop">
                    <div className="menu-drop container">
                      <ul className="menu-drop-list">
                        <li className="menu-drop-list-item">
                          <ul className="submenu">
                            <li className="submenu-item-line">
                              <a href="/mobile.chn" title="mobile">
                                Mobile
                              </a>
                              <i class="icon-right fa-solid fa-chevron-right"></i>
                            </li>
                            <li className="submenu-item">
                              <a href="/mobile/dien-thoai.chn" title="điện thoại">
                                Điện thoại
                              </a>
                            </li>
                            <li className="submenu-item">
                              <a href="/mobile/may-tinh-bang.chn" title="máy tính bảng">
                                Máy tính bảng
                              </a>
                            </li>
                          </ul>
                          <a href="#">
                            <img src="https://static.mediacdn.vn/genk/web_images/app-ios.jpg"></img>
                          </a>
                        </li>
                        <li className="menu-drop-list-item">
                          <ul className="submenu">
                            <li className="submenu-item-line">
                              <a href="/internet.chn" title="internet">
                                INTERNET
                              </a>
                              <i class="icon-right fa-solid fa-chevron-right"></i>
                            </li>
                            <li className="submenu-item">
                              <a href="/internet/digital-marketing.chn" title="digital marketing">
                                Digital Marketing
                              </a>
                            </li>
                            <li className="submenu-item">
                              <a href="/internet/media.chn" title="media">
                                Media
                              </a>
                            </li>
                          </ul>
                          <a href="#">
                            <img src="https://static.mediacdn.vn/genk/web_images/app-android.jpg"></img>
                          </a>
                        </li>
                        <li className="menu-drop-list-item">
                          <ul className="submenu">
                            <li className="submenu-item-line">
                              <a href="/kham-pha.chn" title="khám phá">
                                KHÁM PHÁ
                              </a>
                              <i class="icon-right fa-solid fa-chevron-right"></i>
                            </li>
                            <li className="submenu-item">
                              <a href="/kham-pha/lich-su.chn" title="lịch sử">
                                Lịch sử
                              </a>
                            </li>
                            <li className="submenu-item">
                              <a href="/kham-pha/tri-thuc.chn" title="tri thức">
                                Tri thức
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-drop-list-item">
                          <ul className="submenu">
                            <li className="submenu-item-line">
                              <a href="/tra-da-cong-nghe.chn" title="trà đá công nghệ">
                                TRÀ ĐÁ CÔNG NGHỆ
                              </a>
                              <i class="icon-right fa-solid fa-chevron-right"></i>
                            </li>
                            <li className="submenu-item">
                              <a href="/tra-da-cong-nghe/tan-man.chn" title="tản mạn">
                                Tản mạn
                              </a>
                            </li>
                            <li className="submenu-item">
                              <a href="/tra-da-cong-nghe/y-tuong-sang-tao.chn" title="ý tưởng sáng tạo">
                                Ý tưởng sáng tạo
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-drop-list-item">
                          <ul className="submenu">
                            <li className="submenu-item-line">
                              <a href="/blockchain.chn" title="Blockchain">
                                Blockchain
                              </a>
                              <i class="icon-right fa-solid fa-chevron-right"></i>
                            </li>
                            <li className="submenu-item">
                              <a href="/blockchain/xu-huong.chn" title="Xu hướng">
                                Xu hướng
                              </a>
                            </li>
                            <li className="submenu-item">
                              <a href="/blockchain/cong-nghe.chn" title="Công nghệ">
                                Công nghệ
                              </a>
                            </li>
                            <li className="submenu-item">
                              <a href="/blockchain/nhan-vat.chn" title="Nhân vật">
                                Nhân vật
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-drop-list-item">
                          <ul className="submenu">
                            <li className="submenu-item-line">
                              <a href="/tin-ict.chn" title="tin ict">
                                TIN ICT
                              </a>
                              <i class="icon-right fa-solid fa-chevron-right"></i>
                            </li>
                            <li className="submenu-item-line">
                              <a href="/thu-thuat.chn" title="thủ thuật">
                                THỦ THUẬT
                              </a>
                              <i class="icon-right fa-solid fa-chevron-right"></i>
                            </li>
                            <li className="submenu-item-line">
                              <a href="/song.chn" title="sống">
                                Sống
                              </a>
                              <i class="icon-right fa-solid fa-chevron-right"></i>
                            </li>
                            <li className="submenu-item-line">
                              <a href="/nhom-chu-de/emagazine.chn" class="emgz">
                                EMAGAZINE
                              </a>
                              <i class="icon-right fa-solid fa-chevron-right"></i>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-drop-list-item">
                          <ul className="submenu">
                            <li className="submenu-item-line">
                              <a href="/apps-games.chn" title="app - games">
                                APPS - GAMES
                              </a>
                              <i class="icon-right fa-solid fa-chevron-right"></i>
                            </li>
                            <li className="submenu-item-line">
                              <a href="/do-choi-so.chn" title="đồ chơi số">
                                ĐỒ CHƠI SỐ
                              </a>
                              <i class="icon-right fa-solid fa-chevron-right"></i>
                            </li>
                            <li className="submenu-item-line">
                              <a href="/video.chn">VIDEO</a>
                              <i class="icon-right fa-solid fa-chevron-right"></i>
                            </li>
                            <li className="submenu-item-line">
                              <a href="/gia-dung.chn" title="Gia dụng">
                                GIA DỤNG
                              </a>
                              <i class="icon-right fa-solid fa-chevron-right"></i>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="header-search">
                <a href="/video.chn" className="link-video" title="video">
                  Video
                </a>
                <a href="javascript:void(0);" id="btnSearch" className="link-search">
                  <i className="icon-search fa-solid fa-magnifying-glass"></i>
                </a>
              </div>
            </div>
          </div>
        </header>
        <div className="header-mb">
          <div className="header-mb-inner">
            <a className="header-mb-logo" href="/" title="Trang thông tin dành cho tín đồ công nghệ">
              <img src="https://static.mediacdn.vn/genk/web_images/logogenk_mob.svg" alt="Logo" width="100%" />
            </a>
            <a className="header-mb-news">
              <span class="btn_news">
                <i class="icon-header fa-regular fa-file-lines"></i>
              </span>
              <span className="text">Mới</span>
            </a>
            <a className="header-mb-hot">
              <span class="btn_hot">
                <i class="icon-header fa-sharp fa-solid fa-fire"></i>
              </span>
              <span className="text">Hot</span>
            </a>
            <a className="header-mb-menu">
              <span class="btn_menu">
                <i class="icon-header fa-sharp fa-solid fa-bars"></i>
              </span>
              <span className="text">Mở rộng</span>
            </a>
          </div>
        </div>
        <div className="header-mb-tab">
          <div className="mb-tab-search">
            <input type="text" placeholder="Nhập từ khóa tìm kiếm" className="txt-search" id="game_search_txt" />
            <a className="btn-search" href="javascript:void(0)">
              <i class="btn-search-icon fa-solid fa-magnifying-glass"></i>
            </a>
          </div>
          <ul className="tab">
            <li className="categories" data-tab="0">
              <a href="javascript:void(0)" className="active">
                Chuyên mục
              </a>
            </li>
            <li className="other" data-tab="1">
              <a href="javascript:void(0)" class="">
                Khác
              </a>
            </li>
          </ul>
          <div className="tabs-list">
            <ul className="tabs-list-categories">
              <li className="list-categories">
                <ul className="list-categories-item">
                  <li>
                    <a href="https://m.genk.vn/mobile.chn">Mobile</a>
                  </li>
                  <li>
                    <a href="https://m.genk.vn/internet.chn">Internet</a>
                  </li>
                  <li>
                    <a href="https://m.genk.vn/tin-ict.chn">Tin ICT</a>
                  </li>
                  <li>
                    <a href="https://m.genk.vn/kham-pha.chn">Khám phá</a>
                  </li>
                  <li>
                    <a href="https://m.genk.vn/xem-mua-luon.chn">Xem - Mua - Luôn</a>
                  </li>
                  <li>
                    <a href="https://m.genk.vn/gia-dung.chn">Gia dụng</a>
                  </li>
                  <li>
                    <a href="https://m.genk.vn/thu-thuat.chn">Thủ thuật</a>
                  </li>
                  <li>
                    <a href="https://m.genk.vn/apps-games.chn">Apps - Games</a>
                  </li>
                  <li>
                    <a href="https://m.genk.vn/do-choi-so.chn">Đồ chơi số</a>
                  </li>
                  <li>
                    <a href="https://m.genk.vn/song.chn">Sống</a>
                  </li>
                  <li>
                    <a href="https://m.genk.vn/blockchain.chn">Blockchain</a>
                  </li>
                  <li>
                    <a href="https://m.genk.vn/tra-da-cong-nghe.chn">Trà đá công nghệ</a>
                  </li>
                  <li>
                    <a href="https://m.genk.vn/nhom-chu-de/emagazine.chn">eMagazine</a>
                  </li>
                </ul>
              </li>
              <li className="list-other">
                <div>
                  <ul className="other-item">
                    <li>
                      <a href="http://m.kenh14.vn" target="_blank" rel="nofollow">
                        <span className="img avatar-channel k14"></span>
                        <span>Kenh14.vn</span> <span className="desc">Tin tức dành cho giới trẻ</span>
                      </a>
                    </li>
                    <li>
                      <a href="http://m.kenh14.vn" target="_blank" rel="nofollow">
                        <span className="img avatar-channel linkhay"></span>
                        <span>LinkHay.com</span> <span className="desc">Cộng đồng chia sẻ tin tức</span>
                      </a>
                    </li>
                    <li>
                      <a href="http://m.kenh14.vn" target="_blank" rel="nofollow">
                        <span className="img avatar-channel soha"></span>
                        <span>Soha.vn</span> <span className="desc"></span>
                      </a>
                    </li>
                    <li>
                      <a href="http://m.kenh14.vn" target="_blank" rel="nofollow">
                        <span className="img avatar-channel afamily"></span>
                        <span>Afamily.vn</span> <span className="desc"></span>
                      </a>
                    </li>
                    <li>
                      <a href="http://m.kenh14.vn" target="_blank" rel="nofollow">
                        <span className="img avatar-channel biz"></span>
                        <span>Cafebiz.vn</span> <span className="desc"></span>
                      </a>
                    </li>
                    <li>
                      <a href="http://m.kenh14.vn" target="_blank" rel="nofollow">
                        <span className="img avatar-channel cafef"></span>
                        <span>CafeF.vn</span> <span className="desc"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     locale: state.localeReducer.locale,
//     loading: state.loadingReducer.loading,
//     loginState: state.loginReducer,
//   };
// };

// const mapDispatchToProps = {
//   getMemberDetail: loginActions.getMemberDetail,
//   logout: loginActions.logout,
// };

// App.propTypes = {
//   locale: PropTypes.string,
//   loading: PropTypes.bool,
//   getMemberDetail: PropTypes.func.isRequired,
// };

// App.defaultProps = {
//   locale: '',
//   loading: false,
//   getMemberDetail: () => {},
// };

export default App;
