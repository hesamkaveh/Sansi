import React, {Component} from "react"
import {graphql} from "gatsby"
import PostIcons from "../components/PostIcons"
import Tags from "../components/Tags"
import Img from "gatsby-image"
import Layout from "../components/layout"
import styled from "styled-components";
import Comments from '../components/comments/Comments'
import ReadingProgress from "react-reading-progress";
import SeoTagGenerate from "../components/SeoTagGenerator";

const Title = styled.h1`
    display: table;
    font-size: 28px;
    font-weight: 500;
    line-height: 1.6;
    margin: 0 auto;
    text-align: center;
`;
const ProgressBar = styled(ReadingProgress)`
    direction: rtl;
    height: 1.4px !important;
    ::-moz-progress-bar {
    background: #29d !important;
    -webkit-box-shadow: 0 0 4px #29d,0 0 4px #29d;
    box-shadow: 0 0 4px #29d,0 0 4px #29d;
}
  -webkit-appearance: none;

 ::-webkit-progress-value{
     background: #29d !important;
    -webkit-box-shadow: 0 0 4px #29d,0 0 4px #29d;
    box-shadow: 0 0 4px #29d,0 0 4px #29d;
 }
`;

class PostTemplate extends Component {
    constructor(props) {
        super(props);
        this.CommentRef = React.createRef();
    }

    getFeatureMedia() {
        if (this.props.data.wordpressPost.featured_media) {
            return (this.props.data.wordpressPost.featured_media.localFile.childImageSharp.fluid.src)
        } else {
            //TODO: return first image of post
            return (null)
        }
    }

    render() {
        const post = this.props.data.wordpressPost;
        var description = '';
        if (post.acf !== null) {
            if (post.acf.description !== '') {
                description = post.acf.description;
            }
        }
        if (description === '') {
            description = post.content.slice(0, 158).replace(/(<([^>]+)>)/ig, '');
        }
        return (
            <div>
                <ProgressBar targetEl=".postContainer"/>
                <Layout>
                    <SeoTagGenerate type='article'
                                    title={post.title}
                                    description={description}
                                    tags={post.tags}
                                    published_time={post.publish_date}
                                    modified_time={post.modified_date}
                                    image={this.getFeatureMedia()}
                    />
                    <div className="postContainer">
                        <Title dangerouslySetInnerHTML={{__html: post.title}}/>
                        <PostIcons node={post}/>
                        {post.featured_media ? <Img alt={post.title} className="FeaturedPostImg" style={{width: '100%'}}
                                                    fluid={post.featured_media.localFile.childImageSharp.fluid}/> : null}
                        <div id='content'
                             dangerouslySetInnerHTML={{__html: (post.content.replace(/http:\/\/backend\.hesamkaveh\.com\/wp-content\/uploads/g, 'https://backend.hesamkaveh.com/wp-content/uploads'))}}/>
                        <hr/>
                        {post.tags ? <Tags tags={post.tags}/> : null}
                    </div>
                    <Comments ref={this.CommentRef} postId={post.wordpress_id}/>
                </Layout>
            </div>
        )
    }
}

export default PostTemplate

export const pageQuery = graphql`
    query($id: String!) {
        wordpressPost(id: {eq: $id}) {
            title
            acf{
                description
            }
            wordpress_id
            content
            date(formatString: "YYYY,M,DD")
            publish_date:date(formatString: "DD-MM-YYYY hh:mm:ss a")
            modified_date:modified(formatString: "DD-MM-YYYY hh:mm:ss a")
            categories {
                name
            }
            tags {
                name
                slug
            }
            featured_media {
                alt_text
                localFile {
                    childImageSharp{
                        fluid(maxWidth:750){
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                media_details {
                    width
                    height
                    file
                }
            }
        }
    }
`;
