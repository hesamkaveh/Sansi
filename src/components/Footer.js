import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="copyRight">باز نشر مطالب آزاد است، حتی بدون ذکر منبع.</div>
                <div className="developedBy">قالب
                    {'\u00A0'}
                    <a href="https://github.com/Hesamkaveh/sansi">سانسی</a>
                    {'\u00A0'}
                     اثر حسام کاوه
                </div>
            </div>
        );
    }
}

export default Footer;
