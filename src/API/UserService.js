import axios from 'axios';

export default class UserService {
	static async registerUser(data) {
		return axios.post('http://localhost:8080/users', data)
	}

	static async login(data) {
		const response = await axios.post(`http://localhost:8080/login`, data);
		return response
	}

	static async updateData(id, data) {
		const body = {
     		"email": data.email,
      		"login": data.login,
      		"library": data.library,
		}
		axios.patch(`http://localhost:8080/users/${id}`, body);	
	}
}