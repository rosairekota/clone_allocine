import axios from 'axios';
import UrlsMovies from './UrlsMovies';
import { MovieType } from './MovieType';

export const getMoviesRated = async (page = 1): Promise<MovieType[]> => {
    return await (await axios.get(UrlsMovies(page).urlMoviesRated)).data.results;
};
export const getMoviesPopular = async (page = 1): Promise<MovieType[]> => {
    return await (await axios.get(UrlsMovies(page).urlMoviesRated)).data.results;
};
// export const getMoviesRated = async () => {
//     let paginate = {};
//     axios.get(UrlsMovies.urlMoviesRated).then((response) => {
//         const data = response.data;
//         const slice = data.slice(Pagination.offset, Pagination.offset + Pagination.perPage);
//         paginate = {
//             currentPage: Math.ceil(data.length / Pagination.perPage),
//             orgTableData: response.data,
//             dataTable: data,
//         };
//     });
//     return paginate;
// };
