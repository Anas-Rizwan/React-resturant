import React, { useState } from 'react'
import { NavbarToggler, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaListUl, FaAddressCard } from "react-icons/fa";
import { Navbar, Nav, NavItem, NavbarBrand, Container } from 'react-bootstrap'
const Header = () => {

    const [isNavOpen, setisNavOpen] = useState(false)

    const toggleNav = () => {
        setisNavOpen(!isNavOpen)
    }
    return (
        <div>
            <Navbar className='navbar-dark' expand="lg">
                <Container>
                    <NavbarBrand className="mr-auto" href="/" data-aos="flip-down" data-aos-delay="500"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>

                    <NavbarToggler onClick={toggleNav} />
                    <Collapse isOpen={isNavOpen} navbar>

                        <Nav navbar data-aos="fade-left" data-aos-duration="500" data-aos-anchor-placement="bottom-bottom"  data-aos-easing="ease-in">

                            <NavItem>
                                <Link className="nav-link" to="/"><FaHome className="iconn" /> Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to='/About'><FaInfoCircle className="iconn" /> About Us</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to='/MenuComponent'><FaListUl className="iconn" /> Menu</Link>
                            </NavItem>
                            <NavItem >
                                <Link className="nav-link " to='/Contact'><FaAddressCard className="iconn" /> Contact Us</Link>
                            </NavItem>

                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
            <div className=" jumbotron" >
                <div className="container ">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6" data-aos="fade-right" data-aos-duration="500" data-aos-anchor-placement="bottom-bottom"  data-aos-easing="ease-in">
                            <h1>Ristorante con Fusion</h1>
                            <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Header