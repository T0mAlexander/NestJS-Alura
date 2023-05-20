/* eslint-disable @typescript-eslint/ban-types */
import { ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from 'class-validator'
import { UserRepository } from '../user.repository'
import { Injectable } from '@nestjs/common'

@Injectable()
@ValidatorConstraint({ async: true })
export default class UniqueEmailValidator implements ValidatorConstraintInterface {
  constructor(private UserRepository: UserRepository) {}

  async validate(value: string): Promise<boolean> {
    const ExistentUserEmail = await this.UserRepository.FindByEmail(value)
    
    return !ExistentUserEmail
  }
}

// Creating a custom decorator called "@UniqueEmail"
export const UniqueEmail = (ValidationOptions: ValidationOptions) => {
  return (object: Object, property: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: property,
      options: ValidationOptions,
      constraints: [],
      validator: UniqueEmailValidator
    })
  }
}