import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from "../../DATA/data.json"
import axios from 'axios';
export default function MoreItem() {
    let match = useParams()
    console.log(match);
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

    const renderMoreItem = () => {
        return state.list.filter(item => item.id === match.id).map((item, index) => {
            return <div className="mt-5 p-2" >
                <img src={item.hinhAnh} className="card-img-top img-fluid" alt="..." style={{ width: '15rem', height: "16rem" }} />
                <div className="card-body">
                    <p className="card-text">{item.name}</p>
                    <p className="card-text">{item.price}</p>
                    <p className="card-text">{item.content}</p>
                    <button className='btn btn-primary' ></button>
                </div>
            </div>
        })
    }


    return (
        <div>
            {renderMoreItem()}
            <div>
                <button style={{ position: "fixed", bottom: "30px", right: "30px", zIndex: "100" }} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i class="fa fa-shopping-cart"></i>
                </button>
                <a href='tel:0935917883' style={{ position: "fixed", bottom: "30px", left: "30px", zIndex: "100" }} type="button" className="btn btn-primary">
                    <i class="fa fa-phone-volume "><span> 0935917883</span></i>
                </a>
                {/* Modal */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{ backgroundImage: 'url(https://zestech.vn/wp-content/themes/zestech/images/bg_form_popup.jpg)' }}>
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Thông Tin Đặt Hàng</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">

                                <p className='text-center'>Vui lòng cung cấp một số thông tin để chúng tôi hỡ trợ tốt hơn</p>
                                <form className='form-group' style={{ height: "350px" }}>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1" />
                                    </div>

                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
