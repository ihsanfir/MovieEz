const baseUrl = `https://api.themoviedb.org/3`;
const apiKey = `9885a05e9ec596161dfac322f01a0a3e`;

class DataSource {
    static searchMovie(keyword) {
        return fetch(`${baseUrl}/search/movie?api_key=${apiKey}&query=${keyword}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if(responseJson.total_results == 0) {
                    return Promise.reject(`${keyword} is not found`);
                }
                else {
                    return Promise.resolve(responseJson.results);
                }
            })
        }
    
    static movieTrending(value) {
        return fetch(`${baseUrl}/discover/movie?api_key=${apiKey}&sort_by=${value}&include_adult=false&page=1`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
              return responseJson.results;
            })
    }
}           

export default DataSource;