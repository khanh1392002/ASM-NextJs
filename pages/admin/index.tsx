import React from 'react'

type Props = {}

const admin = (props: Props) => {
    return (
        <div>
            <div id="wrapper">
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                        <div className="sidebar-brand-icon rotate-n-15">
                            <i className="fas fa-laugh-wink"></i>
                        </div>
                        <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                    </a>
                    <li className="nav-item active">
                        <a className="nav-link" href="index.html">
                            <span>Dashboard</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo">
                            <i className="fas fa-fw fa-cog"></i>
                            <span>List</span>
                        </a>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <a className="collapse-item" href="">Product</a>
                                <a className="collapse-item" href="">Category</a>
                                <a className="collapse-item" href="">User</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default admin