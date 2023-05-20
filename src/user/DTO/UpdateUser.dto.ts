import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator'
import { UniqueEmail } from '../validation/UniqueEmail.validator'

// In this file, we'll set and validate data types that we want to UPDATE on the route controller
// Nest.js suggests class-validator but we can use Zod or further related libraries
export class UpdateUserDTO {
  @IsString({ message: 'Name cannot be empty. Alert: this data receives a string' })
  @IsOptional()
    name: string

  @IsEmail(undefined, { message: 'Email cannot be empty. Alert: this data receives a string' })
  @IsOptional()
  @UniqueEmail({ message: 'This user already exists!' })
    email: string

  @IsOptional()
  @MinLength(6, { message: 'Password must be at minimum 6 characters' })
    password: string
}