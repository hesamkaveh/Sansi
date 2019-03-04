import React from "react";
import Layout from "../components/layout"
import {graphql} from "gatsby";
import Helmet from "react-helmet";

export default (data) => (
    <Layout>
        <Helmet>
            <title>Page Not Found | {data.data.site.siteMetadata.title}</title>
        </Helmet>
        <div className="postContainer" style={{textAlign:'center'}}>
            <h1 style={{fontWeight: 900}}>۴۰۴</h1>
            <h3>متاسفانه صفحه مورد نظر یافت نشد!</h3>

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
