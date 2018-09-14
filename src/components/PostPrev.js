import React, {Component} from 'react';
import Link from "gatsby-link";
import PostIcons from "./PostIcons";

class PostPrev extends Component {
    render() {
        const {node} = this.props;
        return (

            <div key={node.slug} className="row everyPostContainer" style={{marginBottom: 20}}>
                <div className="pc">

                    <Link to={node.slug} className="postTitle">
                        <h2 className="postTitle2">{node.title}</h2>
                    </Link>
                    <PostIcons node={node}/>
                    {node.featured_media ?
                        <img alt='' className='featured_post_icon'
                             src={`https://back.hesamkaveh.com/wp-content/uploads/${node.featured_media.media_details.file}`}/> : null}
                    {/*check have more content or seamless*/}
                    {node.content.includes("<!--more-->") ?
                        <div className='postContent'
                             dangerouslySetInnerHTML={{__html: node.content.split("<!--more-->")[0]}}/> :
                            <div className='postContent' dangerouslySetInnerHTML={{__html: node.content}}/>
                    }
                    <Link to={node.slug} className="continueReadingBtn">
                        ادامه مطلب←
                    </Link>
                </div>
            </div>
        );
    }
}

export default PostPrev;
