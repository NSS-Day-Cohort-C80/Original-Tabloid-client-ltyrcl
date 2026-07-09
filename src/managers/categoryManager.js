const _apiUrl = "/api/categories";

export const getCategories = () => {
    return fetch(_apiUrl).then((res) => res.json());
};

export const getCategory = (id) => {
    return fetch(`${_apiUrl}/${id}`).then((res) => res.json());
};

export const createCategory = (category) => {
    return fetch(_apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(category),
    }).then((res) => res.json());
};

export const updateCategory = (category) => {
    return fetch(`${_apiUrl}/${category.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(category),
    });
};

export const deleteCategory = (id) => {
    return fetch(`${_apiUrl}/${id}`, {
        method: "DELETE",
    });
};