import React, {Component} from 'react';
import styled, {keyframes} from "styled-components";
import user from "../../images/user.png"
import axios from "axios";

const Title = styled.button`
    all:unset;
    font-weight:500;
    display: inline-block;

`;
const Title2 = styled(Title)`
    margin-right: 25px;
    padding:0 5px;
    font-weight:400;
    opacity: 0.8;
    span{
        font-size:20px;

    }
    cursor: pointer;
    transition:all linear 90ms;
    :hover{
        opacity: 1;

    }
`;
const ReplyContainer = styled.form`
    position: relative;
    display:block;
    width:100%;
    margin-bottom: 25px;
    display: block;
    margin-top: 35px;
    border: 1px solid rgba(0,0,0,.1);
    padding: 20px 30px;
        border-radius: 3px;
    
`;
const InputContainer = styled.div`
    font-size: 14px;
    border: 1px solid rgba(0,0,0,.1);
    margin-right: 15px;
    padding: 0 15px;
    display: inline-block;
    border-radius: 3px;

`;
const InputCustom = styled.input`
    border:none;
    color: #6b7074;
    line-height: 35px;
    color: #6b7074;
    font-size:16px;
    :required{
        box-shadow: unset;
    }
    :focus{
        outline: unset;
    }
`;
const InputUserDetail = styled(InputCustom)`

`;

const InputUserDetailContainer = styled.div`
    display: inline;

`;
const Avatar = styled.img`
    float: right;
`;
const CommentTextArea = styled.textarea`
    width: 100%;
    border:none;
    height: 170px;
    margin-top: 25px;
    color: #6b7074;
    padding: 2px;
    font-size:18px;
    resize: none;
    :focus{
        outline: unset;
    }
    :required{
          box-shadow: unset;
    }
`;

const Submit = styled.button`
    all:unset;
    float:left;
    padding: 10px 35px;
    font-size: 13px;
    border: 1px solid #ddd;
    outline: 0;
    background-color: #fff;
    color: #6b7074;
    cursor: pointer;
    border-radius: 50px;
    transition:all linear 0.08s;
    :hover{
        border-color:#bbb;
        color:#444;
        }
    :focus{
        border-color:#aaa;
        color:#444;
    }
`;
const BTNContainer = styled.div`
    display:inline-block;
    width:100%

`;
const fadeIn = keyframes`
  from {
    opacity: 0.1;
  }

  to {
    opacity: 1;
  }
`;
const CommentContainer = styled.div`
    animation: ${fadeIn} 200ms linear;
`;
const CommentSentStatus = styled.div`
    position: absolute;
    width: 100%;
    background-color: #eee;
    height: 100%;
    margin: -20px -30px;
    opacity: 0.8;
    color: #000;
    text-align: center;
    padding-top: 21%;
    transition:all linear 0.2s;
`
;

class Reply extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            email: '',
            comment: '',
            showStatus: 0,
        }

    }

    sendComment(e) {
        e.preventDefault()
        axios.post(`https://backend.hesamkaveh.com/wp-json/wp/v2/comments?author_name=${this.state.author}&author_email=${this.state.email}&content=${this.state.comment}&post=${this.props.postId}&parent=${this.props.parentId}`)
            .then(response => {
                this.setState({
                    showStatus: 1,
                })
                setTimeout(() => (this.setState({
                    showStatus: 0,
                }),
                document.getElementById('exitBtn').click()
                ), 5000);
            })
    }

    handleChange(event) {
        switch ((event.target.name.toString())) {
            case "author":
                this.setState({author: event.target.value})
                break;
            case "email":
                this.setState({email: event.target.value})
                break;
            case "comment":
                this.setState({comment: event.target.value})
                break;
        }
    }

    render() {
        return (
            <CommentContainer>
                <Title>دیدگاه شما</Title>
                {this.props.onTop ? null :
                    <Title2 id="exitBtn" value={-1} onClick={this.props.handler_ReplyChange}><span>× </span>انصراف</Title2>}

                <ReplyContainer onSubmit={this.sendComment.bind(this)} parentId={this.props.parentId}>
                    {this.state.showStatus ?
                        <CommentSentStatus>
                            نظر شما پس از تایید نمایش داده میشه
                            <br/>
                            مرسی بابت نظرت :)
                        </CommentSentStatus> : null
                    }

                    <Avatar src={user} alt=""/>
                    <InputUserDetailContainer>
                        <InputContainer>
                            <InputUserDetail required
                                             type="text"
                                             name="author"
                                             placeholder="نام *"
                                             tabIndex="1"
                                             onChange={this.handleChange.bind(this)}/>
                        </InputContainer>
                        <InputContainer>
                            <InputUserDetail required
                                             type="email"
                                             name="email"
                                             placeholder="ایمیل *"
                                             tabIndex="2"
                                             onChange={this.handleChange.bind(this)}/>
                        </InputContainer>
                    </InputUserDetailContainer>
                    <div className="comment-form-comment">
                        <CommentTextArea required
                                         name="comment"
                                         placeholder="دیدگاه"
                                         tabIndex="3"
                                         onChange={this.handleChange.bind(this)}/>
                    </div>
                    <hr/>
                    <BTNContainer>
                        <Submit tabIndex="4"
                                type="submit"
                                children="ارسال دیدگاه"/>
                    </BTNContainer>
                </ReplyContainer>
            </CommentContainer>
        );
    }
}

export default Reply;
