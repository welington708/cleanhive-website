# CleanHive - Reconstrucao do site

Projeto local para reconstruir o site da CleanHive sob controle do proprietario.

## Estado atual

- Fase: documentacao e validacao de requisitos.
- Publicacao: nenhuma.
- Dominio: pendente.
- Telefone temporario para testes: `+1 (863) 317-0165`.
- Telefone definitivo da empresa: `+1 (407) 867-8938`.
- E-mail previsto para receber orcamentos: `cleanhivecompany@gmail.com`.

O numero temporario deve ser usado apenas em ambientes de desenvolvimento e homologacao. Antes da publicacao, todos os contatos devem ser revisados conforme o checklist em `docs/05-implementation-plan.md`.

## Como este projeto sera construido

O site atual nao usa Shopify nem Nuvemshop. Ele e uma aplicacao de marketing feita com tecnologias web (React/Vite/Tailwind) e envia formularios para um webhook do ecossistema LeadConnector/HighLevel.

A nova versao sera um site institucional sob controle do proprietario, com paginas publicas, formulario seguro no servidor e documentacao simples para manutencao. A proposta tecnica inicial e Next.js, TypeScript e Tailwind CSS, com hospedagem e dominio em contas pertencentes ao proprietario. Essa escolha sera confirmada antes da implementacao.

## Documentacao

- [Resumo do projeto](docs/01-project-brief.md)
- [Decisoes e pendencias](docs/02-decisions-and-pending.md)
- [Mapa do site e conteudo](docs/03-site-map-and-content.md)
- [Formulario e fluxo de leads](docs/04-form-and-lead-routing.md)
- [Plano de implementacao](docs/05-implementation-plan.md)
- [Execucao local e configuracao de e-mail](docs/06-local-development.md)

## Executar localmente

```powershell
npm install
Copy-Item .env.example .env.local
npm run dev
```

Acesse `http://127.0.0.1:3000`. O site funciona sem credenciais, mas o envio de e-mail retorna uma mensagem de configuracao ate que as variaveis SMTP sejam preenchidas em `.env.local`.

## Materiais

As imagens fornecidas estao em `IMG/`, separadas por Home, About, Services e Our Work. Antes da publicacao, sera necessario confirmar autoria/licenca, obter a logo em alta qualidade e substituir capturas de redes sociais por fotos originais quando possivel.
