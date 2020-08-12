import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import axios from 'axios'
import api from '../../../../api/productApi'
import Slide from '../../../../components/Main/Header/Slide'

const Home = props => {
    //Sản phẩm mới nhất
    const [product, setProduct] = useState('')
    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await axios.get('http://localhost:8080/product?_sort=date&_order=desc&_limit=6');
                setProduct(data);
            } catch (error) {
            }
        }
        getProduct()
    }, []);
    console.log(product)

    const listProduct = data => {
        if (data) {
            return data.map((el, index) => (

                <div key={index} className="col-sm-6 col-lg-4 mb-4"   >
                    <div className="block-4 text-center border" style={{ height: "400px", width: "300px" }}>
                        <figure className="block-4-image">
                            <Link to={`/detail/${el.id}`} ><img src={el.image} style={{ height: "250px" }} alt="Image placeholder" className="img-fluid" /></Link>
                        </figure>
                        <div className="block-4-text p-4">
                            <h4 style={{ fontSize: "20px" }}><Link to="/detail">{el.name}</Link></h4>
                            <p className="text-primary font-weight-bold">${el.price}</p>
                            <p className="mb-0">{el.content}</p>
                        </div>
                    </div>
                </div>
            ))
        }
    }

    //tất cả sản phẩm
    const [product1, setProduct1] = useState('')
    useEffect(() => {
        const getProduct1 = async () => {
            try {
                const { data } = await api.getAll();
                setProduct1(data);
            } catch (error) {
            }
        }
        getProduct1()
    }, []);
    console.log(product)

    const listProduct1 = data => {
        if (data) {
            return data.map((el, index) => (

                <div key={index} className="col-sm-6 col-lg-4 mb-4"  >
                    <div className="block-4 text-center border" style={{ height: "400px", width: "300px" }}>
                        <figure className="block-4-image">
                            <Link to={`/detail/${el.id}`} ><img src={el.image} style={{ height: "250px" }} alt="Image placeholder" className="img-fluid" /></Link>
                        </figure>
                        <div className="block-4-text p-4">
                            <h4 style={{ fontSize: "20px" }}><Link to="/detail" >{el.name}</Link></h4>
                            <p className="text-primary font-weight-bold">${el.price}</p>
                            <p className="mb-0">{el.content}</p>
                        </div>
                    </div>
                </div>
            ))
        }
    }

    return (

        <div>
            <Slide />

            {/* sản phẩm mới nhất */}
            <div className="site-section block-3 site-blocks-2 bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 site-section-heading text-center pt-4">
                            <h2>SẢN PHẨM MỚI NHẤT</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="nonloop-block-3">
                                {/* product */}

                                <div className="row mb-5" style={{ marginTop: "50px" }}>
                                    {product ? listProduct(product) : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >



            {/* Tất cả sản phẩm */}

            <div className="site-section block-3 site-blocks-2 bg-light" style={{ marginTop: "-200px" }} >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 site-section-heading text-center pt-4">
                            <h2>TẤT CẢ SẢN PHẨM</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="nonloop-block-3">


                                {/* product */}

                                <div className="row mb-5" style={{ marginTop: "50px" }}>

                                    {product1 ? listProduct1(product1) : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ------------------------------------------------ */}
            <div className="site-section block-8">
                <div className="container">
                    <div className="row justify-content-center  mb-5">
                        <div className="col-md-7 site-section-heading text-center pt-4">
                            <h2>Big Sale!</h2>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-12 col-lg-7 mb-5">
                            <a href="#"><img src="images/blog_1.jpg" alt="Image placeholder" className="img-fluid rounded" /></a>
                        </div>
                        <div className="col-md-12 col-lg-5 text-center pl-md-5">
                            <h2><a href="#">50% less in all items</a></h2>
                            <p className="post-meta mb-4">By <a href="#">Carl Smith</a> <span className="block-8-sep">•</span> September 3, 2018</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam iste dolor accusantium facere corporis ipsum animi deleniti fugiat. Ex, veniam?</p>
                            <p><a href="#" className="btn btn-primary btn-sm">Shop Now</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

Home.propTypes = {

}

export default Home
