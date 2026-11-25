# 04 - Formulario e fluxo de leads

## Situacao encontrada no site antigo

Os formularios publicos enviam JSON para um webhook de LeadConnector/HighLevel controlado fora deste projeto. O codigo nao envia diretamente para WhatsApp ou e-mail.

O destino posterior do webhook nao pode ser determinado sem acesso a conta antiga. Ele pode ter criado um contato no CRM e disparado e-mail, SMS ou WhatsApp.

O formulario antigo tambem exibe sucesso sem verificar corretamente se o webhook aceitou o envio. Esse comportamento nao sera reproduzido.

## Campos da nova versao

| Campo | Obrigatorio | Observacao |
| --- | --- | --- |
| Nome completo | Sim | Texto com limite de tamanho |
| Telefone | Sim | Normalizar numero dos EUA |
| E-mail | Sim | Validacao de formato |
| Endereco ou cidade | Sim | Coletar apenas o necessario para o orcamento |
| Tipo de servico | Sim | Lista dos servicos confirmados |
| Metragem aproximada | Nao | Numero positivo |
| Observacoes | Nao | Texto com limite de tamanho |
| Consentimento | Sim | Aviso curto sobre contato e privacidade |

## Decisao confirmada

Ronald confirmou que os pedidos eram recebidos por e-mail e que nao havia historico de leads disponivel. A nova versao usara e-mail como canal principal. Nenhum CRM sera necessario no lancamento inicial.

## Fluxo recomendado

1. Visitante preenche o formulario.
2. Navegador valida os campos basicos.
3. Servidor valida novamente, aplica antispam e limite de envios.
4. Servidor envia o orcamento por um provedor de e-mail configurado em conta controlada pelo proprietario.
5. Durante homologacao, notificacoes e CTAs de telefone usam `+1 (863) 317-0165`.
6. Site mostra sucesso somente quando o provedor confirma o aceite.
7. Em caso de falha, o site informa o erro e oferece telefone como alternativa.

## WhatsApp

O WhatsApp pode existir como CTA separado. Enviar todos os campos do formulario por um link de WhatsApp nao e a recomendacao inicial, pois exporia dados pessoais na URL e dependeria de uma acao manual do visitante.

Se Ronald confirmar que usava WhatsApp por meio do CRM, a automacao podera ser recriada posteriormente em uma conta que ele controle.

## Ambientes

| Ambiente | Telefone | Destino do formulario |
| --- | --- | --- |
| Desenvolvimento | `+1 (863) 317-0165` | SMTP de teste ou caixa definida pelo responsavel pelo projeto |
| Homologacao | `+1 (863) 317-0165` | Caixa definida pelo responsavel pelo projeto |
| Producao | `+1 (407) 867-8938` | `cleanhivecompany@gmail.com` ou destino confirmado |

Os valores devem ficar centralizados em configuracao para que a troca final nao dependa de procurar numeros em varias paginas.
