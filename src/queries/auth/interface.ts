export interface LoginRequest {
  id: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  accessToken: string;
}
