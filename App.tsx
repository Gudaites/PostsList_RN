import React, {useEffect, useCallback, useState} from 'react';
import {SafeAreaView, Text, ScrollView} from 'react-native';
import axios from 'axios';

import {CardView, Title, Body, ShowComments, CommentView} from './styles';

interface Comment {
  postId: Number;
  id: Number;
  name: String;
  email: String;
  body: String;
}

interface Post {
  userId: Number;
  id: Number;
  title: String;
  body: String;
  comments: Comment[];
}

const Card = (item: {post: Post}) => {
  const [show, setShow] = useState(false);

  return (
    <CardView index={item.post.id}>
      <Title>{item.post.title}</Title>
      <Body>{item.post.body}</Body>
      {show &&
        item.post.comments.map((comment: Comment) => (
          <CommentView key={comment.id + 'comments'}>
            <Text>{comment.email}</Text>
            <Text>{comment.name}</Text>
            <Body>{comment.body}</Body>
          </CommentView>
        ))}
      <ShowComments onPress={() => setShow(!show)}>
        <Text>Comments</Text>
      </ShowComments>
    </CardView>
  );
};

const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchData = useCallback(async () => {
    const {data: returnPosts} = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
    );
    const {data: returnComments} = await axios.get(
      'https://jsonplaceholder.typicode.com/comments',
    );

    returnPosts.map((post: Post) => {
      const filterComments = returnComments.filter(
        (comment: Comment) => comment.postId === post.id,
      );
      post.comments = filterComments;
    });

    setPosts(returnPosts);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <SafeAreaView>
      <ScrollView>
        {posts &&
          posts.map(post => <Card post={post} key={post.id + 'posts'} />)}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
