import React, {Component} from 'react';
import {Link} from "gatsby"
import InlineSVG from 'react-inlinesvg';
import instaSvg from '../images/instagram.svg'
import githubSvg from '../images/github-logo.svg'
import twitterSvg from '../images/twitter.svg'
import linkedinSvg from '../images/linkedin.svg'
import youtubeSvg from '../images/youtube.svg'
import styled from "styled-components";
import LastPostPng from '../images/push-pin.png'
import CategoryPng from '../images/bookmark.png'
import {followMe,search,categories,latestPost} from '../../site-translate'

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
        height: 22px;
        background-repeat: no-repeat;
        background-position: 0px 5px;
        position: absolute;
        right: 0px;
        font-size: 10px;
        width: 22px;
        color: #666;
        background-image: ${props => props.whichLi === "post" ? `url(${LastPostPng})` : `url(${CategoryPng})`};
    }
    a:hover {
        background-color: #f7f7f7;
        border-bottom: 1px dotted #aaa;
}
`;
const FollowMeContainer = styled.a`
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
const FollowMeContainerInsta = styled(FollowMeContainer)`
       svg:hover{
           background-color: #E42B55;
       }
`;
const FollowMeContainerYoutube = styled(FollowMeContainer)`
       svg:hover{
           background-color: #FF001B;
       }
`;
const FollowMeContainerLinkedin = styled(FollowMeContainer)`
       svg:hover{
           background-color: #0077B5;
       }
`;
const FollowMeContainerTwitter = styled(FollowMeContainer)`
       svg:hover{
           background-color: #1DA1F2;
       }
`;
const FollowMeContainerGitlab = styled(FollowMeContainer)`
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
                    <Label>{latestPost}</Label>
                    <UlInSlider>
                        {this.props.lastPost.map((s, index) => (<LiInSlider key={index} whichLi="post">
                            <Link to={`/${s.node.slug}`}>{s.node.title}</Link>
                        </LiInSlider>))}
                    </UlInSlider>
                </Container>

                <Container>
                    <Label>{categories}</Label>
                    <UlInSlider>
                        {this.props.allCategories.map((s, index) => (<LiInSlider key={index} whichLi="category">
                            <Link to={`/category/${s.node.slug}`}>{s.node.name}</Link>
                        </LiInSlider>))}
                    </UlInSlider>
                </Container>

                <Container>
                    <Label htmlFor="search">{search}</Label>
                    <SearchInput name="search" type="text" disabled/>
                </Container>

                <Container>
                    <Label htmlFor="search">{followMe}</Label>
                    <FollowMeContainerInsta href="https://www.instagram.com/hesamkaveh/" target="_blank">
                        <InlineSVG src={instaSvg}/></FollowMeContainerInsta>
                    <FollowMeContainerYoutube
                        href="https://www.youtube.com/channel/UCyfBuLBzBIsbH6h4lXWjdlQ?view_as=subscriber"
                        target="_blank">
                        <InlineSVG src={youtubeSvg}/></FollowMeContainerYoutube>
                    <FollowMeContainerLinkedin href="https://linkedin.com/in/hesamkaveh" target="_blank">
                        <InlineSVG src={linkedinSvg}/></FollowMeContainerLinkedin>
                    <FollowMeContainerTwitter href="https://twitter.com/hesamkaveh97" target="_blank">
                        <InlineSVG src={twitterSvg}/></FollowMeContainerTwitter>
                    <FollowMeContainerGitlab href="https://github.com/Hesamkaveh/" target="_blank">
                        <InlineSVG src={githubSvg}/></FollowMeContainerGitlab>
                </Container>
            </div>
        );
    }
}

export default Slider;


