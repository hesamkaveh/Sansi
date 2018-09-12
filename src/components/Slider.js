import React, {Component} from 'react';
import { Link} from "gatsby"
import InlineSVG from 'react-inlinesvg';
import instaSvg from '../images/instagram.svg'
import gitlabSvg from '../images/gitlab.svg'
import twitterSvg from '../images/twitter.svg'
import linkedinSvg from '../images/linkedin.svg'
import youtubeSvg from '../images/youtube.svg'


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

            <div className="">
                <div className="everyPostContainer">
                    <label>آخرین پست ها</label>
                    <ul id='lastPostOnSlider'>
                        {this.props.lastPost.map((s, index) => (<li key={index}><Link to={`/${s.node.slug}`}>{s.node.title}</Link></li>))}

                    </ul>
                </div>
                <div className="everyPostContainer">
                    <label>دسته بندی‌ها</label>
                    <ul id='categoriesOnSlider'>
                        {this.props.allCategories.map((s, index) => (<li key={index}><Link to={`/category/${s.node.slug}`} >{s.node.name}</Link></li>))}
                    </ul>
                </div>
                <div className="everyPostContainer">
                    <label htmlFor="search">جست و جو</label>
                    <input id="search" name="search" type="text" disabled style={{    cursor: 'not-allowed'}} />
                </div>
                <div className="everyPostContainer">
                    <label htmlFor="search">حسام را دنبال کنید</label>
                    <a className='followMeContainer' href="https://www.instagram.com/hesamkaveh/"><InlineSVG
                        src={instaSvg} className="followMe"/></a>
                    <a className='followMeContainer'
                       href="https://www.youtube.com/channel/UCyfBuLBzBIsbH6h4lXWjdlQ?view_as=subscriber"><InlineSVG
                        src={youtubeSvg} className="followMe"/></a>
                    <a className='followMeContainer' href="www.linkedin.com/in/hesamkaveh"><InlineSVG src={linkedinSvg}
                                                                                                      className="followMe"/></a>
                    <a className='followMeContainer' href="http://twitter.com/hesamkaveh97"><InlineSVG src={twitterSvg}
                                                                                                       className="followMe"/></a>
                    <a className='followMeContainer' href="https://gitlab.com/Hesamkaveh/"><InlineSVG src={gitlabSvg}
                                                                                                      className="followMe"/></a>


                </div>
            </div>
        );
    }
}
export default Slider;


