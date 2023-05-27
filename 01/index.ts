import fs from 'fs'

function read(): void {
  const bd = JSON.parse(fs.readFileSync('./bd.json').toString())

  console.log(bd)
}

function write(dados: string): void {
  const bd = fs.writeFileSync('./bd.json', dados)
}

const obj: {
  nome: string
  idade: number
} = {
  nome: 'Andre',
  idade: 25
}

write(JSON.stringify(obj))

read()