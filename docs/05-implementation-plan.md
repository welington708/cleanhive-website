# 05 - Plano de implementacao

## Arquitetura proposta

- Next.js para paginas, SEO e endpoint seguro do formulario.
- TypeScript para reduzir erros.
- Tailwind CSS para preservar e organizar a identidade visual.
- Conteudo centralizado para facilitar troca de telefone, textos, servicos e cidades.
- Imagens locais otimizadas e carregamento responsivo.
- Repositorio privado e hospedagem em contas do proprietario.

Essa proposta sera validada antes de instalar dependencias ou iniciar a aplicacao.

## Fases

### Fase 0 - Documentacao e inventario

- Registrar requisitos, contatos, paginas, servicos e pendencias.
- Inventariar imagens e problemas do site atual.
- Confirmar com Ronald o fluxo anterior de leads.

### Fase 1 - Base visual local

- Criar projeto e sistema de cores/tipografia.
- Implementar cabecalho, rodape e componentes compartilhados.
- Implementar Home responsiva com dados de teste.
- Revisar visual antes de prosseguir.

### Fase 2 - Conteudo e paginas

- Implementar Services, Our Work, About, Service Areas e Contact.
- Implementar paginas legais com textos aprovados.
- Organizar e otimizar imagens.

### Fase 3 - Formulario

- Criar endpoint no servidor.
- Configurar ambiente de teste.
- Adicionar validacao, antispam, limite de envios e estados de erro/sucesso.
- Testar recebimento usando `+1 (863) 317-0165` quando aplicavel.

### Fase 4 - SEO, qualidade e homologacao

- Metadados unicos, URLs canonicas, sitemap e robots.txt.
- Dados estruturados adequados.
- Testes em celular e desktop.
- Revisao de acessibilidade, desempenho, links e formularios.

### Fase 5 - Lancamento

- Trocar telefone de teste por `+1 (407) 867-8938`.
- Confirmar e-mail, horario, servicos, cidades, avaliacoes e links sociais.
- Verificar que nao existem chaves ou dados de teste publicados.
- Conectar dominio, HTTPS, analytics e Search Console.
- Entregar manual de manutencao e acessos ao proprietario.

## Checklist obrigatorio antes da publicacao

- [ ] Telefone definitivo aparece em todas as paginas e metadados.
- [ ] Numero `+1 (863) 317-0165` nao aparece na versao de producao.
- [ ] Formulario entrega e-mail real em teste de sucesso.
- [ ] Falha do provedor nao mostra sucesso falso.
- [ ] Horario comercial foi confirmado.
- [ ] Servicos e cidades foram confirmados.
- [ ] Alegacoes comerciais e legais foram aprovadas.
- [ ] Imagens possuem autorizacao ou licenca.
- [ ] Avaliacoes possuem fonte verificavel.
- [ ] Dominio, hospedagem e integracoes pertencem ao proprietario.
- [ ] Sitemap, canonicals, dados estruturados e links foram verificados.
- [ ] Manual de manutencao foi entregue.
