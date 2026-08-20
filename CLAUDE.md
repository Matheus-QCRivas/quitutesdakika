# Quitutes da Kika
Encomendas de quitutes artesanais, Salvador/BA. Produção sob encomenda, sem estoque.

## Stack
- Next.js 16.3.1 com App Router, sem `src/`. React 19.2.8.
- TypeScript 5 em modo `strict`, alias `@/*` apontando para a raiz.
- Tailwind CSS v4 via `@tailwindcss/postcss`. As cores e fontes ficam em
  `tailwind.config.ts`, carregado por `@config` em `app/globals.css` — o v4 não
  lê o config automaticamente.
- Paleta: tijolo `#A65C4F`, rose `#E39A8F`, creme `#F8EDE1`, areia `#BFB29A`,
  oliva `#6D6D5A`, cacau `#5C3A2E`. Padrão do `body`: fundo creme, texto oliva.
- Fontes por `next/font/google`: Playfair Display (`font-titulo`) para títulos e
  Marck Script (`font-assinatura`) para assinatura.
- ESLint 9 com `eslint-config-next`. Scripts: `dev`, `build`, `start`, `lint`.

## Estrutura
- `app/layout.tsx` — html `pt-BR`, fontes, metadata com ícones, Header e Footer
- `app/page.tsx` — capa, título, linha Salvador/48h, âncora e o Cardapio
- `app/quem-somos/page.tsx` — foto, texto em primeira pessoa, depoimentos
- `app/cardapio/page.tsx` — título e o Cardapio
- `app/contato/page.tsx` — WhatsApp, Instagram, bairros, pagamento e o Faq
- `components/Header.tsx` — cliente; logo 1x/2x e nav com item ativo em tijolo
- `components/Footer.tsx` — linha única: WhatsApp, Instagram, área de entrega
- `components/Cardapio.tsx` — cliente; lista, carrinho, total e link do wa.me
- `components/Faq.tsx` — cliente; accordion com uma pergunta aberta por vez
- `lib/config.ts` — contatos, bairros, prazo, formas de pagamento, sinal
- `lib/produtos.ts` — tipo `Produto` e o catálogo
- `lib/depoimentos.ts` — tipo `Depoimento` e a lista
- `public/` — os arquivos de imagem (logo, ícones, capa, produtos) ainda não
  foram adicionados; ver `public/README.md`

## Convenções
- Textos sempre em português do Brasil
- Client Components apenas onde há interação real
- Não instalar dependências sem eu pedir

## Regras de negócio
- Prazo mínimo de 48h entre a confirmação do sinal e a data de entrega — o
  relógio começa no sinal, não na mensagem do cliente
- Sinal de 50% na confirmação, restante na entrega
- Pedido é fechado por mensagem no WhatsApp montada a partir do carrinho.
  Sem formulário: nome, data e endereço ficam para a conversa.

## Fluxo de trabalho
Trabalhamos por etapas. Faça apenas o que foi pedido na mensagem atual.
Não antecipe seções futuras nem refatore o que já está pronto.
