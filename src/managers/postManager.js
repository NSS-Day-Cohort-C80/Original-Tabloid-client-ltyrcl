const _apiUrl = "/api/posts";

export const getPosts = () => {
    return fetch(_apiUrl).then((res) => res.json());
};

export const getPostById = (id) => {
    return fetch(`${_apiUrl}/${id}`).then((res) => res.json());
};

export const getPostsByUserId = (userId) => {
    return fetch(`${_apiUrl}/user/${userId}`).then((res) => res.json());
};

export const getPostsByTag = (tagId) => {
    return fetch(`${_apiUrl}/tag/${tagId}`).then((res) => res.json());
};

export const createPost = (post) => {
    return fetch(_apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
    }).then((res) => res.json());
};

export const updatePost = (post) => {
    return fetch(`${_apiUrl}/${post.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
    });
};

export const deletePost = (id) => {
    return fetch(`${_apiUrl}/${id}`, {
        method: "DELETE",
    });
};