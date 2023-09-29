import React from 'react'

export default function Product() {
    return (
        <section className='Product p-4 mt-5'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-3 col-sm-6 col-12 my-3'>
                        <div className='Product__item d-flex  align-item-center'>
                            <div className='Product__img'>
                                <img src='https://zestech.vn/wp-content/uploads/2022/01/guaranteed.png'></img>
                            </div>
                            <div className='Product__content ms-3'>
                                <h4 style={{ lineHeight: "40px", fontWeight: "bold" }}> Bảo hành phần cứng</h4>
                                <p style={{ margin: "none" }}>Lên đến 5 năm</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-6 col-12 my-3' >
                        <div className='Product__item d-flex  align-item-center'>
                            <div className='Product__img'>
                                <img src='https://zestech.vn/wp-content/uploads/2022/01/replacement.png'></img>
                            </div>
                            <div className='Product__content ms-3'>
                                <h4 style={{ lineHeight: "40px", fontWeight: "bold" }}> Bảo hành phần mềm</h4>
                                <p style={{ margin: "none" }}>Trọn đời</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-6 col-12 my-3' >
                        <div className='Product__item d-flex  align-item-center'>
                            <div className='Product__img'>
                                <img src='https://zestech.vn/wp-content/uploads/2022/01/tools.png'></img>
                            </div>
                            <div className='Product__content ms-3'>
                                <h4 style={{ lineHeight: "40px", fontWeight: "bold" }}> Độ bền</h4>
                                <p style={{ margin: "none" }}>Lên đến 10 năm</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-6 col-12 my-3'>
                        <div className='Product__item d-flex  align-item-center'>
                            <div className='Product__img'>
                                <img src='https://zestech.vn/wp-content/uploads/2022/06/42574831.png'></img>
                            </div>
                            <div className='Product__content ms-3'>
                                <h4 style={{ lineHeight: "40px", fontWeight: "bold" }}> Bảo hành phần cứng</h4>
                                <p style={{ margin: "none" }}>Lên đến 5 năm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
