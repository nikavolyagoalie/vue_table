import axios from 'axios'

export const api = (limit, url) => {
    return axios.get(
        `${url}?results=${limit}`
    );
}
