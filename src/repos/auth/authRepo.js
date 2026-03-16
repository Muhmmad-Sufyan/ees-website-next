import { ADMIN_LOGIN, ADMIN_LOGOUT } from "@/constants/endpoints";
import { post } from "@/constants/api-helper";

class AuthRepository {
  static instance;

  static getInstance() {
    if (!AuthRepository.instance) {
      AuthRepository.instance = new AuthRepository();
    }
    return AuthRepository.instance;
  }

  async login(email, password) {
    return post(ADMIN_LOGIN, { email, password });
  }

  async logout() {
    return post(ADMIN_LOGOUT);
  }
}

export const AuthRepo = AuthRepository.getInstance();
