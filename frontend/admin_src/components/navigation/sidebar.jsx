import React from 'react'
import logo from '../../assets/logo.png'
import userimg from '../../assets/user.jpg'
import {Link} from 'react-router-dom'

const SideBar = () => {
    return (
        <aside className="main-sidebar sidebar-light-success elevation-4">
            <a href="index3.html" className="brand-link">
                <img src={logo} alt="Logo" className="brand-image img-circle elevation-3"
                    style={{"opacity":0.8}} />
                <span className="brand-text font-weight-light">NMMIS V1</span>
            </a>
            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src={userimg} className="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div className="info">
                        <a href="#" className="d-block">Santosh Magar</a>
                    </div>
                </div>

                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item has-treeview menu-open">
                            <a href="#" className="nav-link active">
                                <i className="nav-icon fas fa-tachometer-alt"></i>
                                <p>
                                    Municipal
                                <i className="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                <Link to="/municipals" className="nav-link active">
                                <i className="far fa-circle nav-icon"></i>
                                        <p>Municipals</p>
                                </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/add-municipal" className="nav-link">
                                         <i className="far fa-circle nav-icon"></i>
                                        <p>Add Municipal</p>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item has-treeview">
                            <a href="#" className="nav-link">
                                <i className="nav-icon fas fa-tachometer-alt"></i>
                                <p>
                                    Ward
                                <i className="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                <Link to="/wards" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                        <p>Wards</p>
                                </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/add-ward" className="nav-link">
                                         <i className="far fa-circle nav-icon"></i>
                                        <p>Add Ward</p>
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="nav-icon fas fa-th"></i>
                                <p>
                                    Simple Link
                <span className="right badge badge-danger">New</span>
                                </p>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

export default SideBar;