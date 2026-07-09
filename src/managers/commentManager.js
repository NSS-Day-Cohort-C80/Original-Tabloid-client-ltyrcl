const _apiUrl = "/api/comments";

export const getCommentById = (id) => {
    return fetch(`${_apiUrl}/${id}`).then((res) => res.json());
};

export const getCommentsByPostId = (postId) => {
    return fetch(`${_apiUrl}/post/${postId}`).then((res) => res.json());
};

export const createComment = (comment) => {
    return fetch(_apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(comment),
    }).then((res) => res.json());
};

export const updateComment = (comment) => {
    return fetch(`${_apiUrl}/${comment.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(comment),
    });
};

export const deleteComment = (id) => {
    return fetch(`${_apiUrl}/${id}`, {
        method: "DELETE",
    });
};