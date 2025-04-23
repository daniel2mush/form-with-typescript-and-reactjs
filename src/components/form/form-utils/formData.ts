export interface RegistrationType {
  name: string;
  type: string;
  placeHolder: string;
}




export const  RegistrationForm :RegistrationType[] = [
  {
    name: 'username',
    type: 'text',
    placeHolder : 'Enter your username'
  },
  {
    name: 'email',
    type: 'email',
    placeHolder : 'Enter your email'
  },
  {
    name: 'password',
    type: 'password',
    placeHolder : 'Enter your password'
  },
  {
    name: 'confirmPassword',
    type: 'password',
    placeHolder : 'confirm your password'
  },
  
]