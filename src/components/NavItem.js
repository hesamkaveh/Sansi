import React, {Component} from 'react';
import {Link} from "gatsby"

class NavItem extends Component {
    render() {
        const {to, children} = this.props;
        return (
            <span className="nav-item">
            <Link className="nav-link textColor1" activeClassName="active" to={to}>{children}</Link>
</span>
        );
    }
}

export default NavItem;
