import React, {Component} from "react"
import PostIcons from "../components/PostIcons"
// import Img from "gatsby-image"
import Layout from "../components/layout"
import Helmet from "react-helmet";
import styled from "styled-components";
import axios from 'axios';
import Comment from "./comment";


class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AllComments: [],
        }
    }

    componentWillMount() {
        axios.get(`https://back.hesamkaveh.com/wp-json/wp/v2/comments?post=${this.props.postId}`)
            .then(response => {
                const data = response.data;
                this.setState({
                    AllComments: data,
                })
            })
            .catch(error => {
                console.log(error)
            })
    }



    render() {
        return (
            <div>
                {this.state.AllComments.map((comment) => <Comment data={comment} key={comment.id}/>)}
            </div>
        );
    }
}

export default Comments;