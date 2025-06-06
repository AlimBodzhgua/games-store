import { baseApi } from '@/API/axios';
import type { LoginUserDTO, RegisterUserDTO, User } from '@/types/user';

type UserResponse = {
	accessToken: string;
	user: Omit<User, 'token'>;
}

export class UserService {

	static async register(data: RegisterUserDTO): Promise<User> {
		const response = await baseApi.post<UserResponse>('/users', data)

		const user = {...response.data.user, token: response.data.accessToken, }

		return user;
	}

	static async login(data: LoginUserDTO): Promise<User> {
		const response = await baseApi.post<UserResponse>('/login', data);

		const user = {...response.data.user, token: response.data.accessToken, }

		return user;
	}

	static async update(data: User) {
		const body = {
			email: data.email,
			login: data.login,
			img: data.img,
			library: data.library,
		};
		baseApi.patch(`/users/${data.id}`, body);	
	}
}