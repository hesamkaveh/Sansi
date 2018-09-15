import React, {Component} from 'react';
import styled from "styled-components";
const FooterTag = styled.div`
    border-top: 1px solid #eee;
    margin-top: 30px;
    text-align: center;
    line-height: 40px;
`;

const CopyRight = styled.div`
        color: #333;
`;
const SourceLink = styled.a`
        color: #cc3300b3;
        &:hover{
            color: #cc3300 !important;
        }
`;
class Footer extends Component {
    render() {
        return (
            <FooterTag>
                <CopyRight>باز نشر مطالب آزاد است، حتی بدون ذکر منبع.</CopyRight>
                <div >قالب
                    {'\u00A0'}
                    <SourceLink href="https://github.com/Hesamkaveh/sansi">سانسی</SourceLink>
                    {'\u00A0'}
                     اثر حسام کاوه
                </div>
            </FooterTag>
        );
    }
}

export default Footer;
