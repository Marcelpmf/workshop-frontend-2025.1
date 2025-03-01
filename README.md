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
npm install
```

### 3. Executar o Projeto

Para rodar o projeto em modo de desenvolvimento, use o comando:

```bash
npm run dev
```

O site estará disponível em [http://localhost:3000](http://localhost:3000).

## Considerações Técnicas

A divisão de páginas foi implementada de forma experimental, seguindo um tutorial. Essa abordagem foi escolhida para evitar o carregamento pesado de todas as cartas em uma única página, o que poderia comprometer a experiência do usuário devido à lentidão. Embora o sistema esteja funcionando bem, melhorias adicionais na performance podem ser feitas no futuro.

## Licença

Este projeto é de código aberto e pode ser usado e modificado conforme desejado.

---
