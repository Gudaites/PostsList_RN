import React, { useState } from 'react';
import {Text} from 'react-native';

import {CardView, Title, Body, ShowComments, CommentView, InputView, Input, SaveButton} from './styles';
import { Post, Comment } from '../interfaces'

const Card = (item: {post: Post}) => {
  const [show, setShow] = useState<boolean>(false);
  const [postValue, setPostValue] = useState<Post>(item.post)
  const [text, setText] = useState<Comment>({
    postId: postValue.id,
    id: postValue.comments.length + 1,
    name: 'User logged',
    email: 'user_logged@gmail.com',
    body: ''
  });

  const postComment = () => {
    postValue.comments.push(text)
    setText({
      postId: postValue.id,
      id: postValue.comments.length + 1,
      name: 'User logged',
      email: 'user_logged@gmail.com',
      body: ''
    })
  }

  return (
    <CardView number={postValue.id}>
      <Title>{postValue.title}</Title>
      <Body>{postValue.body}</Body>
      {show &&
        postValue.comments?.map((comment: Comment) => (
          <CommentView key={ Math.floor(100000 + Math.random() * 900000) + 'comments'}>
            <Text>{comment.email}</Text>
            <Text>{comment.name}</Text>
            <Body>{comment.body}</Body>
          </CommentView>
        ))}
        <InputView>
          <Input
            value={text.body}
            onChangeText={newText => setText({...text, body: newText})}
          />
          <SaveButton number={postValue.id} onPress={
            () => postComment()
          } disabled={text.body ? false : true}>
            <Text>Comment</Text>
          </SaveButton>
        </InputView>

      <ShowComments onPress={() => setShow(!show)}>
        <Text>{show ? 'Close' : 'Comments'}</Text>
      </ShowComments>
    </CardView>
  );
};

export default Card;