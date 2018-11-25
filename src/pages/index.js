import React, {Component} from "react"
import { graphql} from "gatsby"
import Layout from "../components/layout"
import PostPrev from "../components/PostPrev"
import Helmet from "react-helmet";


class Home extends Component {
    render() {
        const data = this.props.data

        return (
            <Layout>
                <Helmet>
                    <title>{data.site.siteMetadata.title} | روزنوشته های یک توسعه دهنده</title>
                </Helmet>

                {data.allWordpressPost.edges.map(({node}) => (
                    <PostPrev node={node} key={node.slug} />

                ))}
            </Layout>
        )
    }
}

export default Home

// Set here the ID of the home page.
export const pageQuery = graphql`
  query {
  site {
      siteMetadata {
        title
        subtitle
      }
    }
    allWordpressPost(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          excerpt
          content
          slug
                        date(formatString: "YYYY,M,DD")

            featured_media {
                media_details {
                width
                height
                file
                }
             }
         # ...PostIcons
          
        }
      }
    }
  }
`
