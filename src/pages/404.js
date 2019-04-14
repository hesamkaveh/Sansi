import React from "react";
import Layout from "../components/layout"
import {graphql} from "gatsby";
import Helmet from "react-helmet";
import {err404} from '../../site-translate'
export default (data) => (
    <Layout>
        <Helmet>
            <title>{err404.title} | {data.data.site.siteMetadata.title}</title>
        </Helmet>
        <div className="postContainer" style={{textAlign:'center'}}>
            <h1 style={{fontWeight: 900}}>{err404.content2}</h1>
            <h3>{err404.content1}</h3>

        </div>
    </Layout>
);


export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
                subtitle
            }
        }
    }
`;
