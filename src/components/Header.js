import React, {Component} from 'react';
import {Link} from "gatsby"

import NavItem from "./NavItem";
import logo from "../images/logo.jpg"
// import '../static/bootstrap-rtl.min.css'
import '../static/gride.rtl.css'
import '../static/main.modules.css'

class Header extends Component {

    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <Link to=''><img className="logo" src={logo} alt=""/></Link>
                <div>روز نوشته های یک توسعه دهنده</div>
                <div className={"rtl navbarContainer text-center"}>
                    <NavItem to="/">بلاگ</NavItem>
                    <NavItem to="/about">درباره حسام</NavItem>
                </div>
            </div>
        );
    }
}

export default Header;
