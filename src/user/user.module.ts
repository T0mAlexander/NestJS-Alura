import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { UserRepository } from './user.repository'
import UniqueEmailValidator from './validation/UniqueEmail.validator'

// In this file, we must set below some important classes dependencies
@Module({
  controllers: [UserController], // The route manipulator that'll direct routes and push, collect and/or receive informations
  providers: [UserRepository, UniqueEmailValidator], // The source of class methods to manipulate resources about Users
})

export class UserModule {}