import React, {Component} from "react"
import {graphql} from "gatsby"
import PropTypes from "prop-types"
import PostIcons from "../components/PostIcons"
import Tags from "../components/Tags"
// import Img from "gatsby-image"
import Layout from "../components/layout"
import Helmet from "react-helmet";
import styled from "styled-components";
import Comments from '../components/comments/Comments'

const Title = styled.h1`
    display: table;
    font-size: 28px;
    font-weight: 500;
    line-height: 1.6;
    margin: 0 auto;
    text-align: center;
`;

class PostTemplate extends Component {
    render() {
        const post = this.props.data.wordpressPost

        return (
            <Layout>
                <Helmet>
                    <title>{post.title} | {this.props.data.site.siteMetadata.title}</title>
                    <meta name="keywords" itemProp="keywords" key={1}
                          content={post.tags ? post.tags.map((tag) => `${tag.name}`) : null}/>
                    <meta property="og:title" content={`${post.title} | ${this.props.data.site.siteMetadata.title}`}/>
                    <meta property="og:description" content={post.content.slice(0, 158).replace(/(<([^>]+)>)/ig, '')}/>
                    <meta property="og:site_name" content={post.title}/>
                    <meta property="og:type" content="article"/>
                    <meta property="article:published_time" content={post.publish_date}/>
                    {post.tags ? post.tags.map((tag) => <meta key={2} property="article:tag"
                                                              content={tag.name}/>) : null}
                    {post.tags ? <meta property="article:section" content={post.tags[0].name}/> : null}
                    {/*TODO: add date*/}
                    <meta name="twitter:description"
                          content={post.content.slice(0, 158).replace(/(<([^>]+)>)/ig, '')}/>
                    <meta name="twitter:title"
                          content={`${post.title} | ${this.props.data.site.siteMetadata.title}`}/>
                </Helmet>

                <div className="postContainer">
                    <Title dangerouslySetInnerHTML={{__html: post.title}}/>
                    <PostIcons node={post}/>
                    {post.featured_media ? <img alt='' className="FeaturedPostImg"
                                                src={`https://backend.hesamkaveh.com/wp-content/uploads/` + post.featured_media.media_details.file}/> : null}
                    <div id='content' dangerouslySetInnerHTML={{__html: post.content}}/>
                    <hr/>
                    {post.tags ? <Tags tags={post.tags}/> : null}
                </div>
                <Comments postId={post.wordpress_id}/>
            </Layout>
        )
    }
}

export default PostTemplate

export const pageQuery = graphql`
    query($id: String!) {
        wordpressPost(id: {eq: $id}) {
        title
        wordpress_id
        content
        date(formatString: "YYYY,M,DD")
        publish_date:date
        tags {
        name
        slug
    }
        featured_media {
        media_details {
        width
        height
        file
    }
    }

        # ...PostIcons
    }
        site {
        siteMetadata {
        title
        subtitle
    }
    }
    }
    `
