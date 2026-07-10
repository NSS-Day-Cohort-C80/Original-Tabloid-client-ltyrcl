import { useEffect, useState } from "react";
import { getPosts } from "../../managers/postManager";
import { getCategories } from "../../managers/categoryManager";
import { getTags } from "../../managers/tagManager";
import { Link } from "react-router-dom";
import { Input, FormGroup, Label } from "reactstrap";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [selectedTagId, setSelectedTagId] = useState("");

  useEffect(() => {
    getCategories().then(setCategories);
    getTags().then(setTags);
  }, []);

  useEffect(() => {
    getPosts(selectedCategoryId || undefined, selectedTagId || undefined).then(
      setPosts,
    );
  }, [selectedCategoryId, selectedTagId]);

  return (
    <div>
      <p>Posts</p>

      <FormGroup>
        <Label>Filter by Category</Label>
        <Input
          type="select"
          value={selectedCategoryId}
          onChange={(e) => setSelectedCategoryId(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </Input>
      </FormGroup>

      <FormGroup>
        <Label>Filter by Tag</Label>
        <Input
          type="select"
          value={selectedTagId}
          onChange={(e) => setSelectedTagId(e.target.value)}
        >
          <option value="">All Tags</option>
          {tags.map((t) => (
            <option key={t.id} value={t.id}>
              {t.name}
            </option>
          ))}
        </Input>
      </FormGroup>

      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
            <p>By {post.user?.fullName}</p>
            <p>{post.category?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
