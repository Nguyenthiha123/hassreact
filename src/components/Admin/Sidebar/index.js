import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Sidebar = props => {
    return (
        <ul className="navbar-nav bg-gradient-light sidebar sidebar  accordion" id="accordionSidebar">
            {/* Sidebar - Brand */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink" />
                </div>
                <div className="sidebar-brand-text mx-3">ADMIN <sup>*</sup></div>
            </a>
            <li className="nav-item">
                <Link to="/admin/dashboard" className="nav-link dropdown-item" >
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Dashboard</span></Link>
            </li>
            <li className="nav-item">
                <Link to="/admin/category" className="nav-link dropdown-item" >
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Category</span></Link>
            </li>


            <li className="nav-item">
                <Link to="/admin/product" className="nav-link dropdown-item " >
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Producst</span></Link>
            </li>

            <li className="nav-item">
                <Link to="/admin/user" className="nav-link dropdown-item " >
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>User</span></Link>
            </li>
            <li className="nav-item">
                <Link to="/admin/categoryPost" className="nav-link dropdown-item " >
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Category Post</span></Link>
            </li>
            <li className="nav-item">
                <Link to="/admin/post" className="nav-link dropdown-item " >
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Post</span></Link>
            </li>

            <li className="nav-item">
                <Link to="/admin/contact" className="nav-link dropdown-item " >
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Contact</span></Link>
            </li>

            <li className="nav-item">
                <Link to="/admin/checkOut" className="nav-link dropdown-item " >
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>CheckOut</span></Link>
            </li>

            <li className="nav-item">
                <Link to="/" className="nav-link dropdown-item " >
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Home</span></Link>
            </li>

            {/* Divider */}
            <hr className="sidebar-divider d-none d-md-block" />
            {/* Sidebar Toggler (Sidebar) */}
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle" />
            </div>
        </ul>
    )
}

Sidebar.propTypes = {

}

export default Sidebar
