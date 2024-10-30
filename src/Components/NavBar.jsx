import { Fragment } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import "./NavBar.css"

const NavBar = () => {
    return <Fragment>
        <div className="middle nav-container">
            <div>
                <img height={10} src="https://www.volvocars.com/static/shared/images/volvo-spread-wordmark.svg" alt="logo" />
            </div>
            <div>
                <ul className="middle">
                    <li>Our Cars</li>
                    <li>Shop</li>
                    <li>Owners</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div className="right-icons middle">
                <FiUser size={25} />
                Sign In
            </div>
        </div>
        <div className="learn-more">
            <p className="middle">LEARN MORE <FaChevronRight /></p>    
        </div>
    </Fragment>
}

export default NavBar