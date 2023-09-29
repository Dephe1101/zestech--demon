import React from 'react'
import Slider from 'react-slick'
import CountUp from 'react-countup';
export default function GioiThieu() {
    return (
        <div className='gioi__thieu'>
            <div className='gioi__thieu__image'>
            </div>
            <div className='gioi__thieu__content'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <h3>CÔNG TY TNHH THƯƠNG MẠI
                                XUẤT NHẬP KHẨU NỘI THẤT Ô TÔ
                            </h3>
                            <h2>
                                QUANG MINH
                            </h2>
                            <p>
                                Công ty TNHH Thương Mại Xuất nhập khẩu Nội thất ô tô Quang Minh chuyên cung
                                cấp các sản phẩm phụ kiện tiện ích ô tô chính hãng và uy tín: Màn hình DVD
                                Android, Bóng đèn ô tô, Camera hành trình, Cảm biến áp suất lốp, Cảm biến
                                lùi,…trên toàn quốc.
                            </p>
                            <br />
                            <p>
                                Quang Minh tự hào đem đến cho khách hàng những sản phẩm với chất lượng tốt, dịch vụ uy tín,
                                chuyên nghiệp với giá thành “cạnh tranh”. Đồng thời, chúng tôi luôn không ngừng đổi mới và
                                sáng tạo để phù hợp nhu cầu của nhiều đối tượng khách hàng theo các tiêu chuẩn nghiêm ngặt
                                của thị trường.
                            </p>
                        </div>
                        <div className='col-6'>
                            <img style={{ width: "100%", height: "100%" }} src='https://zestech.vn/wp-content/uploads/2022/07/zestech-cung-ban-tien-len.jpg' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='gioi__thieu__vision mb-5'>
                <div className='container'>
                    <div className='row' >
                        <div className='col-6 py-5' style={{ textAlign: "end", borderRight: "2px solid #fcc407" }}>
                            <h2 style={{ color: "#fcc407" }}>TẦM NHÌN</h2>
                            <p>
                                Đến năm 2025, Quang Minh sẽ mở rộng thêm 1000 đại lý và showroom tại Việt Nam.
                                Tại thị trường Đông Nam Á, chúng tôi sẽ mở rộng thị trường các nước Lào, Campuchia,
                                Thái Lan và định hướng trở thành đơn vị hàng đầu Châu Á cung cấp về sản phẩm công
                                nghệ cho ô tô.
                            </p>
                        </div>
                        <div className='col-6 py-5' style={{ textAlign: "start" }}>
                            <h2 style={{ color: "#fcc407" }}>SỨ MỆNH</h2>
                            <p className=''>
                                Quang Minh cam kết phân phối các sản phẩm chính hãng chất lượng cao với giá thành niêm
                                yết trên từng sản phẩm. Chúng tôi thường xuyên có những chính sách khuyến mại nhằm mang
                                đến đưa những sản phẩm tốt nhất với giá thành "hợp lý" đến với khách hàng. Tất cả khách
                                hàng đến với Quang Minh đều được tư vấn và hỗ trợ tận tâm, nhiệt tình.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='gioi__thieu__map'>
                <div className='gioi__thieu__map__content' style={{ width: "50%", marginLeft: "auto" }}>
                    <div className='' style={{ margin: '' }}>
                        <img src='https://zestech.vn/wp-content/themes/zestech/images/logo_white.png' />
                    </div>
                    <div className='content ps-5 mt-4'>
                        <p className='paragraph'>
                            Công ty TNHH Thương mại Xuất nhập khẩu Nội thất ô tô Quang Minh là đối tác độc quyền phân phối các
                            sản phẩm mang thương hiệu ZESTECH của Shenzhen Zest Technology Co;Ltd – một trong những
                            công ty hàng đầu về sản xuất sản phẩm điện tử tiện ích ô tô tại Trung Quốc.
                        </p>
                        <div className='title__mini'>
                            <h5>SẢN PHẢM</h5>
                            <p>
                                Tất cả các dòng xe của các hãng xe hơi nổi tiếng như: Toyota, Huyndai, Honda, Kia, Mitsubishi, Nissan, Suzuki, Ford, Mazda...
                            </p>
                        </div>
                        <div className='icon'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-4'>
                                        <p className='number'>10+</p>
                                        <h4 className='prop'>ĐỘ BỀN+</h4>
                                        <p className='description'>Siểu Đỉnh</p>
                                    </div>
                                    <div className='col-4'>
                                        <p className='number'>5+</p>
                                        <h4 className='prop'>BẢO HÀNH+</h4>
                                        <p className='description'>An toàn tuyệt đối+</p>
                                    </div>
                                    <div className='col-4'>
                                        <p className='number'>780+</p>
                                        <h4 className='prop'>MODEL+  </h4>
                                        <p className='description' >Hiện đại nhất+</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='gioi__thieu__count container-fluid'>
                <div className='row text-center' style={{ width: '100%' }}>
                    <div className='col-4'>
                        <div className='gioi__thieu__count__img'>
                            <img src='https://zestech.vn/wp-content/uploads/2021/12/rating.png' />
                        </div>
                        <CountUp start={1000000} end={2000000} duration={5} style={{ fontSize: "30px" }}>
                            <h2>2.000.000+</h2>
                        </CountUp>
                        <p>Khách hàng tin dùng</p>
                    </div>

                    <div className='col-4'>
                        <div className='gioi__thieu__count__img'>
                            <img src='https://zestech.vn/wp-content/uploads/2021/12/enterprise.png' />
                        </div>
                        <CountUp start={0} end={750} duration={5} style={{ fontSize: "30px" }}>
                            <h2>750+</h2>
                        </CountUp>
                        <p>Đại lý chính hãng</p>
                    </div>
                    <div className='col-4'>
                        <div className='gioi__thieu__count__img'>
                            <img src='https://zestech.vn/wp-content/uploads/2021/12/handshake.png' />
                        </div>
                        <CountUp start={0} end={50} duration={5} style={{ fontSize: "30px" }}>
                            <h2>50+</h2>
                        </CountUp>
                        <p> Đối tác chính thức</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
