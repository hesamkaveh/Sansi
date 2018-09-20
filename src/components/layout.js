import React from "react"
import Header from './Header'
import Footer from './Footer'
import Slider from "./Slider";
// import PropTypes from "prop-types"
import {graphql, StaticQuery} from "gatsby";
import {Helmet} from "react-helmet";
import styled from "styled-components";
import '../global-styles'
import favicon from '../images/favicon.ico'

const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
@media (max-width: 767px) { width: 99% !important;}

@media (min-width: 768px) and (max-width: 991px) { width: 90% !important;}

@media (min-width: 992px) and (max-width: 1200px) { width: 80% !important;}

@media (min-width: 1200px) and (max-width: 1800px) { width: 80% !important;}

@media (min-width: 1800px) { width: 60% !important;}

@media (min-width: 991px) {.slider {max-width: 300px;}}

@media (max-width: 991px) {.slider {flex-basis: unset !important;}}



`;
const PageBody = styled.div`
    direction: rtl;
    text-align: right;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin: 0 -15px;

    
`;
const Col = styled.div`
    -ms-flex-positive: 1;
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
    position: relative;
    width: 100%;
    
`;
const HotPlace = styled(Col)`
    max-width: 780px;
    margin: 0 auto;
`;
const SliderContainer = styled(Col)`
    max-width: 780px;
    margin: 0 auto;
`;
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
            <Container className='container-fluid' style={{direction: "rtl"}}>
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title>{data.site.siteMetadata.title}</title>
                    <meta name="description"
                          content={data.site.siteMetadata.subtitle}/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    <meta name="theme-color" content="#fff"/>
                    <link rel="alternate" type="application/rss+xml"
                          title="RSS Feed for hesamkaveh.com"
                          href="/rss.xml" />
                    <link rel="Shortcut Icon" href={favicon} type="image/x-icon"/>
                    <meta name="keywords"
                          content="مطالب آموزشی, لینوکس، پایتون، توسعه فردی، دوچرخه سواری, برنامه نویسی، کامپیوتر"/>
                    <meta property="og:site_name" content={data.site.siteMetadata.title}/>
                    <meta property="og:title" content={data.site.siteMetadata.title}/>
                    <meta property="og:locale" content="fa_IR"/>
                    <meta property="og:type" content="website"/>
                    <meta name="twitter:app:country" content="IR"/>
                    <meta name="twitter:site" content="@hesamkaveh97"/>

                </Helmet>
                <Header/>
                <PageBody>
                    <HotPlace>
                        {children}
                    </HotPlace>
                    <SliderContainer className="slider">
                        <Slider lastPost={data.allWordpressPost.edges}
                                allCategories={data.allWordpressCategory.edges}/>
                    </SliderContainer>
                </PageBody>
                <Footer/>
            </Container>

        )}
    />
)


// DefaultLayout.propTypes = {
//     location: PropTypes.object.isRequired,
// }
