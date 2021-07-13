const livros = require('./database')

const readLine = require('readline-sync')

const entradaInicial = readLine.question('Deseja buscar um livro? S/N')

//Se sim, mostra as categorias disponíveis e pergunta qual categoria o usuário escolhe
//Se não, é mostrado todos os livros em ordem crescente pela quantidade de páginas

if (entradaInicial.toLocaleUpperCase() === 'S'){
    console.log('Estas são as categorias disponíveis: ')
    console.log('Produtividade e Estilo de Vida', '/História Brasileira', '/Américas', '/Tecnologia', '/Estilo de Vida')

    const entradaCategoria = readLine.question('Qual categoria escolhida? ')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
} else {
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log('Estas são as categorias disponíveis dos Livros disponíveis')

    console.table(livrosOrdenados)

}