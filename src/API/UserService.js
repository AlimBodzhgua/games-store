import axios from 'axios';

export default class UserService {
	static async registerUser(data) {
		return axios.post('http://localhost:8080/users', data)
	}
}