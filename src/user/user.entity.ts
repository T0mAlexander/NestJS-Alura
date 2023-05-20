import { UUID } from 'node:crypto'

export class UserEntity {
  id: UUID
  name: string
  email: string
  password: string
}