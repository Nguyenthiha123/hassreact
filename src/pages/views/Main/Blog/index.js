import React, { useEffect, useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import api1 from '../../../../api/categoryApi'
import api2 from '../../../../api/userAPI'
import api from '../../../../api/postApi'
import Slide from '../../../../components/Main/Header/Slide'

const Blog = props => {
    const [post, setPost] = useState('')
    useEffect(() => {
        const getPost = async () => {
            try {
                const { data } = await api.getAll();
                setPost(data);
            } catch (error) {
            }
        }
        getPost()
    }, []);

    //get data category
    const [category, setCategory] = useState('')
    useEffect(() => {
        const getCategory = async () => {
            try {
                const { data } = await api1.getAll();
                setCategory(data);
            } catch (error) {
            }
        }
        getCategory()
    }, []);

    //get data user
    const [user, setUser] = useState('')
    useEffect(() => {
        const getUser = async () => {
            try {
                const { data } = await api2.getAll();
                setUser(data);
            } catch (error) {

            }
        }
        getUser()
    }, []);
    //list dữ liệu
    const listPost = data => {
        if (data) {
            return data.map((el, index) => (
                <Link to={`/detailPost/${el.id}`} className="row mb-5" >
                    <div className="col-md-4" key={index}>
                        <div className="block-16">
                            <figure>
                                <img src={el.image} style={{ height: "180px", width: "250px" }} alt="Image placeholder" className="img-fluid rounded" />
                            </figure>
                        </div>
                    </div>

                    <div style={{ marginLeft: "-50px" }} className="col-md-7">
                        <div className="site-section-heading pt-3 mb-4">
                            <h2 className="text-black">{el.title}</h2>
                        </div>
                        <p>{el.content}</p>
                    </div>
                </Link>
            ))
        }
    }
    return (
        <div>
            <Slide />
            <div className="bg-light py-3">

                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-0"><a href="index.html">Home</a> <span className="mx-2 mb-0">/</span> <strong className="text-black">Blog</strong></div>
                    </div>
                </div>
            </div>


            <div className="site-section border-bottom" >
                <div className="container">


                    {post ? listPost(post) : ''}


                </div>
            </div>
            <div className="site-section border-bottom" >
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-7 site-section-heading text-center pt-4">
                            <h2>The Team</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                            <div className="block-38 text-center">
                                <div className="block-38-img">
                                    <div className="block-38-header">
                                        <img src="images/person_1.jpg" alt="Image placeholder" className="mb-4" />
                                        <h3 className="block-38-heading h4">Elizabeth Graham</h3>
                                        <p className="block-38-subheading">CEO/Co-Founder</p>
                                    </div>
                                    <div className="block-38-body">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="block-38 text-center">
                                <div className="block-38-img">
                                    <div className="block-38-header">
                                        <img src="images/person_2.jpg" alt="Image placeholder" className="mb-4" />
                                        <h3 className="block-38-heading h4">Jennifer Greive</h3>
                                        <p className="block-38-subheading">Co-Founder</p>
                                    </div>
                                    <div className="block-38-body">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="block-38 text-center">
                                <div className="block-38-img">
                                    <div className="block-38-header">
                                        <img src="images/person_3.jpg" alt="Image placeholder" className="mb-4" />
                                        <h3 className="block-38-heading h4">Patrick Marx</h3>
                                        <p className="block-38-subheading">Marketing</p>
                                    </div>
                                    <div className="block-38-body">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="block-38 text-center">
                                <div className="block-38-img">
                                    <div className="block-38-header">
                                        <img src="images/person_4.jpg" alt="Image placeholder" className="mb-4" />
                                        <h3 className="block-38-heading h4">Mike Coolbert</h3>
                                        <p className="block-38-subheading">Sales Manager</p>
                                    </div>
                                    <div className="block-38-body">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-section site-section-sm site-blocks-1 border-0" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos-delay>
                            <div className="icon mr-4 align-self-start">
                                <span className="icon-truck" />
                            </div>
                            <div className="text">
                                <h2 className="text-uppercase">Free Shipping</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos-delay={100}>
                            <div className="icon mr-4 align-self-start">
                                <span className="icon-refresh2" />
                            </div>
                            <div className="text">
                                <h2 className="text-uppercase">Free Returns</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos-delay={200}>
                            <div className="icon mr-4 align-self-start">
                                <span className="icon-help" />
                            </div>
                            <div className="text">
                                <h2 className="text-uppercase">Customer Support</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Blog.propTypes = {

}

export default Blog
