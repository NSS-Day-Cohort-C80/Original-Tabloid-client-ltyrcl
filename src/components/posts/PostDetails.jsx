import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../../managers/postManager";
import PostReactions from "./PostReactions";

export default function PostDetails({ loggedInUser }) {
  const [post, setPost] = useState();

  const { id } = useParams();

  useEffect(() => {
    getPostById(id).then(setPost);
  }, [id]);

  if (!post) {
    return null;
  }

  return (
    <article>
      <h2>{post.title}</h2>
      <p>
        By {post.userName} on {new Date(post.pubDate).toLocaleDateString()}
      </p>
      {post.image && <img src={post.image} alt={post.title} />}
      <p>{post.body}</p>
      <PostReactions postId={post.id} currentUserId={loggedInUser.id} />
    </article>
  );
}
