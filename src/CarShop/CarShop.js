import React, { useEffect, useState } from 'react'
import Header from './Header/Header'
import Carousel from './Component/CAROUSEL/Carousel'
import NewIn from './Component/NEWIN/NewIn'
import ShowTime from './Component/SHOW TIME/ShowTime'

import axios from 'axios'
import Form from './Component/FORM/Form'
import Footer from './Footer/Footer'
import Product from './Component/PRODUCT/Product'
import Present from './Component/PRESENT/Present'
import DatHang from './Component/DATHANG/DatHang'
import HeaderFixed from './Component/HEADERFIXED/HeaderFixed'



export default function CarShop() {



    return (
        <div>
            <HeaderFixed />
            <Header />
            <Carousel />
            <NewIn />
            <DatHang />
            <ShowTime />
            <Present />
            <Product />
            <Footer />
        </div>
    )
}
