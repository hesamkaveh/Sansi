import React, {Component} from "react"
import {graphql} from "gatsby"
import PropTypes from "prop-types"
import PostIcons from "../components/PostIcons"
import Tags from "../components/Tags"
// import Img from "gatsby-image"
import Layout from "../components/layout"
import Helmet from "react-helmet";


class PostTemplate extends Component {
    render() {
        const post = this.props.data.wordpressPost

        return (
            <Layout>
                <Helmet>
                    <title>{post.title} | {this.props.data.site.siteMetadata.title}</title>
                </Helmet>
                <div className="everyPostContainer">
                    <div className="pc">
                        <h1 className='postTitle2' dangerouslySetInnerHTML={{__html: post.title}}/>
                        <PostIcons node={post}/>
                        {post.featured_media ? <img alt='' className="featured_post_icon"
                                                    src={`http://back.hesamkaveh.com/wp-content/uploads/` + post.featured_media.media_details.file}/> : null}
                        <div className='postContent' dangerouslySetInnerHTML={{__html: post.content}}/>
                        <hr/>
                        {post.tags ? <Tags tags={post.tags}/> : null}
                    </div>
                </div>
            </Layout>
        )
    }
}

PostTemplate.propTypes = {
    data: PropTypes.object.isRequired,
    edges: PropTypes.array,
}

export default PostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      date(formatString: "YYYY,M,DD")
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
