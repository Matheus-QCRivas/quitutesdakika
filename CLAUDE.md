# Quitutes da Kika

Site de encomendas de quitutes artesanais, Salvador/BA. Negócio caseiro,
produção sob encomenda, sem estoque.

## Stack
Next.js (App Router), JavaScript, CSS puro. Sem Tailwind, sem TypeScript,
sem bibliotecas de UI. Não instalar dependências sem eu pedir.

## Regras de código
- Componentes em /components, um arquivo por componente
- Client Components ("use client") só onde há interação real
- CSS global em app/globals.css — preservar o design do site original
- Textos sempre em português do Brasil
- Sem comentários óbvios no código

## Referência
/legacy contém o site original em arquivo HTML único. É a fonte da verdade
para conteúdo, textos e estilo visual. Ler apenas os trechos necessários
para a tarefa da vez — nunca o arquivo inteiro.

## Regras de negócio
- Prazo mínimo de 48h entre o pedido e a data de entrega
- Pagamento antecipado, antes da produção
- Pedido é fechado por mensagem no WhatsApp, gerada pelo formulário
- Campo de endereço aparece só quando o cliente escolhe entrega

## Fluxo de trabalho
Trabalhamos por etapas. Faça apenas o que foi pedido na mensagem atual.
Não antecipe seções futuras nem refatore o que já está pronto.
