import axios from 'axios';

export default class UserService {
	static async registerUser(data) {
		return axios.post('http://localhost:8080/users', data)
	}

	static async getUser(email) {
		const response = await axios.get(`http://localhost:8080/users?email=${email}`)
		if(!response.data.length) {
			throw new Error('User not fiend')
		}
		return response.data[0];
	}

	static async login(data) {
		const response = await axios.post(`http://localhost:8080/login`, data);
		return response
	}

	static async updateLibrary(id, library) {
		const body = {"library": library}
		axios.patch(`http://localhost:8080/users/${id}`, body);
	}
}