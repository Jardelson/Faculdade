# Demonstração prática do protótipo navegável — EconKnows HUB

Este protótipo foi desenvolvido como material complementar da A3 da disciplina Modelos, Métodos e Técnicas da Engenharia de Software.

O objetivo não é apresentar um sistema finalizado, mas demonstrar de forma prática o fluxo de navegação proposto na documentação do projeto.

## Funcionamento

A página inicial apresenta três caminhos principais:

1. Login demonstrativo;
2. Entrada como convidado;
3. Busca por conteúdo específico.

Como se trata de um protótipo estático, não há banco de dados, autenticação real ou integração com servidor. Assim, o usuário pode digitar qualquer e-mail e senha no login. Ao clicar em "Entrar", será direcionado para a página principal do HUB.

O botão "Entrar como convidado" também direciona para a mesma página, simulando acesso sem autenticação.

A busca permite que o usuário digite qualquer termo. Porém, por ser um protótipo sem mecanismo real de pesquisa, qualquer busca direciona para uma notícia demonstrativa.

## Páginas criadas

- index.html: página inicial com login e busca demonstrativa.
- hub.html: página principal com três notícias em destaque.
- noticia1.html: notícia sobre pequenos gastos diários.
- noticia2.html: notícia sobre parcelamento.
- noticia3.html: notícia sobre promoções e descontos.

## Relação com a A3

Este protótipo representa a etapa de fluxo/protótipo simples de telas solicitada na atividade. Ele demonstra como a EconKnows HUB poderia funcionar na prática, validando a navegação básica, a identidade visual e a experiência inicial do usuário.

## Limitações do protótipo

- Não possui banco de dados.
- Não possui login real.
- Não armazena usuários.
- Não realiza busca real.
- Não possui painel administrativo funcional.
- Não utiliza backend.

Essas limitações são coerentes com a proposta acadêmica, pois o foco da A3 está na documentação, requisitos, modelagem e processo de desenvolvimento.