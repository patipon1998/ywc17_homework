import React from 'react';
import { get } from 'lodash';
import parse from 'html-react-parser';

import Navbar from '../conponent/Navbar';
import useGetContent from '../conponent/useGetContent';

import './HomePage.scss';

import bannerLogo from '../img/banner.png';

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
                                <button class="btn reg-btn">
                                    คงเหลือสิทธิลงทะเบียน เฟส 2<br />
                                    สำหรับวันที่ 29 ตุลาคม 2562
                                    <br />
                                    รอบเวลา 6.00 น. จำนวน 87,213 คน
                                    <br />
                                    รอบเวลา 18.00 น. จำนวน 87,212 คน
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
                        <div class="col-md-10">
                            <div className="row">
                                <div className="col-12">
                                    <div className="head-title d-sm-block">
                                        มาตรการส่งเสริมการบริโภค <br /> ในประเทศ{' '}
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
                <div className="col-md-3 col-lg-8"></div>
            </div>
        </>
    );
};

export default HomePage;
