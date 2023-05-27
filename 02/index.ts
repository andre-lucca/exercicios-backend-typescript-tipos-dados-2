import fs from 'fs'

type Endereco = {
  cep: string
  rua: string
  complemento?: string
  bairro: string
  cidade: string
}

type User = {
  nome: string
  email: string
  cpf: string
  profissao?: string
  endereco: Endereco | null
}

const newUser: User = {
  nome: 'Melch',
  email: 'email@email.com',
  cpf: '12345678900',
  profissao: 'Dev Desempregado',
  endereco: {
    cep: 'Cep do Melch',
    rua: 'Rua do Melch',
    bairro: 'Bairro do Melch',
    cidade: 'Cidade do Melch'
  }
}

function createUser(user: User): User {
  fs.writeFileSync('./bd.json', JSON.stringify(user))

  return user
}

function listUsers() {
  const bd = JSON.parse(fs.readFileSync('./bd.json').toString())

  console.log(bd)
}

createUser(newUser)
listUsers()