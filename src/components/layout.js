import React from "react"
import Header from './Header'
import Footer from './Footer'
import Slider from "./Slider";
// import PropTypes from "prop-types"
import {graphql, StaticQuery} from "gatsby";
import {Helmet} from "react-helmet";


export default ({children}) => (
    <StaticQuery
        query={graphql`
          query {
site {
      siteMetadata {
        title
        subtitle
      }
    }
              allWordpressPost(limit:4) {
                edges {
                  node {
                    title
                    slug
                  }
                }
              }
                allWordpressCategory {
                    edges {
                      node {
                        name
                        slug
                      }
                    }
                  }
          }
    `}
        render={data => (
            <div className='container-fluid'>
                <Helmet>
                    <title>{data.site.siteMetadata.title}</title>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    <meta name="theme-color" content="#fff"/>
                    <meta name="description"
                          content={data.site.siteMetadata.subtitle}/>
                    <meta name="keywords"
                          content="مطالب آموزشی, لینوکس، پایتون، توسعه فردی، دوچرخه سواری, برنامه نویسی، کامپیوتر"/>
                    <meta property="og:site_name" content="روزنوشته های حسام کاوه"/>
                    <meta property="og:locale" content="fa_IR"/>
                </Helmet>
                <Header/>
                <div className="row rtl">
                    <div className="col routeContainer">
                        {children}
                    </div>
                    <div className="col slider"><Slider lastPost={data.allWordpressPost.edges}
                                                        allCategories={data.allWordpressCategory.edges}/></div>
                </div>
                <Footer/>
            </div>

        )}
    />
)


// DefaultLayout.propTypes = {
//     location: PropTypes.object.isRequired,
// }
