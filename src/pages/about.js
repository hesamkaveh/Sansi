import React from "react";
import Layout from "../components/layout"
import avatar from '../images/avatar.png'
import {graphql} from "gatsby";
import Helmet from "react-helmet";
import {about_me} from '../../site-translate'

export default (data) => (
    <Layout>
        <Helmet>
            <title>درباره حسام | {data.data.site.siteMetadata.title}</title>
        </Helmet>
        <div className="postContainer">
            <h2 style={{textAlign: 'center'}}>{about_me.title}</h2>
            <p>
                <img src={avatar} alt="" style={{
                    margin: '0 auto',
                    display: 'block',
                    width: 150
                }}/>
            </p>
            <div dangerouslySetInnerHTML={{__html: about_me.content}}/>
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
