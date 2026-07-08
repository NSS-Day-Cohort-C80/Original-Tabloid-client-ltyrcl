const _apiUrl = "/api/post";

let posts = [
  {
    id: 1,
    title: "Build a Deck This Summer",
    image: "https://picsum.photos/id/10/400/300",
    pubDate: "2024-06-01",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    userId: 1,
    categoryId: 2,
  },
  {
    id: 2,
    title: "Top 10 Travel Spots for 2024",
    image: "https://picsum.photos/id/11/400/300",
    pubDate: "2024-05-15",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    userId: 2,
    categoryId: 1,
  },
  {
    id: 3,
    title: "Election Season Recap",
    image: "https://picsum.photos/id/12/400/300",
    pubDate: "2024-04-20",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    userId: 1,
    categoryId: 6,
  },
];
let nextId = 4;


let postTags = [
    {
        id: 1, 
        postId: 3,
        tagId: 2,
    },
    {
        id: 2,
        postId: 1,
        tagId: 3,
    },
    { 
        id: 3,
        postId: 2,
        tagId: 1,
    }
]

export const getPosts = () => {
    //return fetch(_apiUrl).then((res) => res.json());
    return Promise.resolve(posts);
};

export const getPostById = (id) => {
    //return fetch(`${_apiUrl}/${id}`).then((res) => res.json());
    const found = posts.find((p) => p.id === id);
    return Promise.resolve(found);
};

export const getPostsByUserId = (userId) => {
    //return fetch(`${_apiUrl}/${userId}`).then((res) => res.json());
    const found = posts.filter((p) => p.userId === userId);
    return Promise.resolve(found);
    
};

//finds which postId show up in postTags for the tagId, filters posts down to those ids, matches the route
export const getPostsByTag = (tagId) => {
  //return fetch(`${_apiUrl}/tag/${tagId}`).then((res) => res.json());
    const matchingPostIds = postTags
    .filter((pt) => pt.tagId === tagId)
    .map((pt) => pt.postId);
    const found = posts.filter((p) => matchingPostIds.includes(p.id));
    return Promise.resolve(found);
};


export const createPost = (post) => {
    /*
        return fetch(_apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(post),
        }).then((res) => res.json());
    */
    const newPost = { ...post, id: nextId++ };
    posts.push(newPost);
    return Promise.resolve(newPost);
};

export const updatePost = (post) => {
/*
    return fetch(`${_apiUrl}/${post.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
    });
*/
    posts = posts.map((p) => (p.id === post.id ? post : p));
    return Promise.resolve(post);
};

export const deletePost = (id) => {
    /*
    return fetch(`${_apiUrl}/${id}`, {
        method: "DELETE"
    });
    */
   posts = posts.filter((p) => p.id !== id);
   return Promise.resolve();
};