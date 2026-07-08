const _apiUrl = "/api/comment";

export const getCommentById = (id) => {
    //return fetch (`${_apiUrl}/${id}`).then((res) => res.json());
    const found = comments.find((cm) => cm.id === id);
    return Promise.resolve(found);
};

export const updateComment = (comment) => {
    /*
    return fetch(`${_apiUrl}/${comment.id}`, {
        method: "PUT";
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(comment),    
    });
    */
   comments = comments.map((cm) => (cm.id === comment.id ? comment : cm));
   return Promise.resolve(comment);
};

export const deleteComment = () => {

};