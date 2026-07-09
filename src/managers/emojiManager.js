const _apiUrl = "/api/emojis";

export const getEmojis = () => {
    return fetch(_apiUrl).then((res) => res.json());
};