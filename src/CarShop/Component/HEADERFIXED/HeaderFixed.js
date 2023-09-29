import React from 'react'
import { NavLink } from 'react-router-dom'

export default function HeaderFixed() {
    return (
        <header id="headerFixed">
            <nav className="navbar navbar-expand-md">
                <div className="container">
                    <div className='logo' style={{ background: "#ffc000", alignSelf: "center" }}>
                        <img src='https://zestech.vn/wp-content/themes/zestech/images/logo.png' />
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#movieCyber" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <i className="fa fa-bars" />
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="movieCyber">
                        <ul className="navbar-nav my-2 my-lg-0 navbar-nav-scroll container" style={{ justifyContent: "flex-end" }} >
                            <li className="nav-item line active">
                                <NavLink className="nav-link "
                                    to="/home"
                                >
                                    <i class="fa fa-home"></i> TRANG CHỦ
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className="nav-link "
                                    to="/home"
                                >
                                    GIỚI THIỆU
                                </NavLink>
                            </li>
                            <li className="nav-item line">
                                <a className="nav-link" href="#">ĐẠI LÝ</a>
                            </li>
                            <li class="nav-item dropdown line">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    SẢN PHẨM
                                </a>
                                <ul class="dropdown-menu dropdown-menu-white" style={{ backgroundColor: 'black' }}>
                                    <li><NavLink className="nav-link dropdown-item text-white "
                                        to="/manhinh"
                                    >
                                        Màn Hình
                                    </NavLink></li>
                                    <li><NavLink className="nav-link dropdown-item text-white "
                                        to="/camera"
                                    >
                                        Camera
                                    </NavLink></li>
                                    <li><NavLink className="nav-link dropdown-item text-white "
                                        to="/den"
                                    >
                                        Đèn
                                    </NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item line">
                                <a className="nav-link" href="#">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header >

    )
}
