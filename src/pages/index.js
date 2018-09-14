import React, {Component} from "react"
import { graphql} from "gatsby"
import Layout from "../components/layout"
import PostPrev from "../components/PostPrev"
import '../css/bootstrap.min.css'
import '../css/bootstrap-rtl.min.css'
import '../css/main.modules.css'

class Home extends Component {
    render() {
        const data = this.props.data

        return (
            <Layout>

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
