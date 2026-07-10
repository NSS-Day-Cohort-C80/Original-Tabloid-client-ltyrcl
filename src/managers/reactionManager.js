const _apiUrl = "/api/reactions";

export const getReactionsByPostId = (postId) => {
    return fetch(`${_apiUrl}?postId=${postId}`).then((res) => res.json());
};

export const createReaction = (comment) => {
    return fetch(_apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(comment),
    }).then((res) => res.json());
};

export const getMyReaction = (postId) => {
    return fetch(`${_apiUrl}/mine?postId=${postId}`).then((res) => res.json());
};

export const deleteReaction = (postId, emojiId, userId) => {
    return fetch(
        `${_apiUrl}?postId=${postId}&emojiId=${emojiId}&userId=${userId}`,
        {
            method: "DELETE",
        }
    );
};