import { Injectable } from '@nestjs/common'
import { UserEntity } from './user.entity'

// On this file, we can create methods about our database attributes
@Injectable()
export class UserRepository {
  private users: UserEntity[] = []

  async CreateUser(user: UserEntity) {
    this.users.push(user) // This push will add the new user registered throught a POST route
  }

  async ListUsers() {
    return this.users //? Return all registered users
  }

  async FindByEmail(email: string) {
    const ExistentUserEmail = this.users.find(
      user => user.email === email
    )

    return ExistentUserEmail !== undefined
  }

  private idSearch(id: string) {
    const ExistentUser = this.users.find(
      existentUser => existentUser.id === id
    )

    if (!ExistentUser) {
      throw new Error('User does not exist')
    }

    return ExistentUser
  }

  // To manipulate partial properties from an object, use the Partial type and then declares the class
  async UpdateUser(id: string, data: Partial<UserEntity>) {
    const user = this.idSearch(id)

    // To prevent some mistakes updating the data, this is Typescript trick to identify which properties was modified
    Object.entries(data).forEach(([key, value]) => {
      if(key === id) {
        return
      }

      user[key] = value
    })

    return user
  }

  async RemoveUser(id: string) {
    const user = this.idSearch(id)
    this.users = this.users.filter(
      registeredUser => registeredUser.id !== id
    )

    return user
  }
}