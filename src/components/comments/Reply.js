import React, {Component} from 'react';
import {Link} from "gatsby"
import styled from "styled-components";
import user from "../../images/user.png"

const Title=styled.div`
font-weight:500;
`;
const ReplyContainer = styled.div`
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
const InputCustom=styled.input`
    border:none;
    color: #6b7074;
    line-height: 35px;
    color: #6b7074;
    font-size:16px;

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
`;
const BTNContainer = styled.div`
    display:inline-block;
    width:100%

`;

class Header extends Component {

    render() {
        {console.log(this.props.replyIsSelected)}
        if (this.props.replyIsSelected){
            return (
                <div>
                    <Title>دیدگاه شما</Title>
                    <ReplyContainer>
                        <Avatar src={user} alt=""/>
                        <InputUserDetailContainer>
                            <InputContainer>
                                <InputUserDetail type="text" name="author" className="input form-control" placeholder="نام * "
                                                 tabIndex="1"/>
                            </InputContainer>
                            <InputContainer>
                                <InputUserDetail type="email" name="email" type="email" className="input form-control"
                                                 placeholder="ایمیل * " tabIndex="2"/>
                            </InputContainer>
                        </InputUserDetailContainer>
                        <div className="comment-form-comment">
                            <CommentTextArea id="comment" name="comment" className="form-control"
                                             cols="45" rows="8" aria-required="true"
                                             placeholder="دیدگاه"/>
                        </div>
                        <hr/>
                        <BTNContainer>
                            <Submit>ارسال دیدگاه</Submit>
                        </BTNContainer>
                    </ReplyContainer>
                </div>
            );


        }else{
            return('ssssssssssssssssssss')
        }
    }
}

export default Header;
