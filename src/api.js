import axios from 'axios';

export const fetchProj = projId => {
	return axios.get(`/api/contests/${projId}`)
		.then(resp => resp.data);
};
