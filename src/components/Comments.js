import React, {Component} from "react"
// import Img from "gatsby-image"

import axios from 'axios';
import Comment from "./comment";


class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AllComments: [],
        }
    }

    QueryData(id) {
        axios.get(`https://back.hesamkaveh.com/wp-json/wp/v2/comments?post=${id}`)
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

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.QueryData(nextProps.postId)
    }

    UNSAFE_componentWillMount() {
        this.QueryData(this.props.postId)
    }
    componentWillUnmount () {
        this._mounted = false
    }
    componentDidMount () {
        this._mounted = true
    }
    //
    // shouldComponentUpdate(nextProps, nextState) {
    //     this.QueryData(nextProps.postId)
    //     console.log(nextProps)
    //     return true;
    // }


    render() {
        return (
            <div>
                {this.state.AllComments.map((comment) => <Comment data={comment} key={comment.id}/>)}
            </div>
        );
    }
}

export default Comments;