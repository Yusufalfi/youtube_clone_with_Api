import axios from "axios";

// const base_url = 'https://youtube-v31.p.rapidapi.com';
const base_url = 'https://youtube-v31.p.rapidapi.com';

const options = {
    method: 'GET',
    url: base_url,
    params: {
      maxResults: '50',
    },
    headers: {
      'X-RapidAPI-Key': 'e7516e0c96msh5746f9e3dacce18p167db7jsn7f5b6ccae432',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchApi = async (url) => {
        const resp = await axios.get(`${base_url}/${url}`, options)

        return resp.data;
  }