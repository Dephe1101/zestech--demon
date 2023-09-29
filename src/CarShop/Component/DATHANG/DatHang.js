import axios from 'axios';
import React, { useState, useTransition } from 'react'
import { useSpring, animated } from 'react-spring'

export default function DatHang() {


    const propsString = useSpring(({
        loop: true,
        from: { rotateZ: "0deg" },
        to: async (next, cancel) => {
            await next({ rotateZ: "30deg" })
            await next({ rotateZ: "-15deg" })
            await next({ rotateZ: "0deg" })
        },

        config: { duration: "100" }

    }))

    const [StateThongTin, SetStateThongTin] = useState({
        hoten: "",
        diachi: "",
        sdt: "",
        email: "",
    })
    console.log(StateThongTin.sdt.length);

    const sendThongTin = (e) => {
        e.preventDefault()
        if (StateThongTin.hoten === "" || StateThongTin.diachi === "" || StateThongTin.sdt.length >= 12 || StateThongTin.sdt.length < 10) {
            alert("err")
            return
        } else {
            let promise = axios({
                url: 'https://64b392170efb99d862680ffe.mockapi.io/api/ThongTin',
                method: "POST",
                data: StateThongTin
            })
        }

    }

    const handleChange = (e) => {
        let { value, name } = e.target
        console.log(name, value);
        SetStateThongTin({
            ...StateThongTin,
            [name]: value
        })
    }

    return (
        <section className=''>
            <div className='datHang container'>
                <h2 className='text-center' style={{ color: "#fcc407" }}>Thông Tin Đặt Hàng</h2>
                <p className='text-center'>Vui lòng cung cấp một số thông tin để chúng tôi hỡ trợ tốt hơn</p>
                <form className='form-group' style={{ height: "350px", width: "50%", margin: "0 auto" }}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Họ và tên</label>
                        <input onChange={handleChange} name='hoten' type="text" className="form-control" id="exampleFormControlInput1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Địa chỉ</label>
                        <input onChange={handleChange} name='diachi' type="text" className="form-control" id="exampleFormControlInput1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Số điện thoại</label>
                        <input onChange={handleChange} name='sdt' type="text" className="form-control" id="exampleFormControlInput1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                        <input onChange={handleChange} name='email' type="text" className="form-control" id="exampleFormControlInput1" />
                    </div>
                    <div className='text-center'>
                        <button type='submit' className='btn mt-2' style={{ backgroundColor: "#fcc407", fontSize: "20px" }} onClick={sendThongTin}>
                            Gửi Đi
                        </button>
                    </div>
                </form>



                <div className='button__fixed'>
                    <button style={{ position: "fixed", bottom: "4%", right: "30px", zIndex: "100", borderRadius: "40px" }} type="button" className="btn btn-primary py-3 button__position" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <div className='d-flex align-items-center '>
                            <animated.i style={{ ...propsString, fontSize: "30px", color: "" }} class="fa fa-shopping-cart button__fixed__icon"></animated.i>
                            <div className='ms-3'>
                                <div className='button__fixed__content' style={{ color: "white", fontSize: "20px" }}> Đăng Ký Mua Ngay</div>
                            </div>
                        </div>
                    </button>
                    <button style={{ position: "fixed", bottom: "15%", left: "30px", zIndex: "100", borderRadius: "40px" }} type="button" className="btn btn-primary py-3 button__position" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <div className='d-flex align-items-center '>
                            <animated.i style={{ ...propsString, fontSize: "30px", color: "" }} class="fab fa-facebook-messenger button__fixed__icon"></animated.i>
                            <div className='ms-3'>
                                <div className='button__fixed__content' style={{ color: "white", fontSize: "20px" }}>Messenger</div>
                            </div>
                        </div>
                    </button>
                    <button style={{ position: "fixed", bottom: "26%", left: "30px", zIndex: "100", borderRadius: "40px", backgroundColor: "rgb(5, 214, 122)" }} type="button" className="btn button__position " data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <div className='d-flex align-items-center '>
                            <animated.img className="button__fixed__zalo" style={{ ...propsString, width: "60px", height: "60px", }} src={require("../../img/zalo-3.jpg")}></animated.img>
                            <div className=''>
                                <div className='button__fixed__content' style={{ color: "white", fontSize: "20px" }}>Zalo</div>
                            </div>
                        </div>
                    </button>
                    <a href='tel:0903836342' style={{ padding: '0', position: "fixed", bottom: "30px", left: "30px", zIndex: "100", borderRadius: "40px" }} type="button" className="btn btn-danger p-3 button__position">
                        <div className='d-flex align-items-center '>
                            <animated.i style={{ ...propsString, color: "white", fontSize: '30px' }} class="fa fa-phone-volume button__fixed__icon"></animated.i>
                            <div className='ms-3'>
                                <div className='button__fixed__content' style={{ color: "white", fontSize: "20px" }}> 0903836342</div>
                            </div>
                        </div>
                    </a>
                    {/* Modal */}
                    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content" style={{ backgroundImage: 'url(https://zestech.vn/wp-content/themes/zestech/images/bg_form_popup.jpg)' }}>
                                <div className="modal-header">
                                    <h5 className="modal-title text-center" id="exampleModalLabel">Thông Tin Đặt Hàng</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">

                                    <p className='text-center'>Vui lòng cung cấp một số thông tin để chúng tôi hỡ trợ tốt hơn</p>
                                    <form className='form-group' >
                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Họ và tên</label>
                                            <input onChange={handleChange} name='hoten' type="text" className="form-control" id="exampleFormControlInput1" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Địa chỉ</label>
                                            <input onChange={handleChange} name='diachi' type="text" className="form-control" id="exampleFormControlInput1" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Số điện thoại</label>
                                            <input onChange={handleChange} name='sdt' type="text" className="form-control" id="exampleFormControlInput1" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                                            <input onChange={handleChange} name='email' type="text" className="form-control" id="exampleFormControlInput1" />
                                        </div>
                                        <div className='text-center'>
                                            <button type='submit' className='btn btn-primary' onClick={sendThongTin}>
                                                Gửi Đi
                                            </button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </div >
        </section >
    )
}
