import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import api from '../../../../api/categoryApi'
import api1 from '../../../../api/productApi'
import api2 from '../../../../api/categoryPostApi'
import api3 from '../../../../api/postApi'
import api4 from '../../../../api/userAPI'
import api5 from '../../../../api/contactApi'
import api6 from '../../../../api/checkOutApi'



const Dashboard = props => {
    // category
    const [category, setCategory] = useState('')
    useEffect(() => {
        const getCategory = async () => {
            try {
                const { data } = await api.getAll();
                setCategory(data);
            } catch (error) {
            }
        }
        getCategory()
    }, []);

    // product
    const [product, setProduct] = useState('')
    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await api1.getAll();
                setProduct(data);
            } catch (error) {
            }
        }
        getProduct()
    }, []);

    // user
    const [user, setUser] = useState('')
    useEffect(() => {
        const getUser = async () => {
            try {
                const { data } = await api4.getAll();
                setUser(data);
            } catch (error) {

            }
        }
        getUser()
    }, []);
    // categoryPost
    const [categoryPost, setCategoryPost] = useState('')
    useEffect(() => {
        const getCategoryPost = async () => {
            try {
                const { data } = await api2.getAll();
                setCategoryPost(data);
            } catch (error) {
            }
        }
        getCategoryPost()
    }, []);

    // post
    const [post, setPost] = useState('')
    useEffect(() => {
        const getPost = async () => {
            try {
                const { data } = await api3.getAll();
                setPost(data);
            } catch (error) {
            }
        }
        getPost()
    }, []);

    // contact
    const [contact, setcontact] = useState('')
    useEffect(() => {
        const getcontact = async () => {
            try {
                const { data } = await api5.getAll();
                setcontact(data);
            } catch (error) {
            }
        }
        getcontact()
    }, []);

    // checkOut
    const [checkOut, setCheckOut] = useState('')
    useEffect(() => {
        const getCheckOut = async () => {
            try {
                const { data } = await api6.getAll();
                setCheckOut(data);
            } catch (error) {

            }
        }
        getCheckOut()
    }, []);
    return (
        <div className="container-fluid">
            {/* Page Heading */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50" /> Generate Report</a>
            </div>
            {/* Content Row */}
            <div className="row">
                {/* Category */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Category</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{category.length}</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-calendar fa-2x text-gray-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Product */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Product</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{product.length}</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* User */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-info shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">User</div>
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto">
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{user.length}</div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-clipboard-list fa-2x text-gray-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Category Post*/}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Category Post</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{categoryPost.length}</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-comments fa-2x text-gray-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Post */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Post</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{post.length}</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-calendar fa-2x text-gray-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Contact</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{contact.length}</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Check out */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-info shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Check out</div>
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto">
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{checkOut.length}</div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-clipboard-list fa-2x text-gray-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div >
    )
}

Dashboard.propTypes = {

}

export default Dashboard
