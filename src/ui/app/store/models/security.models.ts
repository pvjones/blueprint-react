import { ModelMap } from './index'

export interface UserLogin {
  email: string
  password: string
}
export type UserLoginMap = ModelMap<UserLogin>

export interface UserRegistration {
  email: string
  firstName: string
  lastName: string
  password: string
  confirmPassword: string
  recaptcha: string
}
export type UserRegistrationMap = ModelMap<UserRegistration>
