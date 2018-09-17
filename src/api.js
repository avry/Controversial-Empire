import axios from 'axios';

export const fetchProj = projId => {
	return axios.get(`/api/projects/${projId}/`)
		.then(resp => resp.data);
};

export const fetchProjList = () => {
	return axios.get(`/api/projectslist/`)
		.then(resp => resp.data);
}