import React from 'react';
import { get } from 'lodash';
import parse from 'html-react-parser';

import Navbar from '../conponent/Navbar';
import Footer from '../conponent/Footer';
import useGetContent from '../conponent/useGetContent';

import bannerLogo from '../img/banner.png';
import bannerKTB from '../img/Banner_KTB_SQ.png';
import bannerCGD from '../img/Banner_CGD_Sq.png';
import bannerTAT from '../img/Banner_TAT_Hotline_Sq.png';
import MOFLogo from '../img/MOF.png';
import FPOLogo from '../img/FPO.png';
import CGDLogo from '../img/CGD.png';
import KrungthaiLogo from '../img/Krungthai.png';
import MOTSLogo from '../img/MOTS.png';
import TATLogo from '../img/TAT.png';

import './HomePage.scss';

const HomePage = () => {
    const content = useGetContent();
    return (
        <>
            <Navbar navbarItems={get(content, 'navbarItems', [])} />
            <div className="banner">
                <div className="row no-gutters">
                    <div className="col-4 cover-img-1"></div>
                    <div className="col-4 cover-img-2">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-12">
                                <div className="logo-box">
                                    <img src={bannerLogo} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 cover-img-3"></div>
                </div>
            </div>
            <div className="reg-box">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div>ตั้งแต่วันที่</div>
                        </div>
                        <div className="col-12">
                            <div className="range-time">
                                {get(content, 'duration', '')}
                            </div>
                        </div>
                        <div className="col-12">
                            <a
                                href="https://regist.xn--b3caa1e2a7e2b0h2be.com/Register/"
                                target="_blank"
                            >
                                <button className="btn reg-btn">
                                    ลงทะเบียน เฟส 2<br />
                                    ตั้งแต่วันที่ 24 ต.ค.62 วันละ 2 รอบ เวลา
                                    6.00 และ 18.00 น.
                                    <br />
                                    {`(จำกัดจำนวนผู้ลงทะเบียนรอบละ 5 แสนคน รวม 1 ล้านคนต่อวัน)`}
                                    {/* <br />
                                    รอบเวลา 18.00 น. จำนวน 87,212 คน */}
                                </button>
                                <hr />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="detail-box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10">
                            <div className="row">
                                <div className="col-12">
                                    <div className="head-title d-none d-sm-block">
                                        มาตรการส่งเสริมการบริโภค <br />
                                        {' ในประเทศ '}
                                        <span className="nowrap">
                                            “ชิมช้อปใช้”
                                        </span>
                                    </div>
                                    <div className="head-title d-sm-none">
                                        {'มาตรการส่งเสริมการบริโภคในประเทศ '}
                                        <span className="nowrap">
                                            “ชิมช้อปใช้”
                                        </span>
                                    </div>
                                </div>
                                <div className="col-12 mt-4">
                                    <div className="detail">
                                        {parse(get(content, 'detail', ''))}
                                    </div>
                                </div>
                                <div className="col-12 mt-4 condition-box">
                                    <div className="title">
                                        เงื่อนไขการเข้าร่วมมาตรการ
                                    </div>
                                    <div className="detail ul mt-2">
                                        {parse(get(content, 'condition', ''))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tat-box">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-4">
                            <a href="tel:021111144">
                                <img src={bannerKTB} />
                            </a>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <a href="tel:022706400">
                                <img src={bannerCGD} />
                            </a>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <a href="tel:1672">
                                <img src={bannerTAT} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="logo-box">
                <div className="container">
                    <div className="row d-none d-sm-block">
                        <div className="d-flex justify-content-around">
                            <div className="p2">
                                <a
                                    href="https://www.mof.go.th/th/home"
                                    target="_blank"
                                >
                                    <img src={MOFLogo} />
                                </a>
                            </div>
                            <div className="p2">
                                <a href="http://www.fpo.go.th" target="_blank">
                                    <img src={FPOLogo} />
                                </a>
                            </div>
                            <div className="p2">
                                <a href="https://www.cgd.go.th" target="_blank">
                                    <img src={CGDLogo} />
                                </a>
                            </div>
                            <div className="p2">
                                <a
                                    href="https://www.newcb.ktb.co.th"
                                    target="_blank"
                                >
                                    <img src={KrungthaiLogo} />
                                </a>
                            </div>
                            <div className="p2">
                                <a
                                    href="https://www.mots.go.th"
                                    target="_blank"
                                >
                                    <img src={MOTSLogo} />
                                </a>
                            </div>
                            <div className="p2">
                                <a
                                    href="https://thai.tourismthailand.org"
                                    target="_blank"
                                >
                                    <img src={TATLogo} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row d-sm-none">
                        <div className="col-4 text-right">
                            <a
                                href="https://www.mof.go.th/th/home"
                                target="_blank"
                            >
                                <img src={MOFLogo} />
                            </a>
                        </div>
                        <div className="col-4 text-center">
                            <a href="http://www.fpo.go.th" target="_blank">
                                <img src={FPOLogo} />
                            </a>
                        </div>
                        <div className="col-4 text-left">
                            <a href="https://www.cgd.go.th" target="_blank">
                                <img src={CGDLogo} />
                            </a>
                        </div>
                        <div className="col-4 text-right">
                            <a
                                href="https://www.newcb.ktb.co.th"
                                target="_blank"
                            >
                                <img src={KrungthaiLogo} />
                            </a>
                        </div>
                        <div className="col-4 text-center">
                            <a href="https://www.mots.go.th" target="_blank">
                                <img src={MOTSLogo} />
                            </a>
                        </div>
                        <div className="col-4 text-left">
                            <a
                                href="https://thai.tourismthailand.org"
                                target="_blank"
                            >
                                <img src={TATLogo} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default HomePage;
