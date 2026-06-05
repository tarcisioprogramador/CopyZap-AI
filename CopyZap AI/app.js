function gerarIA() {
  const nome = document.getElementById("nome").value;
  const produto = document.getElementById("produto").value;
  const valor = document.getElementById("valor").value;
  const estilo = document.getElementById("estilo").value;

  let respostas = [];

  if (estilo === "normal") {
    respostas = [
      `Olá ${nome}, tudo bem? Tenho uma condição especial no ${produto} por R$ ${valor}. Quer saber mais?`,
      `${nome}, posso te explicar como funciona o ${produto} por R$ ${valor}? Está com condição especial.`,
    ];
  }

  if (estilo === "agressivo") {
    respostas = [
      `${nome}, oportunidade ÚNICA no ${produto} por R$ ${valor}! Isso pode acabar hoje!`,
      `🚨 ${nome}, última chance! ${produto} com preço especial de R$ ${valor}. Vamos fechar agora?`,
    ];
  }

  if (estilo === "premium") {
    respostas = [
      `Olá ${nome}, separei uma condição exclusiva no ${produto} por R$ ${valor}. Posso te explicar melhor?`,
      `${nome}, temos uma oferta diferenciada no ${produto} por R$ ${valor}. Vale muito a pena conhecer.`,
    ];
  }

  const texto = respostas[Math.floor(Math.random() * respostas.length)];

  document.getElementById("resultado").value = texto;
}