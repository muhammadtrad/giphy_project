const API_KEY = 'VMwZpERJCfaNYRO7075sM0f7EGdB8moj';

export const fetchSearchGiphys = (searchTerm) => {
    
    const root = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${API_KEY}&limit=2`;

    return fetch(root).then(response => response.json());

}
