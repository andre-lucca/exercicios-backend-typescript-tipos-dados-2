import fs from 'fs'

type Endereco = {
  cep: string
  rua: string
  complemento?: string
  bairro: string
  cidade: string
}

export type User = {
  nome: string
  email: string
  cpf: string
  profissao?: string
  endereco: Endereco | null
}

const newUser: User = {
  nome: 'Melch 2',
  email: 'email@email.com',
  cpf: '12345678901',
  profissao: 'Dev Desempregado',
  endereco: {
    cep: 'Cep do Melch',
    rua: 'Rua do Melch',
    bairro: 'Bairro do Melch',
    cidade: 'Cidade do Melch'
  }
}

function createUser(user: User): void {
  const users: User[] = JSON.parse(fs.readFileSync('./bd.json').toString())
  fs.writeFileSync('./bd.json', JSON.stringify([...users, user]))
}

function listUsers() {
  const users: User[] = JSON.parse(fs.readFileSync('./bd.json').toString())

  console.log(users)
}

createUser(newUser)
listUsers()