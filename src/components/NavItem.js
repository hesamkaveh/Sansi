import React, {Component} from 'react';
import {Link} from "gatsby"
import styled from "styled-components";

const NavItemTag = styled.span`
    display: inline-block;
`;
const NavLink = styled(Link)`
    &:hover{
        border-bottom: 1px dotted #ccc;
    }
    display: block;
    padding: .5rem 1rem;
    padding: 0;
    margin: 10px 16px;
    border-bottom: 1px dotted rgba(255, 255, 255, 0);
    `;

class NavItem extends Component {
    render() {
        const {to, children} = this.props;
        return (
            <NavItemTag>
                <NavLink activeStyle={{color: "#cc3300", borderBottomColor: "#ccc"}}
                         to={to}>{children}</NavLink>
            </NavItemTag>
        );
    }
}

export default NavItem;
