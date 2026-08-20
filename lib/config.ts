/** Número no formato internacional, só dígitos (ex.: 5511999999999). */
export const WHATSAPP = ""; // preencher

/** Usuário do Instagram, sem o @. */
export const INSTAGRAM = ""; // preencher

export const EMAIL = ""; // preencher

export const BAIRROS_ENTREGA: string[] = [
  "Pituba",
  "Caminho das Árvores",
  "Horto",
  "Rio Vermelho",
  "Alphaville",
];

/** Antecedência mínima, em horas, para fazer um pedido. */
export const PRAZO_HORAS = 48;

/** Formas de pagamento aceitas. */
export const PAGAMENTOS = ["Pix", "Dinheiro"];

/**
 * Percentual cobrado como sinal para confirmar o pedido. O restante sai na
 * entrega ou na retirada, e a produção só começa depois que o sinal é confirmado.
 */
export const SINAL_PERCENTUAL = 50;

/**
 * Prazo, em horas contadas da confirmação do pedido, para cancelar com
 * devolução integral do sinal. Depois disso o sinal não é devolvido.
 */
export const CANCELAMENTO_HORAS = 24;
