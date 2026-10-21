// =====================================================================
//  CONFIGURAÇÃO DO SORTEIO FINAL — CENAP · XXIII CAIC FAMERP
//  Edite só o que está entre aspas ou entre crases (`).
//  Depois de salvar no GitHub, a Vercel atualiza o site em ~1 minuto.
// =====================================================================

window.SORTEIO_CONFIG = {

  // Prêmios na ordem em que serão sorteados: quantidade e nome, um por linha.
  // Para não mostrar prêmio no telão, deixe vazio:  premios: ``,
  premios: `
`,

  // Como entram os números que concorrem:
  //   "intervalo" -> todos os números de "de" até "ate"
  //   "lista"     -> só os números colados em "lista"
  modo: "intervalo",

  // >>> TROQUE pelo primeiro e pelo último número cadastrado <<<
  de: 1,
  ate: 300,

  // Use quando modo = "lista": um número por linha, entre as crases.
  // Pode ter nome depois do número (ex.: 27 - Maria Souza), mas lembre
  // que este arquivo fica público no GitHub. Prefira só os números.
  lista: `
`,

  // Números que NÃO concorrem (equipe do stand etc.). Ex.: "15, 42, 100-110"
  remover: ""

};
