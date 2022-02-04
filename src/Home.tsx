import React, {useEffect, useCallback, useState} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import axios from 'axios';

import Card from './Components/Card';
import { Post, Comment } from './interfaces'

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
      <FlatList
        data={posts}
        renderItem={({ item }) => <Card post={item} />}
        keyExtractor={({id}) => id + 'key'}
      />
    </SafeAreaView>
  );
};

export default App;
