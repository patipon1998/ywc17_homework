import React from 'react';

import footerLogo from '../img/footer.png';

import './Footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="footer-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-12">
                            <img className="logo" src={footerLogo} />
                        </div>
                        <div className="col-md-3 col-sm-4 col-xs-12">
                            <div className="head">ข้อมูลลงทะเบียนประชาชน</div>
                            <div>
                                {'การรับสิทธิ การใช้งานแอปพลิเคชั่น '}
                                <span className="nowrap">“เป๋าตัง”</span>
                                {' และ '}
                                <span className="nowrap">“ถุงเงิน”</span>
                            </div>
                            <div>
                                ติดต่อ ชิมช้อปใช้ Call Center by Krungthai โทร.
                                <a className="ml-1" href="tel:021111144">
                                    <span className="nowrap">0 2111 1144</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-4 col-xs-12">
                            <div className="head">
                                ข้อมูลลงทะเบียนผู้ประกอบการ
                            </div>
                            <div>เงื่อนไขและวิธีการเข้าร่วมมาตรการฯ</div>
                            <div>
                                ติดต่อ โทร.
                                <a className="ml-1" href="tel:022706400">
                                    <span className="nowrap">
                                        0 2270 6400 กด 7
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-4 col-xs-12">
                            <div className="head">ข้อมูลเที่ยวชิมช้อปใช้</div>
                            <div>ติดต่อ ททท.</div>
                            <div>
                                โทร
                                <a className="ml-1" href="tel:1672">
                                    <span>1672</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bar">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-sm-12 col-md-3 col-lg-3">
                            <div className="copyright">
                                Copyright © 2003-2019
                            </div>
                        </div>
                        <div className="row col-sm-12 col-md-9 col-lg-9">
                            <ul className="nav col-sm-12">
                                <li className="col-sm-4 col-md-4 col-lg-4 nav-item">
                                    <a
                                        className="nav-link"
                                        href="https://regist.xn--b3caa1e2a7e2b0h2be.com/Register/"
                                        target="_blank"
                                    >
                                        ลงทะเบียนเข้าร่วมมาตรการ
                                    </a>
                                </li>
                                <li className="col-sm-4 col-md-4 col-lg-4 nav-item">
                                    <a
                                        className="nav-link"
                                        href="https://www2.xn--b3caa1e2a7e2b0h2be.com/howto-register"
                                        target="_blank"
                                    >
                                        ขั้นตอนการเข้าร่วมทั้งหมด
                                    </a>
                                </li>
                                <li className="col-sm-4 col-md-4 col-lg-4 nav-item">
                                    <a
                                        className="nav-link"
                                        href="https://www2.xn--b3caa1e2a7e2b0h2be.com/thung-ngern-shop-province"
                                        target="_blank"
                                    >
                                        รายชื่อร้านค้าที่เข้าร่วมรายการ
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
