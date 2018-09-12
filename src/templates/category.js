import React, {Component} from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import PostPrev from "../components/PostPrev";
import Helmet from "react-helmet";


class PageTemplate extends Component {
    render() {
        const Posts = this.props.data.allWordpressPost
        const currentCategory = this.props.data.wordpressCategory

        return (
            <Layout>
                <Helmet>
                    <title>{currentCategory.name} | {this.props.data.site.siteMetadata.title}</title>
                </Helmet>
                <h1 className='categoryName'>{currentCategory.name}</h1>
                <h3 className='categoryDescription'>{currentCategory.description}</h3>
                <hr/>
                {Posts.edges.map(({node}) => (
                    <PostPrev node={node} key={node.slug}/>

                ))}

            </Layout>
        )
    }
}

export default PageTemplate

export const pageQuery = graphql`
  query($id: String!) {
  wordpressCategory(id:{eq:$id}) {
  id
  name
  description
}

  allWordpressPost(filter: {categories: {id: {eq: $id}}}) {
   edges {
        node {
          title
          excerpt
          content
          slug
          categories {
              name
              description
              id
          }
         # ...PostIcons
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

  
  

`
