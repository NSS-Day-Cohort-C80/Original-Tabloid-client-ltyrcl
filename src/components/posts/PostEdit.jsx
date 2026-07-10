import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCategories } from "../../managers/categoryManager.js";
import { getPostById, updatePost } from "../../managers/postManager.js";

export default function PostEdit({ loggedInUser }) {
    const [categories, setCategories] = useState([]);

    const [post, setPost] = useState({
        title: "",
        categoryId: "",
        publishDate: "",
        headerImageUrl: "",
        body: ""
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getCategories().then((categoryData) => {
            setCategories(categoryData);
        });
    }, []);

    useEffect(() => {
        getPostById(id).then((existing) => {
            setPost({
                title: existing.title,
                categoryId: existing.categoryId,
                // <input type="date"> needs "YYYY-MM-DD", not a full ISO string.
                publishDate: existing.pubDate ? existing.pubDate.split("T")[0] : "",
                headerImageUrl: existing.image,
                body: existing.body
            });
        });
    }, [id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setPost({
            ...post,
            [name]: name === "categoryId" ? Number(value) : value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const updatePostDTO = {
            id: Number(id),
            title: post.title,
            image: post.headerImageUrl,
            body: post.body,
            pubDate: post.publishDate,
            userId: loggedInUser.id,
            categoryId: post.categoryId
        };

        updatePost(updatePostDTO).then(() => {
            navigate(`/posts/${id}`);
        });
    };

    return (
        <div className="form-post-container">

            <h1>Edit Post</h1>

            <form onSubmit={handleSubmit}>

                <div className="form-row">
                    <label>Title</label>

                    <input
                        type="text"
                        name="title"
                        value={post.title}
                        onChange={handleInputChange}
                    />
                </div>


                <div className="form-row">
                    <label>Category</label>

                    <select
                        name="categoryId"
                        value={post.categoryId}
                        onChange={handleInputChange}
                    >
                        <option value="">
                            Categories
                        </option>

                        {categories.map((category) => (
                            <option
                                key={category.id}
                                value={category.id}
                            >
                                {category.name}
                            </option>
                        ))}

                    </select>
                </div>


                <div className="form-row">
                    <label>Publishing Date</label>

                    <input
                        type="date"
                        name="publishDate"
                        value={post.publishDate}
                        onChange={handleInputChange}
                    />
                </div>


                <div className="form-row">
                    <label>Header Image</label>

                    <input
                        type="text"
                        name="headerImageUrl"
                        placeholder="Paste image URL"
                        value={post.headerImageUrl}
                        onChange={handleInputChange}
                    />

                </div>


                <div className="form-row body-row">
                    <label>Body</label>

                    <textarea
                        name="body"
                        value={post.body}
                        onChange={handleInputChange}
                    />

                </div>


                <button type="submit">
                    Save Changes
                </button>

            </form>

        </div>
    );
}
