import React from "react"
import tag from "../images/tag-black.svg";
import InlineSVG from 'react-inlinesvg';
import styled from "styled-components";

const Tag = styled.div`
    padding: 2em 0;
    position: relative;
    text-align: center;
     svg * {
    fill: #aaa !important;
    color: #aaa !important;
    }
    svg {
    width: 21px;
    margin: 0 auto;
    display: block;
    height: auto;
    padding-bottom: 15px;
}
 a {
    color: #333;
    text-align: center;
    margin: 0 6px;
    
}
a:hover{
    border-bottom: 1px dotted #ccc;
        background-color: #f7f7f7;
}

`;

class Tags extends React.Component {
    render() {
        const {tags} = this.props

        return (
            <Tag>
                <InlineSVG src={tag} />
                {tags.map((s, index) => (<a href={`/tag/` + s.slug}>{s.name}</a>))}
            </Tag>
        )
    }
}

export default Tags