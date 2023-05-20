import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { UserRepository } from './user.repository'
import { CreateUserDTO } from './DTO/CreateUser.dto'
import { UserEntity } from './user.entity'
import { randomUUID } from 'crypto'
import { UpdateUserDTO } from './DTO/UpdateUser.dto'
import { UserListDTO } from './DTO/ReadList.dto'

@Controller('users') // The route name
export class UserController {
  constructor(private UserRepository: UserRepository) { } // Class object initialiser. Constructor method replaces the constructor function

  @Post() // HTTP Method
  // Down below we'll perform an action about the route.
  // In this example, we'll create a structure that allow a new user creation
  async createUser(@Body() userData: CreateUserDTO) { // Usually, the DTO (Data Transfer Obj) are to assign types for datas
    // This is where we'll set the instructions about how we'll handle with the incoming information to create a new user

    let { id, name, email, password } = new UserEntity()
    email = userData.email
    password = userData.password
    name = userData.name
    id = randomUUID()
    
    // Usually, it's recommended to return a object when you're dealing with API RESTful
    this.UserRepository.CreateUser({ id, name, email, password })
    return {
      user: new UserListDTO(id, name),
      message: 'User created successful'
    }
  }

  @Get()
  async listUsers() {
    const RegisteredUsers = await this.UserRepository.ListUsers() // Listing registered users
    const UserList = RegisteredUsers.map(
      user => new UserListDTO(
        user.id,
        user.name
      )
    )

    return UserList
  }

  @Put('/:id')
  async UpdateUser(@Param('id') id: string, @Body() data: UpdateUserDTO) { // To refer a param on URL, you must use decorator @Param and put the param inside
    const UpdatedUser = await this.UserRepository.UpdateUser(id, data)

    return {
      user: UpdatedUser,
      msg: 'User info was updated successfuly!'
    }
  }

  @Delete('/:id')
  async DeleteUser(@Param('id') id: string) {
    const UserDeleted = await this.UserRepository.RemoveUser(id)

    return {
      user: UserDeleted,
      msg: 'The user has been deleted from the database!'
    }
  }
}