import React, {Component} from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import PostPrev from "../components/PostPrev";
import Helmet from "react-helmet";


class PageTemplate extends Component {
    render() {
        const Posts = this.props.data.allWordpressPost;
        const currentTag = this.props.data.wordpressTag;

        return (
            <Layout>
                <Helmet>
                    <title>{currentTag.name} | {this.props.data.site.siteMetadata.title}</title>
                </Helmet>
                <h1 className='categoryName'>{currentTag.name}</h1>
                <h3 className='categoryDescription'>{currentTag.description}</h3>
                <hr/>
                {Posts ?
                    Posts.edges.map(({node}) => (
                        <PostPrev node={node} key={node.slug}/>
                    )) :
                    null}

            </Layout>
        )
    }
}

export default PageTemplate

export const pageQuery = graphql`
  query($id: String!) {
  wordpressTag(id:{eq:$id}) {
  id
  name
  description
}
    allWordpressPost(filter: {tags: {id: {eq: $id}}}) {
    edges {
      node {
        id
        title
        excerpt
        content
        slug
        tags {
          name
        }
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
