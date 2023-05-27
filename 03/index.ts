import { readFileSync, writeFileSync } from 'fs'
import type { User } from '../02'

const newUser: User = {
  nome: 'Melch 2',
  email: 'email2@email.com',
  cpf: '12345678901',
  profissao: 'Dev Desempregado 2',
  endereco: null
}

function updateUser(cpf: string) {
  const bd: User[] = JSON.parse(readFileSync('./bd.json').toString())
  const user = bd.find(user => user.cpf === cpf)

  if (user) {
    bd[bd.indexOf(user)] = newUser
    writeFileSync('./bd.json', JSON.stringify(bd))
  }
}

function detailUser(cpf: string) {
  const bd: User[] = JSON.parse(readFileSync('./bd.json').toString())
  const user = bd.find(user => user.cpf === cpf)

  console.log(user)
}

updateUser('12345678901')
detailUser('12345678901')