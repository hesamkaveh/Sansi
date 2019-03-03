import React, {Component} from "react"
import {graphql} from "gatsby"
import PostIcons from "../components/PostIcons"
import Tags from "../components/Tags"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Helmet from "react-helmet";
import styled from "styled-components";
import Comments from '../components/comments/Comments'
import ReadingProgress from "react-reading-progress";

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
    color: red !important;
    height: 1.6px;
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

    render() {
        const post = this.props.data.wordpressPost;
        let title = `${post.title} | ${this.props.data.site.siteMetadata.title}`;

        let description = '';
        if (post.acf !== null) {
            if (post.acf.description !== '') {
                description = post.acf.description;
            }
        } else if (description === '') {
            description = post.content.slice(0, 158).replace(/(<([^>]+)>)/ig, '');
        }
        return (
            <div>
                <ProgressBar targetEl=".postContainer"/>
                <Layout>
                    <Helmet>
                        <title>{title}</title>
                        <meta name="keywords" itemProp="keywords" key={1}
                              content={post.tags ? post.tags.map((tag) => `${tag.name}`) : null}/>
                        <meta property="og:title" content={title}/>
                        <meta property="og:description" content={description}/>
                        <meta property="og:site_name" content={post.title}/>
                        <meta property="og:type" content="article"/>
                        <meta property="og:og:updated_time" content={post.modified_date}/>
                        <meta property="article:published_time" content={post.publish_date}/>
                        <meta property="article:modified_time" content={post.modified_date}/>
                        {post.tags ? post.tags.map((tag) => <meta key={2} property="article:tag"
                                                                  content={tag.name}/>) : null}
                        {post.tags ? <meta property="article:section" content={post.tags[0].name}/> : null}
                        <meta name="twitter:description" content={description}/>
                        <meta name="twitter:title" content={title}/>
                        {post.featured_media ? <meta property="og:image"
                                                     content={post.featured_media.localFile.childImageSharp.fluid.src}/> : null}

                    </Helmet>
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
            publish_date:date
            modified_date:modified
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
        site {
            siteMetadata {
                title
                subtitle
            }
        }
    }
`;
