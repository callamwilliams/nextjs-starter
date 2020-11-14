import axios from 'axios';

export const fetcher = (...args) =>
    axios
        .get(...args)
        .then((response) => response.data)
        .catch((error) => console.warn(error));
