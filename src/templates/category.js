import React, {Component} from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import PostPrev from "../components/PostPrev";
import styled from "styled-components";
import SeoTagGenerate from "../components/SeoTagGenerator";
import {title} from '../../site-translate'

const Name = styled.h1`
    font-size: 25px;
    line-height: 35px;
    margin-top: 15px;
    font-weight: 500;
`;
const Description = styled.h2`
    font-size: 18px;
    line-height: 30px;
    font-weight: 400;
`;

class PageTemplate extends Component {
    render() {
        const Posts = this.props.data.allWordpressPost;
        const currentCategory = this.props.data.wordpressCategory;

        return (
            <Layout>
                <SeoTagGenerate type='blog'
                                title={`${currentCategory.name} | ${title}`}
                                description={currentCategory.description}
                />
                <Name>{currentCategory.name}</Name>
                <Description>{currentCategory.description}</Description>
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
        wordpressCategory(id:{eq:$id}) {
            id
            name
            description
        }

        allWordpressPost(filter: {categories:{ elemMatch:{id: {eq: $id}}}}) {
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
                    featured_media {
                        alt_text
                        localFile {
                            childImageSharp{
                                fluid(maxWidth:750){
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        media_details {
                            width
                            height
                            file
                        }
                    }

                }
            }
        }
    }`;
