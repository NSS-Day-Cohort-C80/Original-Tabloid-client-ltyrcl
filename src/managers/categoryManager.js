const _apiUrl = "/api/category";

let categories = [
    { 
        id: 1, 
        name: "Travel" 
    },
    {
        id: 2,
        name: "Technology"
    },
    {
        id: 3,
        name: "News"
    },
    {
        id: 4,
        name: "Nature"
    },
    {
        id: 5,
        name: "Animals"
    },
    {
        id: 6,
        name: "Politics"
    }

];
let nextId = 7;

//the promises are allowing me to run stuff for the time being before we have the actual url

export const getCategories = () => {
    //return fetch(_apiUrl).then((res) => res.json());
    return Promise.resolve(categories);
};

export const getCategory = (id) => {
    //return fetch(`${_apiUrl}/${id}`).then((res) => res.json());
    const found = categories.find((c) => c.id === id);
    return Promise.resolve(found);
};

export const createCategory = (category) => {
    /* return fetch(_apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(category),
        }).then((res) => res.json());
    */
    const newCategory = { ...category, id: nextId++ };
    categories.push(newCategory);
    return Promise.resolve(newCategory);
};

export const updateCategory = (category) => {
    /*
    return fetch(`${_apiUrl}/${category.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(category),
    });
    */
    categories = categories.map((c) => (c.id === category.id ? category : c));
    return Promise.resolve(category);
};

export const deleteCategory = (id) => {
    /* 
    return fetch(`${_apiUrl}/${id}`, {
        method: "DELETE" 
    });
    */
    categories = categories.filter((c) => c.id !== id);
    return Promise.resolve();
};