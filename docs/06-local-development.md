# 06 - Execucao local e configuracao de e-mail

## Requisitos

- Node.js 20 ou superior.
- Uma conta SMTP controlada pelo responsavel pelo projeto ou pelo proprietario.

## Iniciar o site

No PowerShell, dentro da pasta do projeto:

```powershell
npm install
Copy-Item .env.example .env.local
npm run dev
```

Abrir `http://127.0.0.1:3000`.

## Configurar o envio

Preencher apenas o arquivo `.env.local`:

```text
SMTP_HOST=
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=
SMTP_PASS=
QUOTE_FROM_EMAIL=
QUOTE_TO_EMAIL=
```

- `SMTP_HOST`, porta e seguranca sao fornecidos pelo provedor de e-mail.
- `SMTP_USER` e `SMTP_PASS` sao credenciais de envio, preferencialmente especificas para o aplicativo.
- `QUOTE_FROM_EMAIL` precisa ser aceito pelo provedor como remetente.
- `QUOTE_TO_EMAIL` e a caixa que recebera os pedidos. Durante os testes, usar uma caixa do responsavel pelo projeto; trocar para `cleanhivecompany@gmail.com` somente no lancamento.
- Nunca enviar a senha pelo chat, salvar no repositorio ou colocar no navegador.

Depois de alterar `.env.local`, reiniciar o servidor local.

## Comportamento do formulario

- Dados invalidos retornam erro sem enviar e-mail.
- Um campo invisivel bloqueia bots simples.
- O endpoint limita tentativas repetidas durante a execucao local.
- Se o SMTP nao estiver configurado, o visitante recebe uma mensagem clara e o telefone de teste e oferecido.
- A mensagem de sucesso aparece somente depois que o servidor de e-mail aceita o envio.

## Teste antes da publicacao

1. Enviar um pedido de teste completo.
2. Confirmar recebimento na caixa configurada.
3. Responder ao e-mail e confirmar que a resposta vai para o cliente informado no formulario.
4. Testar uma senha SMTP incorreta e confirmar que o site mostra erro, nunca sucesso.
5. Conferir assunto, telefone, endereco, servico, metragem e observacoes.
6. Remover todos os dados de teste.

## Producao

Na hospedagem, as mesmas variaveis devem ser cadastradas como segredos do projeto. O arquivo `.env.local` permanece apenas no computador e ja esta ignorado pelo Git.
