import axios from 'axios'

export const Service = {
  axios(params = {}) {
    const url =`https://api.github.com/search/${params.valueRep}?q=${params.valueQuery}+language:${params.valueLang}`;
    const headers = { Authorization: 'Basic -u kolesnikovtgn:93e92c2a74aa92e55cc5bfd9b3728901cf2258bb' };
    const method = 'get';

    return axios({url, method, headers})
        .then((response) => {
          response.data.items.forEach(item => { item.myList = false; item.langSearch = params.valueLang; item.querySearch = params.valueQuery;})
          return response.data.items;
        });
  }
}
