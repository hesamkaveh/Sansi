import React, {Component} from 'react';
import {Link} from "gatsby"

import NavItem from "./NavItem";
import logo from "../images/logo.jpg"
import styled from "styled-components";

const Logo = styled.img`
height: 200px;
`;
const Title = styled.h1`
font-weight:400;
font-size:16px;
margin: 0;
`;
const Navbar = styled.div`
    text-align: center;
    margin-top: 50px;
    border-top: 1px dotted #ccc;
    border-bottom: 1px dotted #ccc;
    font-weight: 500;
`;

class Header extends Component {

    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <Link to='/'><Logo src={logo} alt=""/></Link>
                <Title>روز نوشته های یک توسعه دهنده</Title>
                <Navbar>
                    <NavItem to="/">بلاگ</NavItem>
                    <NavItem to="/about">درباره حسام</NavItem>
                </Navbar>
            </div>
        );
    }
}

export default Header;
