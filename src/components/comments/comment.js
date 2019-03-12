import React, {Component} from "react"
import styled from "styled-components";
import Reply from "./Reply";

const CommentContainer = styled.div`
    display:block;
    width:100%;
    margin-bottom: 25px;
`;

const Content = styled.div`
    padding: 0 0 15px 35px;
    position: relative;
    clear: both;
    font-size: 13px;
    border: none;
`;

const Author = styled.div`
  display:block;
`;
const Date = styled.div`
    font-size:13px;
    color: #888;
`;
const Avatar = styled.div`
    display:inline-block;position: relative;
    z-index: 2;
    border-radius: 200px;
    overflow: hidden;
    float: right;
    width: 48px;
    height: 48px;
`;
const Header = styled.div`
    display:block;
    position: relative;
    z-index: 2;
    overflow: hidden;
    padding-top: 8px;
    div{
      line-height:20px;
    }
`;

const InnerContainer = styled.div`
    margin: 0 70px 0 0;
    border-bottom:1px solid rgba(0,0,0,.1);
`;

const ReplyBtn = styled.button`
    color: #29b6f6;
    float: left;
    position: absolute;
    left: 20px;
    top: 20px;
    border: 1px solid #0086c3b3;
    padding: 1px 9px;
    border-radius: 1px;
    cursor: pointer;
    box-shadow: 0px 0px 3px 0px rgba(42, 183, 246, 0.59);
    font-weight: 300;
    background-color:#fff;
    font-family: inherit;
    transition: all linear 0.1s;
:hover{
    color: #0086c3b3;
    border-color: #034b6cb3;
    font-weight: 400;
    transition: all linear 100ms;
    box-shadow: 0px 0px 3px 0px rgba(32, 123, 164, 0.59);
    }
`;
const Children = styled.div`
  margin: 20px 45px 0 0;
`;

class Comment extends Component {

    Inserter() {
        const id = this.props.id;
        const data = this.props.data.find(x => x.id === id);
        var IsEnd;
        if (this.props.ParentsId[id].length === 0) {
            IsEnd = 1
        }
        return (
            <CommentContainer>
                <Avatar><img src={data.author_avatar_urls["48"]} alt=""/></Avatar>
                <InnerContainer>
                    <Header>
                        <Author>{data.author_name}</Author>
                        <Date>19/12/1375</Date>
                        <ReplyBtn value={id} onClick={this.props.handler_ReplyChange}>پاسخ</ReplyBtn>
                    </Header>
                    <Content dangerouslySetInnerHTML={{__html: data.content.rendered}}/>
                </InnerContainer>

                <Children>
                    {this.props.replyCommentId === id ? <Reply postId={this.props.postId} parentId={id}
                                                               handler_ReplyChange={this.props.handler_ReplyChange}/> : null}
                    {IsEnd ? null : this.props.ParentsId[id].map((id) =>
                        <div key={id}>
                            <Comment postId={this.props.postId} replyCommentId={this.props.replyCommentId}
                                     handler_ReplyChange={this.props.handler_ReplyChange} id={id}
                                     ParentsId={this.props.ParentsId} data={this.props.data} key={id}/>
                        </div>)}
                </Children>
            </CommentContainer>
        )


    }

    render() {
        return (
            <div>
                {this.Inserter()}
            </div>
        )
    }
}

export default Comment;