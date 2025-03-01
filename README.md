# Projeto de Cartas de Pokémon

Este projeto é um site desenvolvido com **Next.js** e **TypeScript**, que consome a API pública [Pokémon TCG API](https://docs.pokemontcg.io/) para gerar cartas de Pokémon. O site divide as cartas em várias páginas, exibindo **10 cartas por página**, com a funcionalidade de pesquisa para facilitar a busca por cartas específicas.

## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização no lado do servidor e criação de páginas.
- **TypeScript**: Linguagem JavaScript com tipagem estática para maior segurança e robustez.
- **Pokémon TCG API**: API pública para acessar dados sobre cartas de Pokémon.

## Funcionalidades

- **Exibição de Cartas**: O site exibe cartas de Pokémon em formato de páginas, com **10 cartas por página**.
- **Pesquisa por Nome**: O usuário pode pesquisar por cartas utilizando um campo de busca, digitando o nome do Pokémon desejado.
- **Divisão de Páginas**: O sistema de divisão de páginas foi implementado para melhorar o desempenho do carregamento do site. Como o número total de cartas é muito grande, a exibição de todas as cartas em uma única página causaria lentidão. Portanto, a divisão em páginas foi uma solução para otimizar a performance.

## Como Rodar o Projeto

### 1. Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

### 2. Instalar as Dependências

Navegue até a pasta do projeto e instale as dependências utilizando o comando:

```bash
npx create-next-app@latest
```

após isso nomear o projeto e aceitar todas as opções com exceção da última.

### 3. Executar o Projeto

Para rodar o projeto em modo de desenvolvimento, use o comando:

```bash
npm run dev
```

O site estará disponível em [http://localhost:3000](http://localhost:3000).

## Considerações Técnicas

A divisão de páginas foi implementada de forma experimental, seguindo um tutorial da internet. Essa abordagem foi escolhida para evitar o carregamento pesado de todas as cartas em uma única página, o que poderia comprometer a experiência do usuário devido à lentidão. Além disso, outras funcionalidades, como o **resetar a página para a primeira página** sempre que uma pesquisa é realizada, também foram baseadas em tutoriais que consultei durante o desenvolvimento.

Para a construção do projeto, tomei quase totalmente como base dois workshops que utilizei para aprender a integrar APIs e criar projetos em **Next.js** com **TypeScript**:

1. **Workshop com a API do Rick and Morty** ([Link para a API](https://rickandmortyapi.com)): Este workshop ensinou como consumir a API pública do Rick and Morty em um projeto de Next.js com TypeScript, abordando o consumo de dados e a implementação de funcionalidades semelhantes às usadas neste projeto de cartas de Pokémon.
  
2. **Workshop com a CatAPI** ([Link para a API](https://thecatapi.com)): Este workshop também usou o Next.js e TypeScript para criar um projeto consumindo a CatAPI, onde aprendi algumas funcionalidades no trabalho com APIs em projetos React/Next.js.

## Licença

Este projeto é de código aberto e pode ser usado e modificado conforme desejado.
