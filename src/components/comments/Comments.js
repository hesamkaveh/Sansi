import React, {Component} from "react"
// import Img from "gatsby-image"

import axios from 'axios';
import Comment from "./comment";
import Reply from "./Reply";


class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AllComments: [],
            ParentsId: {},
            Parents: [],
            replyCommentId: -1,
        }
        this.handler_ReplyChange = this.handler_ReplyChange.bind(this)


    }

    handler_ReplyChange(x) {
        x.preventDefault()
        console.log(x.target.value)
        this.setState({
            replyCommentId: parseInt(x.target.value)
        })
    }

    QueryData(id) {
        axios.get(`https://backend.hesamkaveh.com/wp-json/wp/v2/comments?order=asc&post=${id}`)
            .then(response => {
                const data = response.data;
                const ParentNode = {}
                const Parents = []
                data.map((node) => (ParentNode[node.id] = []
                    , (node.parent === 0 ? Parents.push(node.id) : null) ,
                    (data.map((node2) =>
                        (node.id === node2.parent ? ParentNode[node.id].push(node2.id) :
                            null)))))
                this.setState({
                    AllComments: data,
                    ParentsId: ParentNode,
                    Parents: Parents
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

    componentWillUnmount() {
        this._mounted = false
    }

    componentDidMount() {
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
                {this.state.replyCommentId===-1?<Reply postId={this.props.postId} parentId={-1} onTop />:null}
                {this.state.Parents.map((id) => <Comment handler_ReplyChange={this.handler_ReplyChange}
                                                         replyCommentId={this.state.replyCommentId}
                                                         replyIsSelected={this.state.replyIsSelected} id={id}
                                                         ParentsId={this.state.ParentsId}
                                                         data={this.state.AllComments}
                                                         postId={this.props.postId}
                                                         key={id}/>)}
            </div>
        );
    }
}

export default Comments;