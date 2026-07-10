const _apiUrl = "/api/posts";

export const getPosts = (categoryId, tagId) => {
  let url = _apiUrl;
  if (categoryId && tagId) {
    url = `${_apiUrl}?categoryId=${categoryId}&tagId=${tagId}`;
  } 
  else if (categoryId) {
    url = `${_apiUrl}?categoryId=${categoryId}`;
  } 
  else if (tagId) {
    url = `${_apiUrl}?tagId=${tagId}`;
  }
  return fetch(url).then((res) => res.json());
};



export const getPostById = (id) => {
    return fetch(`${_apiUrl}/${id}`).then((res) => res.json());
};

export const getPostsByUserId = (userId) => {
    return fetch(`${_apiUrl}/myPosts/${userId}`).then((res) => res.json());
};

export const getPostsByTag = (tagId) => {
  return fetch(`${_apiUrl}?tagId=${tagId}`).then((res) => res.json());
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