import { readFileSync, writeFileSync } from "fs";
import type { User } from '../02'

function deleteUser(cpf: string): void {
  const bd: User[] = JSON.parse(readFileSync('./bd.json').toString())
  const newBd = bd.filter(user => user.cpf !== cpf)
  writeFileSync('./bd.json', JSON.stringify(newBd))
}

deleteUser('12345678901')