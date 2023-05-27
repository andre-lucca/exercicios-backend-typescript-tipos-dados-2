import { readFileSync } from 'fs'
import type { User } from '../02'

function listUsers(role?: string): void {
  const users: User[] = JSON.parse(readFileSync('./bd.json').toString())

  if (role) {
    console.log(users.filter(user => user.profissao === role))
    return;
  }

  console.log(users)
}

listUsers('')