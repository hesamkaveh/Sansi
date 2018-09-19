import React, {Component} from 'react';
import {Link} from "gatsby"
import InlineSVG from 'react-inlinesvg';
import instaSvg from '../images/instagram.svg'
import gitlabSvg from '../images/gitlab.svg'
import twitterSvg from '../images/twitter.svg'
import linkedinSvg from '../images/linkedin.svg'
import youtubeSvg from '../images/youtube.svg'
import styled from "styled-components";
import LastPostPng from '../images/push-pin.png'
import CategoryPng from '../images/bookmark.png'

const SearchInput = styled.input`
    padding: 0.9em;
    width: 262px;
    max-width: 100%;
    font-size: .9em;
    color: #444;
    border: 1px solid #ddd;
    background: #fff;
    cursor: not-allowed
    `;
const Label = styled.label`
    display: block;
    font-weight: 500;
    color: #444;
     margin-bottom: .5rem;
    `;
const UlInSlider = styled.ul`
    padding: 0;
`;

const LiInSlider = styled.li`
        list-style: none;
    position: relative;
    padding-right: 30px;
    margin-bottom: .4em;
    line-height: 1.4;
    &::before{
        content: '';
        /* display: inline-block; */
        height: 22px;
        background-repeat: no-repeat;
        background-position: 0px 5px;
        position: absolute;
        right: 0px;
        font-size: 10px;
        width: 22px;
        color: #666;
        background-image: ${props => props.whichLi == "post" ? `url(${LastPostPng})` : `url(${CategoryPng})`};
    }
    a:hover {
        background-color: #f7f7f7;
        border-bottom: 1px dotted #aaa;
}
`;
const FollowMeContainer=styled.a`
    display: inline-block;
    margin: 0 5px;
    svg{
       width: 35px;
        height: 35px;
        color: red;
        padding: 5px;
        border: 1px solid #ddd; 
    }
`;
const FollowMeContainer_Insta=styled(FollowMeContainer)`
       svg:hover{
           background-color: #E42B55;
       }
`;
const FollowMeContainer_Youtube=styled(FollowMeContainer)`
       svg:hover{
           background-color: #FF001B;
       }
`;
const FollowMeContainer_Linkedin=styled(FollowMeContainer)`
       svg:hover{
           background-color: #0077B5;
       }
`;
const FollowMeContainer_Twitter=styled(FollowMeContainer)`
       svg:hover{
           background-color: #1DA1F2;
       }
`;
const FollowMeContainer_Gitlab=styled(FollowMeContainer)`
       svg:hover{
           background-color: #E24329;
       }
`;
const Container = styled.div`
    margin: 70px 10px 10px 10px;
`;

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            posts: [],
            numbers: [1, 2, 3, 4, 5]
        }
    }


    render() {

        return (

            <div>

                <Container>
                    <Label>آخرین پست ها</Label>
                    <UlInSlider>
                        {this.props.lastPost.map((s, index) => (<LiInSlider key={index} whichLi="post">
                            <Link to={`/${s.node.slug}`}>{s.node.title}</Link>
                        </LiInSlider>))}
                    </UlInSlider>
                </Container>

                <Container>
                    <Label>دسته بندی‌ها</Label>
                    <UlInSlider>
                        {this.props.allCategories.map((s, index) => (<LiInSlider key={index} whichLi="category">
                            <Link to={`/category/${s.node.slug}`}>{s.node.name}</Link>
                        </LiInSlider>))}
                    </UlInSlider>
                </Container>

                <Container>
                    <Label htmlFor="search">جست و جو</Label>
                    <SearchInput name="search" type="text" disabled/>
                </Container>

                <Container>
                    <Label htmlFor="search">حسام را دنبال کنید</Label>
                    <FollowMeContainer_Insta on="instagram" href="https://www.instagram.com/hesamkaveh/">
                        <InlineSVG src={instaSvg}/></FollowMeContainer_Insta>
                    <FollowMeContainer_Youtube on="youtube"
                       href="https://www.youtube.com/channel/UCyfBuLBzBIsbH6h4lXWjdlQ?view_as=subscriber">
                        <InlineSVG src={youtubeSvg} /></FollowMeContainer_Youtube>
                    <FollowMeContainer_Linkedin on="linkedin" href="www.linkedin.com/in/hesamkaveh">
                        <InlineSVG src={linkedinSvg}/></FollowMeContainer_Linkedin>
                    <FollowMeContainer_Twitter on="twitter" href="http://twitter.com/hesamkaveh97">
                        <InlineSVG src={twitterSvg}/></FollowMeContainer_Twitter>
                    <FollowMeContainer_Gitlab on="gitlab" href="https://github.com/Hesamkaveh/">
                        <InlineSVG src={gitlabSvg}/></FollowMeContainer_Gitlab>
                </Container>
            </div>
        );
    }
}

export default Slider;


