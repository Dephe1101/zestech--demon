import React, { useEffect, useState } from 'react'
import data from '../../DATA/data.json'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink, useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux';
import axios from 'axios';
export default function ShowTime() {

    const SampleNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "black", borderRadius: "10%" }}
                onClick={onClick}
            />
        );
    }


    const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "black", borderRadius: "10%" }}
                onClick={onClick}
            />
        );
    }


    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    const navigate = useNavigate()

    const handleDetail = (id) => {
        navigate(`/detail/${id}`)
    }



    const [state, setState] = useState({
        list: []
    })
    console.log(state.list);

    const handelItem = () => {
        let promise = axios({
            url: 'https://64b392170efb99d862680ffe.mockapi.io/api/cardList',
            method: 'GET'
        })
        promise.then(result => {
            setState({
                list: result.data
            })
        })
    }
    useEffect(() => {
        handelItem()
    }, [])

    const renderManHinh = () => {
        return state.list.filter(product => product.loai === 'manHinh').slice(0, 8).map((item, index) => {
            return <div className="mt-1 p-2 col-md-3 col-4" >
                <div className='card__custom__img' >
                    <img src={item.hinhAnh} className="card-img-top img-fluid" alt="..." style={{ width: '100%', height: "100%" }} />
                </div>
                <div className="card-body">
                    <p className="card-text">{item.tenSP}</p>
                    <p className="card-text">{item.giaTien.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</p>
                    <p style={{ textDecoration: "line-through", color: "gray", textAlign: 'center' }}>{item.giamGia.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</p>
                </div>
            </div>

        })
    }
    const renderAndroid = () => {
        return state.list.filter(product => product.loai === 'android').map((item, index) => {
            return <div className="mt-1 p-2 col-md-3 col-4" key={index}>
                <div className='card__custom__img' >
                    <img src={item.hinhAnh} className="card-img-top img-fluid" alt="..." style={{ width: '100%', height: "100%" }} />
                </div>
                <div className="card-body">
                    <p className="card-text">{item.tenSP}</p>
                    <p className="card-text">{item.giaTien.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</p>
                    <p style={{ textDecoration: "line-through", color: "gray", textAlign: 'center' }}>{item.giamGia.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</p>

                </div>
            </div>
        })
    }
    const renderBongDen = () => {
        return state.list.filter(product => product.loai === 'bongDen').map((item, index) => {
            return <div className="mt-1 p-2 col-md-3 col-4" key={index}>
                <div className='card__custom__img'>
                    <img src={item.hinhAnh} className="card-img-top img-fluid" alt="..." style={{ width: '100%', height: "100%" }} />
                </div>
                <div className="card-body">
                    <p className="card-text">{item.tenSP}</p>
                    <p className="card-text">{item.gia}</p>
                    <p className="card-text">{item.loai}</p>
                </div>
            </div>
        })
    }
    const renderCamera = () => {
        return state.list.filter(product => product.loai === 'camera').map((item, index) => {
            return <div className="mt-1 p-2 col-md-3 col-4" key={index}>
                <div className='card__custom__img'>
                    <img src={item.hinhAnh} className="card-img-top img-fluid" alt="..." style={{ width: '100%', height: "100%" }} />
                </div>
                <div className="card-body">
                    <p className="card-text">{item.tenSP}</p>
                    <p className="card-text">{item.giaTien.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</p>
                    <p style={{ textDecoration: "line-through", color: "gray", textAlign: 'center' }}>{item.giamGia.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</p>
                </div>
            </div>
        })
    }
    const renderCameraHanhTrinh = () => {
        return state.list.filter(product => product.loai === 'cameraHanhTrinh').map((item, index) => {
            return <div className="mt-1 p-2 col-md-3 col-4" key={index}>
                <div className='card__custom__img'>
                    <img src={item.hinhAnh} className="card-img-top img-fluid" alt="..." style={{ width: '100%', height: "100%" }} />
                </div>
                <div className="card-body">
                    <p className="card-text">{item.tenSP}</p>
                    <p className="card-text">{item.gia}</p>
                    <p className="card-text">{item.loai}</p>

                </div>
            </div>
        })
    }
    const renderCamBien = () => {
        return state.list.filter(product => product.loai === 'camBien').map((item, index) => {
            return <div className="mt-1 p-2 col-md-3 col-4" key={index}>
                <div className='card__custom__img'>
                    <img src={item.hinhAnh} className="card-img-top img-fluid" alt="..." style={{ width: '100%', height: "100%" }} />
                </div>
                <div className="card-body">
                    <p className="card-text">{item.tenSP}</p>
                    <p className="card-text">{item.gia}</p>
                    <p className="card-text">{item.loai}</p>

                </div>
            </div>
        })
    }
    const renderLoa = () => {
        return state.list.filter(product => product.loai === 'loa').map((item, index) => {
            return <div className="mt-1 p-2 col-md-3 col-4 " key={index}>
                <div className='card__custom__img'>
                    <img src={item.hinhAnh} className="card-img-top img-fluid" alt="..." style={{ width: '100%', height: "100%" }} />
                </div>
                <div className="card-body">
                    <p className="card-text">{item.tenSP}</p>
                    <p className="card-text">{item.gia}</p>
                    <p className="card-text">{item.loai}</p>
                    <button className='btn btn-primary' onClick={() => handleDetail(item.id)}></button>
                </div>
            </div>
        })
    }

    return (
        <div>
            <section class="show__time section" style={{}}>
                <div class="container-md mb-5">
                    <h2 className='title text-center'>MÀN HÌNH ANDROID ÔTÔ</h2>
                    <div className='show__time__item row'>
                        {renderManHinh()}
                    </div>
                    <div className='text-center'>
                        <button className='btn btn-primary'>
                            <NavLink className="nav-link dropdown-item text-white "
                                to="/manhinh"
                            >
                                Xem Thêm
                            </NavLink>
                        </button>
                    </div>
                </div>
                <div class="container-md mb-5">
                    <h2 className='title text-center'> MÀN HÌNH LIỀN CAMERA 360</h2>
                    <div className='show__time__item row'>
                        {renderCamera()}
                    </div>
                    <div className='text-center'>
                        <button className='btn btn-primary'>
                            <NavLink className="nav-link dropdown-item text-white "
                                to="/camera"
                            >
                                Xem Thêm
                            </NavLink>
                        </button>
                    </div>
                </div>

                <div class="container-md mb-5">
                    <h2 className='title text-center'>BOX ANDROID ÔTÔ</h2>
                    <div className='show__time__item row'>
                        {renderAndroid()}
                    </div>
                    <div className='text-center'>
                        <button className='btn btn-primary'>
                            <NavLink className="nav-link dropdown-item text-white "
                                to="/den"
                            >
                                Xem Thêm
                            </NavLink>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}
