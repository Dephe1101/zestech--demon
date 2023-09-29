import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';

export default function CameraPage() {
    const [currentPage, setcurrentPage] = useState(1);
    const [state, setState] = useState({
        list: []
    });
    const dataSP = state.list.filter(item => item.loai === 'camera')
    console.log(dataSP);
    const recordsPerPage = 8;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = dataSP.slice(firstIndex, lastIndex);
    const npage = Math.ceil(dataSP.length / recordsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1);
    console.log(numbers);

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none", background: "red" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none", background: "green" }}
                onClick={onClick}
            />
        );
    }

    console.log(state);

    const handelItem = () => {
        let promise = axios({
            url: 'https://64b392170efb99d862680ffe.mockapi.io/api/cardList',
            method: 'GET'
        });
        promise.then(result => {
            setState({
                list: result.data
            });
        });
    };

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
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

    useEffect(() => {
        handelItem();
    }, []);

    const renderItem = () => {
        return records.map((item, index) => {
            return <div className='col-md-3 col-4 card__custom'>
                <div className="card text-start mb-5" style={{ backgroundColor: "transparent", border: "none" }}>
                    <img className="card-img-top" src={item.hinhAnh} alt="Title" />
                    <div className="card-body">
                        <h4 className="card-title">{item.tenSP}</h4>
                        <p className="card-text">{item.giaTien.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</p>
                        <p style={{ textDecoration: "line-through", color: "gray" }} className="card-text text-center">{item.giamGia.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</p>
                    </div>
                </div>
            </div>;
        });
    };

    const prePage = () => {
        if (currentPage !== firstIndex) {
            setcurrentPage(currentPage => currentPage - 1)
        }
    }
    const changePage = (id) => {
        setcurrentPage(id)
    }

    const nextPage = () => {
        if (currentPage !== lastIndex) {
            setcurrentPage(currentPage => currentPage + 1)
        }
    }
    const renderNumbersPage = () => {
        return numbers.map((item, index) => {
            return <li className="page-item">
                <a className="page-link" aria-label="Previous" onClick={() => changePage(item)}>
                    <span aria-hidden="true">{item}</span>
                </a>
            </li>
        })
    }


    return (
        <section className='manHinh container mt-5'>
            <div className='mb-5'>
                <Slider {...settings}>
                    <div className='px-2'>
                        <img style={{ width: "100%" }} src='https://metropolitanhost.com/themes/themeforest/angular/rims/assets/images/match/match-2.jpg' />
                    </div>
                    <div className='px-2'>
                        <img style={{ width: "100%" }} src='https://metropolitanhost.com/themes/themeforest/angular/rims/assets/images/match/match-3.jpg' />
                    </div>
                    <div className='px-2'>
                        <img style={{ width: "100%" }} src='https://metropolitanhost.com/themes/themeforest/angular/rims/assets/images/match/match-1.jpg' />
                    </div>
                    <div className='px-2'>
                        <img style={{ width: "100%" }} src='https://metropolitanhost.com/themes/themeforest/angular/rims/assets/images/match/match-4.jpg' />
                    </div>
                </Slider>
            </div>
            <div>
                <h2 className='title'>SẢN PHẨM</h2>
            </div>
            <div className='row'>
                {renderItem()}
            </div>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" aria-label="Previous" onClick={() => prePage()}>
                            <span aria-hidden="true">«</span>
                        </a>
                    </li>
                    {renderNumbersPage()}
                    <li className="page-item">
                        <a className="page-link" aria-label="Next" onClick={() => nextPage()}>
                            <span aria-hidden="true">»</span>
                        </a>
                    </li>
                </ul>
            </nav>

        </section>
    );
}
