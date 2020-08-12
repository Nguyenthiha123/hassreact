import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link, useParams } from 'react-router-dom'
// import { Input } from 'antd';

const Header = props => {

    const [KeyWord, setKeyWord] = useState('');
    const handleChangeKeyWord = (e) => {
        const { name, value } = e.target;
        setKeyWord(value)
    }

    return (
        <div>
            <header className="site-navbar" role="banner">
                <div className="site-navbar-top">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
                                <form action className="site-block-top-search">
                                    <Link to={`/search/${KeyWord}`} className="icon icon-search2" > </Link>
                                    {/* value={search} onChange={handleSearch} */}
                                    <input type="text" onChange={handleChangeKeyWord} name="search" className="form-control border-0" placeholder="Search" />
                                    {/* <Input.Search placeholder="Search by username" enterButton /> */}
                                </form>
                            </div>
                            <div className="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
                                <div className="site-logo">
                                    <a href="index.html" className="js-logo-clone">NGỌC HÀ</a>
                                </div>
                            </div>
                            <div className="col-6 col-md-4 order-3 order-md-3 text-right">
                                <div className="site-top-icons">
                                    <ul>
                                        <li><Link to="/login" href="#"><span className="icon icon-person" /></Link></li>
                                        <li><a href="#"><span className="icon icon-heart-o" /></a></li>
                                        <li>
                                            <Link to="/cart" className="site-cart">
                                                <span className="icon icon-shopping_cart" />
                                                <span className="count">2</span>
                                            </Link>
                                        </li>
                                        <li className="d-inline-block d-md-none ml-md-0"><a href="#" className="site-menu-toggle js-menu-toggle"><span className="icon-menu" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="site-navigation text-right text-md-center" role="navigation">
                    <div className="container">
                        <ul className="site-menu js-clone-nav d-none d-md-block">

                            <li> <Link to="/" >Home</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/shop">Shop</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>



        </div>
    )
}



export default Header
