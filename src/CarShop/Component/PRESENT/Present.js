import React, { Component } from 'react'
import Slider from 'react-slick'

export default class Present extends Component {
    render() {


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
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            prevArrow: false,
            nextArrow: false,
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
            <div className='Present'>
                <div className='image' style={{ position: "relative" }}>
                    <img style={{ width: "100%", height: "100%" }} src='https://zestech.com.vn/wp-content/uploads/2023/04/bg_home_3.jpg' />
                    <div style={{ position: "absolute", top: "50%", textAlign: "center", left: "50%", transform: "translateX(-50%)" }} className='image__overlay'>
                        <h2 style={{ color: "#fcc407", fontWeight: 'bold' }}>TƯ VẤN VÀ LẮP ĐẶT MIỄN PHÍ TẠI NHÀ</h2>
                        <p>Tự do trải nghiệm công nghệ đỉnh cao cùng Zestech!</p>
                    </div>
                </div>

                <div className='section'>
                    <div className='mb-5'>
                        <h2 style={{ color: "#fcc407", fontWeight: 'bold', textAlign: "center" }}>TRUYỀN THÔNG NÓI GÌ VỀ ZESTECH</h2>
                    </div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-4'>
                                <div>
                                    <img style={{ width: "100%", height: "100%" }} src="https://zestech.com.vn/wp-content/uploads/2023/04/tu-duy-ban-hang-cung-tien-si-le-tham-duong.jpg" />
                                </div>
                                <p style={{ fontSize: "18px", fontWeight: "bold", marginTop: "10px" }}>24h</p>
                                <h5 style={{ color: "#fcc407", fontWeight: "bold" }}>Chương trình đào tạo “Tư duy bán hàng cho hệ thống đại lý Zestech trên toàn quốc”</h5>
                                <p>
                                    Đây là một chương trình vô cùng thiết thực, giúp nâng cao tư duy trong việc phát triển hoạt động trước và sau bán hàng của doanh nghiệp thời đại…
                                </p>
                            </div>
                            <div className='col-4'>
                                <div>
                                    <img style={{ width: "100%", height: "100%" }} src='https://zestech.com.vn/wp-content/uploads/2023/04/tu-duy-ban-hang-cung-tien-si-le-tham-duong.jpg' />
                                </div>
                                <p style={{ fontSize: "18px", fontWeight: "bold", marginTop: "10px" }}>24h</p>
                                <h5 style={{ color: "#fcc407", fontWeight: "bold" }}>Tiến Linh, Quế Ngọc Hải và Phan Văn Đức hội tụ tại sự kiện lớn nhất ngành nội thất ô tô Việt Nam 2022</h5>
                                <p>
                                    Sự xuất hiện những ngôi sao hàng đầu của bóng đá Việt Nam là Nguyễn Tiến Linh, Quế Ngọc Hải, Phan Văn Đức đã góp phần tạo nên sức nóng vô…
                                </p>
                            </div>
                            <div className='col-4'>
                                <div>
                                    <img style={{ width: "100%", height: "100%" }} src='https://zestech.com.vn/wp-content/uploads/2023/04/tu-duy-ban-hang-cung-tien-si-le-tham-duong.jpg' />
                                </div>
                                <p style={{ fontSize: "18px", fontWeight: "bold", marginTop: "10px" }}>24h</p>
                                <h5 style={{ color: "#fcc407", fontWeight: "bold" }}>Mãn nhãn với các công nghệ mới nhất tại sự kiện ngành nội thất ô tô Việt Nam </h5>
                                <p>
                                    Ngày 10/6, VietNam Automotive Event 2022 đã khép lại thành công với gần 600 doanh nghiệp và trung tâm nội thất xe hơi trên toàn quốc tham dự.
                                </p>
                            </div>
                        </div>
                    </div>
                </div >
                <div className='section '>
                    <div className='container'>
                        <Slider  {...settings}>
                            <div >
                                <img style={{ width: "80%", height: "80%" }} src='https://zestech.com.vn/wp-content/uploads/2023/04/1.png' />
                            </div>
                            <div >
                                <img style={{ width: "80%", height: "80%" }} src='https://zestech.com.vn/wp-content/uploads/2023/04/2.png' />
                            </div>
                            <div >
                                <img style={{ width: "80%", height: "80%" }} src='https://zestech.com.vn/wp-content/uploads/2023/04/3.png' />
                            </div>
                            <div >
                                <img style={{ width: "80%", height: "80%" }} src='https://zestech.com.vn/wp-content/uploads/2023/04/4.png' />
                            </div>
                            <div >
                                <img style={{ width: "80%", height: "80%" }} src='https://zestech.com.vn/wp-content/uploads/2023/04/5.png' />
                            </div>
                            <div >
                                <img style={{ width: "80%", height: "80%" }} src='https://zestech.com.vn/wp-content/uploads/2023/04/6.png' />
                            </div>
                            <div >
                                <img style={{ width: "80%", height: "80%" }} src='https://zestech.com.vn/wp-content/uploads/2023/04/7.png' />
                            </div>
                            <div >
                                <img style={{ width: "80%", height: "80%" }} src='https://zestech.com.vn/wp-content/uploads/2023/04/8.png' />
                            </div>
                            <div >
                                <img style={{ width: "80%", height: "100%" }} src='https://zestech.com.vn/wp-content/uploads/2023/04/9.png' />
                            </div>
                            <div>
                                <img style={{ width: "80%", height: "80%" }} src='https://zestech.com.vn/wp-content/uploads/2023/04/10.png' />
                            </div>
                            <div >
                                <img style={{ width: "80%", height: "80%" }} src='https://zestech.com.vn/wp-content/uploads/2023/04/11.png' />
                            </div>

                        </Slider>
                    </div>
                </div>
                <div className='section '>
                    <div className='container'>
                        <div className='row' style={{ width: '100%' }}>
                            <div className='col-md-6 col-12'>
                                <img style={{ width: "100%", height: "100%" }} src='https://zestech.com.vn/wp-content/uploads/2023/04/zestech-cung-ban-tien-len.jpg' />
                            </div>
                            <div className='col-md-6 col-12'>
                                <img src='https://zestech.com.vn/wp-content/uploads/2023/04/Thiet-ke-chua-co-ten-18-300x87.png' style={{ width: "300px", height: "87px", marginBottom: "20px" }} />
                                <h3 >HÃNG MÀN HÌNH Ô TÔ DUY NHẤT ĐẠT TIÊU CHUẨN XUẤT MỸ</h3>
                                <p>Zestech cung cấp trên 1 triệu sản phẩm màn hình ô tô, là thương hiệu tiên phong có màn hình đạt đủ tiêu chuẩn xuất Mỹ với độ bảo hành lên đến 5 năm tại Việt Nam. Bên cạnh đó, Zestech còn là hãng màn hình ô tô được các hãng xe lớn trên thế giới và Việt Nam ký kết hợp tác chiến lược chính thức. Với năng lực vượt trội và vị thế hàng đầu trong hành trình tiên phong kiến tạo kỉ nguyên ô tô thông minh mới, Zestech tự tin đem đến cho người dùng những sản phẩm tốt nhất với chất lượng cao và giá thành “hợp lý”.</p>
                                <button style={{ backgroundColor: "#ffc000", borderRadius: "50px", fontSize: "20px", padding: "5px 10px", fontWeight: "500" }}>Tìm Hiểu Thêm</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
