import axios from "axios";

      const BASE_URL = 'https://pixabay.com/api/';
      const KEY = '38353437-6f1411718b397c5cf93033660';
      axios.defaults.baseURL = 'https://pixabay.com/api/';
     export const perPage = 12;


export const serviceSearch = async (query, page) => {

      const params = new URLSearchParams({
        key: KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: page,
        per_page: perPage,
      })


return axios.get(`${BASE_URL}?${params}`)
        .then(response => {
            
            if (response.status !== 200) {
                throw new Error(response.statusText)
            }
          return response.data
        })
};


