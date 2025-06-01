import type { LoginUserDTO, RegisterUserDTO, User } from '@/types/user';
import axios from 'axios';

type UserResponse = {
	accessToken: string;
	user: Omit<User, 'token'>;
}

export class UserService {

	static async register(data: RegisterUserDTO): Promise<User> {
		const response = await axios.post<UserResponse>('http://localhost:8080/users', data)

		const user = {...response.data.user, token: response.data.accessToken, }

		return user;
	}

	static async login(data: LoginUserDTO): Promise<User> {
		const response = await axios.post<UserResponse>(`http://localhost:8080/login`, data);

		const user = {...response.data.user, token: response.data.accessToken, }

		return user;
	}

	static async update(data: User) {
		const body = {
     		"email": data.email,
      		"login": data.login,
      		"img": data.img,
      		"library": data.library,
		}
		axios.patch(`http://localhost:8080/users/${data.id}`, body);	
	}
}