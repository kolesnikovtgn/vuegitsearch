import axios from 'axios'

export const Service = {
  axios(params = {}) {
    const url =`https://api.github.com/search/${params.repositories}?q=${params.query}+language:${params.language}`;
    const headers = { Authorization: 'Basic -u kolesnikovtgn:93e92c2a74aa92e55cc5bfd9b3728901cf2258bb' };
    const method = 'get';

    return axios({url, method, headers})
        .then((response) => {
          // eslint-disable-next-line no-console
          console.log('in axios asdasd', response);
          response.data.items.forEach(item => { item.myList = false; item.langSearch = params.language; item.querySearch = params.query;})
          return response.data.items;
        });
  }
}
