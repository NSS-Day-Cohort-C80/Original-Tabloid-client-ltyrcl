const _apiUrl = "/api/reactions";

export const getReactionsByPostId = (postId) => {
    return fetch(`${_apiUrl}/post/${postId}`).then((res) => res.json());
};

export const createReaction = (comment) => {
    return fetch(_apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(comment),
    }).then((res) => res.json());
};

export const deleteReaction = (id) => {
    return fetch(`${_apiUrl}/${id}`, {
        method: "DELETE",
    });
};