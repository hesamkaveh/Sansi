import React, {Component} from 'react';
import Link from "gatsby-link";
import PostIcons from "./PostIcons";
import styled from "styled-components";

const TitleLink = styled(Link)`
    font-size: 28px;
    display: table;
    margin: 0 auto;
    :hover{
        background-color: #f7f7f7;
    }
`;
const Title = styled.h2`
    text-align: center;
    font-size: 28px;
    line-height: 1.6;
margin: 0;
`;
const ContinueBtn = styled(Link)`
    display: block;
    max-width: 18.75em;
    text-align: center;
    margin: 30px auto 0 auto;
    padding: 0.5em 0 0.4em 0;
    color: #444;
    font-weight: 400;
    font-size: .85em;
    border-bottom: 1px dotted #ccc;
    letter-spacing: 2px;
    :hover{
        color: #000;
        background-color: #f7f7f7;
    }
`;


class PostPrev extends Component {
    render() {
        const {node} = this.props;
        return (

            <div className="postContainer" key={node.slug}>
                <TitleLink to={node.slug}>
                    <Title>{node.title}</Title>
                </TitleLink>
                <PostIcons node={node}/>
                {node.featured_media ?
                    <img alt='' className="FeaturedPostImg" src={`https://backend.hesamkaveh.com/wp-content/uploads/${node.featured_media.media_details.file}`}/> : null}
                {/*check have more content or seamless*/}
                {node.content.includes("<!--more-->") ?
                    <div id="content" dangerouslySetInnerHTML={{__html: node.content.split("<!--more-->")[0].replace(/http:\/\/backend\.hesamkaveh\.com\/wp-content\/uploads/g,'https://backend.hesamkaveh.com/wp-content/uploads')}}/> :
                    <div id="content" dangerouslySetInnerHTML={{__html: node.content.replace(/http:\/\/backend\.hesamkaveh\.com\/wp-content\/uploads/g,'https://backend.hesamkaveh.com/wp-content/uploads')}}/>
                }
                <ContinueBtn to={node.slug}>
                    ادامه مطلب←
                </ContinueBtn>
            </div>
        );
    }
}

export default PostPrev;
