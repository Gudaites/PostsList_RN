export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
} 

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  comments: Comment[];
}