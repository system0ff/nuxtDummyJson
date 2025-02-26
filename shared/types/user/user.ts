export interface UserLogin {
  username: string | null, 
  password: string | null
}

export type User = Omit<UserResponse, "id" | "gender" | "accessToken" | "refreshToken">

export interface UserResponse {
  id: number,
  username: string,
  email: string,
  firstName: string,
  lastName: string,
  gender: string,
  image: string,
  accessToken: string, 
  refreshToken: string
}