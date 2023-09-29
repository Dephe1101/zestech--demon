import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Table() {


    const [state, setState] = useState({
        list: []
    })
    console.log(state);


    const renderThongTin = () => {
        let promise = axios({
            url: "https://64b392170efb99d862680ffe.mockapi.io/api/ThongTin",
            method: 'GET'
        })
        promise.then(result => {
            setState({
                list: result.data
            })
        })
    }


    useEffect(() => {
        renderThongTin()
    }, [])

    return (
        <div>
            <table className="table bg-white">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Họ Tên</th>
                        <th scope="col">Địa Chỉ</th>
                        <th scope="col">SDT</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {state.list.map((item, index) => {
                        return <tr>
                            <th scope="col">{item.id}</th>
                            <th scope="col">{item.hoten}</th>
                            <th scope="col">{item.diachi}</th>
                            <th scope="col">{item.sdt}</th>
                            <th scope="col">{item.email}</th>
                        </tr>
                    })}
                </tbody>
            </table>

        </div>
    )
}
