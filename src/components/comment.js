import React, {Component} from "react"
import PostIcons from "../components/PostIcons"
// import Img from "gatsby-image"
import Layout from "../components/layout"
import Helmet from "react-helmet";
import styled from "styled-components";
import axios from 'axios';

const CommentContainer = styled.div`
display:block;
width:100%;
margin-bottom: 25px;
`;

const Content = styled.div`
padding: 0 0 15px 35px;
position: relative;
clear: both;
font-size: 13px;
padding: 5px 0;
border: none;
`;

const Author = styled.div`
display:block;
`;
const Date = styled.div`
font-size:13px;
color: #888;
`;
const Avatar = styled.div`
display:inline-block;position: relative;
z-index: 2;
border-radius: 200px;
overflow: hidden;
float: right;
width: 48px;

height: 48px;
`;
const Header = styled.div`
display:block;
position: relative;
z-index: 2;
overflow: hidden;
padding-top: 8px;
div{
line-height:20px;
}
`;

const InnerContainer = styled.div`
margin: 0 70px 0 0;
`

const Reply = styled.div`
color: #29b6f6;
float: left;
position: absolute;
left: 20px;
top: 20px;
border: 1px solid #0086c3b3;
padding: 1px 9px;
border-radius: 1px;
cursor: pointer;
box-shadow: 0px 0px 3px 0px rgba(42, 183, 246, 0.59);
font-weight: 300
}
`

class Comment extends Component {

    render() {
        const data = this.props.data

        return (
            <CommentContainer>

                <Avatar><img src={data.author_avatar_urls["48"]} alt=""/></Avatar>
                <InnerContainer>
                    <Header>
                        <Author>{data.author_name}</Author>
                        <Date>19/12/1375</Date>
                        <Reply>پاسخ</Reply>
                    </Header>
                    <Content>
                        یچیز دیگرم اضافه کنم…. نوشتن به مرور یاد میده چطوری اطلاعاتو دسته بندی شده از ذهنم خارج کنم.
                        خیلی وقتا راجع به چیزی اطلاعاتی داریم ولی به هردلیلی نمیتونیم خوب بیانش کنیم…. اما نوشتن به رفع
                        این مشکل یا تقویت این توانایی کمک میکنه
                    </Content>
                </InnerContainer>
            </CommentContainer>
        );
    }
}

export default Comment;