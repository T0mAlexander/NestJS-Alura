import { IsEmail, IsString, MinLength } from 'class-validator'
import { UniqueEmail } from '../validation/UniqueEmail.validator'

// In this file, we'll set and validate data types that we want to use on the route controller
// Nest.js suggests class-validator but we can use Zod or further related libraries
export class CreateUserDTO {
  @IsString({ message: 'Name cannot be empty. Alert: this data receives a string' })
    name: string

  @IsEmail(undefined, { message: 'Email cannot be empty. Alert: this data receives a string' })
  @UniqueEmail({ message: 'This user already exists!' })
    email: string
  
  @MinLength(6, { message: 'Password must be at minimum 6 characters' })
    password: string
}