import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import Slider from "react-slick";
import { NavLink } from 'react-router-dom';
export default function NewIn() {

    const SampleNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none", background: "black", borderRadius: "10%" }}
                onClick={onClick}
            />
        );
    }


    const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none", background: "black", borderRadius: "10%" }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]

    };



    return (


        <div>
            <section className="new__in section">
                <div className="container">
                    <h2 className="title">NEW IN</h2>
                    <div className="row">
                        <Slider {...settings}>
                            <div className="col-6 col-md-3 px-2">
                                <div className="new__in__img">
                                    <div className=''   >
                                        <img style={{ width: "100%", height: "307px" }} src='https://theme.hstatic.net/200000458777/1001039526/14/cate_feature_1_img.jpg?v=242' alt />
                                    </div>
                                    <div className="new__in__overlay" />
                                    <div className="new__in__play">
                                        <div to="/manhinh">
                                            <NavLink to="/manhinh"><i className="fa fa-play" /></NavLink>
                                            <a href>Read More</a>

                                        </div>
                                    </div>
                                </div>
                                <div className="new__in__title">
                                    <h3>Màn Hình Android Ôtô</h3>
                                    <div className="mb-3 mb-md-0">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3  px-2">
                                <div className="new__in__img">
                                    <div>
                                        <img style={{ width: "100%", height: "100%" }} src='https://theme.hstatic.net/200000458777/1001039526/14/cate_feature_2_img.jpg?v=242' alt />
                                    </div>
                                    <div className="new__in__overlay" />
                                    <div className="new__in__play">
                                        <div>
                                            <NavLink to="/den"><i className="fa fa-play" /></NavLink>
                                            <a href>Read More</a>

                                        </div>
                                    </div>
                                </div>
                                <div className="new__in__title">
                                    <h3>Nâng Cấp Ánh Sáng</h3>
                                    <div className="mb-3 mb-md-0">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3  px-2">
                                <div className="new__in__img">
                                    <div style={{ width: "100%", height: "307px" }}>
                                        <img style={{ width: "100%", height: "100%" }} src='https://theme.hstatic.net/200000458777/1001039526/14/cate_feature_3_img.jpg?v=242      ' alt />
                                    </div>
                                    <div className="new__in__overlay" />
                                    <div className="new__in__play">
                                        <div>
                                            <NavLink to="/phimcachnhiet"><i className="fa fa-play" /></NavLink>
                                            <a href>Read More</a>

                                        </div>
                                    </div>
                                </div>
                                <div className="new__in__title">
                                    <h3>Phim Cách Nhiệt</h3>
                                    <div className="mb-3 mb-md-0">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3  px-2">
                                <div className="new__in__img">
                                    <img src='https://theme.hstatic.net/200000458777/1001039526/14/cate_feature_4_img.jpg?v=242' alt />
                                    <div className="new__in__overlay" />
                                    <div className="new__in__play">
                                        <div>
                                            <NavLink to="/camerahanhtrinh"><i className="fa fa-play" /></NavLink>
                                            <a href>Read More</a>

                                        </div>
                                    </div>
                                </div>
                                <div className="new__in__title">
                                    <h3>Camera Hành Trình</h3>
                                    <div className="mb-3 mb-md-0">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3  px-2">
                                <div className="new__in__img">
                                    <img src='https://theme.hstatic.net/200000458777/1001039526/14/cate_feature_5_img.jpg?v=242' alt />
                                    <div className="new__in__overlay" />
                                    <div className="new__in__play">
                                        <div>
                                            <NavLink to="/copdientudong"><i className="fa fa-play" /></NavLink>
                                            <a href>Read More</a>

                                        </div>
                                    </div>
                                </div>
                                <div className="new__in__title">
                                    <h3>Cốp Điện Tự Động</h3>
                                    <div className="mb-3 mb-md-0">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-md-3  px-2">
                                <div className="new__in__img">
                                    <img src='https://theme.hstatic.net/200000458777/1001039526/14/cate_feature_6_img.jpg?v=242' alt />
                                    <div className="new__in__overlay" />
                                    <div className="new__in__play">
                                        <div>
                                            <a href><i className="fa fa-play" /></a>
                                            <a href>Read More</a>

                                        </div>
                                    </div>
                                </div>
                                <div className="new__in__title">
                                    <h3>Đèn Led Nội Thất</h3>
                                    <div className="mb-3 mb-md-0">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>

            </section>
            <section>
            </section>

        </div>
    )
}
