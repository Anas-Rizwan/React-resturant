import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { FaRegEnvelope, FaPhoneAlt, FaFax, FaSkype } from "react-icons/fa";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
// import Breadcrumb from 'react-bootstrap/Breadcrumb';
const Contact = () => {
    return (
        <>
            <Header />
            <div className="container">
                <Breadcrumb>
                    <div className='breadcrumbs mt-2 p-2'>
                        <BreadcrumbItem ><a href="/" style={{ textDecoration: 'none', color: '#512DA8' }}>Home</a></BreadcrumbItem>
                        <BreadcrumbItem active style={{ color: '#9575CD' }}>Contact Us</BreadcrumbItem>
                    </div>
                </Breadcrumb>
                <div className="row row-content">

                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1 ">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <FaPhoneAlt />: +852 1234 5678<br />
                            <FaFax />: +852 8765 4321<br />
                            <FaRegEnvelope />: <a href="mailto:confusion@food.net" className='foot-anchor'>
                                confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><FaPhoneAlt size={16} /> Call</a>
                            <a role="button" className="btn btn-info"><FaSkype size={20} /> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><FaRegEnvelope size={19} /> Email</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Contact;