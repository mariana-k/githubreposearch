import axios from 'axios';
export const apiCall = (query, perPage, page, dispatch, setTotalPages, setItems, setLoading) => {
	axios
		.get(`https://api.github.com/search/repositories`, {
			params: {
				q: query,
				per_page: perPage,
				page: page,
			},
		})
		.then((response) => {
			dispatch(setItems(response.data.items));
			dispatch(setLoading(false));
			setTotalPages(Math.ceil(response.data.total_count / perPage));
		})
		.catch((error) => {
			console.log('Error fetching and parsing data', error);
		});
};
