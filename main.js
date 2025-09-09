// main.js
// Importa o array de questões pronto
import questoes from "./questoes_poo.js";

/** =========================
 *  Estado e utilitários
 *  ========================= */
let perguntas = [...questoes]; // poderá crescer com "nova questão"
let respostas = {};            // { [idQuestao]: indiceMarcado }
const LS_KEY = "quiz_poo_rascunho_v1";

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/** =========================
 *  Seletores do DOM
 *  ========================= */
const $questions   = $("#questions");
const $btnCorrigir = $("#btnCorrigir");
const $btnRefazer  = $("#btnRefazer");
const $btnRevisar  = $("#btnRevisar");
const $btnSalvar   = $("#btnSalvar");

const $scoreCard   = $("#scoreCard");
const $scoreLine   = $("#scoreLine");
const $scoreExtra  = $("#scoreExtra");

/* Form "Nova questão" */
const $btnToggleForm   = $("#btnToggleForm");
const $formNew         = $("#newQuestionForm");
const $fqEnunciado     = $("#fq-enunciado");
const $fqTipo          = $("#fq-tipo");
const $fqMcArea        = $("#fq-mc-area");
const $fqBoolArea      = $("#fq-bool-area");
const $fqOpcoesWrap    = $("#fq-opcoes");
const $fqAddOpcao      = $("#fq-add-opcao");
const $fqBoolCorreta   = $("#fq-bool-correta");
const $fqObrigatoria   = $("#fq-obrigatoria");
const $fqExplicacao    = $("#fq-explicacao");
const $fqCancelar      = $("#fq-cancelar");

/** =========================
 *  Persistência (rascunho)
 *  ========================= */
function salvarRascunho() {
  localStorage.setItem(LS_KEY, JSON.stringify(respostas));
}

function carregarRascunho() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) respostas = JSON.parse(raw) || {};
  } catch {}
}

/** =========================
 *  Renderização
 *  ========================= */
function limparContainer() {
  $questions.innerHTML = "";
}

function criarCardQuestao(q, index) {
  const card = document.createElement("section");
  card.className = "card";
  card.dataset.qid = q.id;

  const meta = document.createElement("div");
  meta.className = "q-meta";
  meta.textContent = `Questão ${index + 1}${q.obrigatoria ? " • Obrigatória" : ""}`;
  card.appendChild(meta);

  const h2 = document.createElement("h2");
  h2.textContent = q.enunciado;
  h2.style.marginTop = "6px";
  card.appendChild(h2);

  // Área de alternativas
  const alts = document.createElement("div");

  if (q.tipo === "boolean") {
    // 0 = Verdadeiro, 1 = Falso
    ["Verdadeiro", "Falso"].forEach((txt, idx) => {
      alts.appendChild(criarOpcao(q.id, idx, txt));
    });
  } else {
    // "unica"
    q.alternativas.forEach((txt, idx) => {
      alts.appendChild(criarOpcao(q.id, idx, txt));
    });
  }

  card.appendChild(alts);

  // Feedback (preenchido ao corrigir)
  const feedback = document.createElement("div");
  feedback.className = "feedback";
  feedback.style.display = "none";
  card.appendChild(feedback);

  return card;
}

function criarOpcao(qid, idx, texto) {
  const label = document.createElement("label");
  label.className = "option";

  const input = document.createElement("input");
  input.type = "radio";
  input.name = qid;
  input.value = String(idx);

  // Carrega marcações do rascunho, se houver
  if (String(respostas[qid]) === String(idx)) {
    input.checked = true;
  }

  input.addEventListener("change", () => {
    respostas[qid] = idx;
    salvarRascunho();
  });

  label.appendChild(input);
  label.appendChild(document.createTextNode(texto));
  return label;
}

function renderizarQuestoes() {
  limparContainer();
  perguntas.forEach((q, i) => {
    const card = criarCardQuestao(q, i);
    $questions.appendChild(card);
  });
}

/** =========================
 *  Correção e UI de resultado
 *  ========================= */
function corrigir() {
  let certas = 0;
  let obrigatoriasSemResposta = 0;
  let primeiraErrada = null;

  perguntas.forEach((q) => {
    const card = $(`.card[data-qid="${q.id}"]`);
    const labels = $$(`label.option`, card);
    const fb = $(`.feedback`, card);

    // reset de estilos
    labels.forEach(l => l.classList.remove("is-correct", "is-wrong"));
    fb.style.display = "none";
    fb.classList.remove("correct", "wrong");

    const marcado = respostas[q.id];
    if (q.obrigatoria && (marcado === undefined || marcado === null)) {
      obrigatoriasSemResposta++;
    }

    if (marcado !== undefined && Number(marcado) === Number(q.correta)) {
      certas++;
      // marca opção correta
      const lab = labels[Number(q.correta)];
      if (lab) lab.classList.add("is-correct");
      if (q.explicacao) {
        fb.textContent = q.explicacao;
        fb.classList.add("correct");
        fb.style.display = "block";
      }
    } else {
      // marcou errado ou não marcou
      if (marcado !== undefined) {
        const labMarcada = labels[Number(marcado)];
        if (labMarcada) labMarcada.classList.add("is-wrong");
      }
      const labCorreta = labels[Number(q.correta)];
      if (labCorreta) labCorreta.classList.add("is-correct");

      if (!primeiraErrada) primeiraErrada = card;

      if (q.explicacao) {
        fb.textContent = q.explicacao;
        fb.classList.add("wrong");
        fb.style.display = "block";
      }
    }
  });

  const total = perguntas.length;
  const pct = Math.round((certas / total) * 100);

  $scoreLine.innerHTML = `Acertos: <span class="badge ${pct >= 70 ? "ok" : "bad"}">${certas}/${total} (${pct}%)</span>`;
  $scoreExtra.textContent = obrigatoriasSemResposta
    ? `⚠ Você deixou ${obrigatoriasSemResposta} questão(ões) obrigatória(s) em branco.`
    : `Ótimo! Todas as obrigatórias foram respondidas.`;

  $scoreCard.style.display = "block";

  // Botão revisar rola até a primeira errada
  $btnRevisar.onclick = () => {
    if (primeiraErrada) primeiraErrada.scrollIntoView({ behavior: "smooth", block: "center" });
  };
}

function refazer() {
  respostas = {};
  salvarRascunho();
  $scoreCard.style.display = "none";
  renderizarQuestoes();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/** =========================
 *  Formulário: Nova questão
 *  ========================= */
function toggleForm(show) {
  $formNew.style.display = show ? "block" : "none";
}

function resetForm() {
  $fqEnunciado.value = "";
  $fqTipo.value = "unica";
  $fqObrigatoria.checked = true;
  $fqExplicacao.value = "";
  $fqBoolCorreta.value = "0";
  $fqBoolArea.style.display = "none";
  $fqMcArea.style.display = "block";
  montarEditorOpcoesMC(); // reseta com 2 opções
}

function montarEditorOpcoesMC() {
  $fqOpcoesWrap.innerHTML = "";

  // cria duas opções iniciais
  for (let i = 0; i < 2; i++) {
    adicionarOpcaoEditor("");
  }
  // por padrão, primeira correta
  const firstRadio = $(`input[name="fq-correta"][value="0"]`, $fqOpcoesWrap);
  if (firstRadio) firstRadio.checked = true;
}

function adicionarOpcaoEditor(texto = "") {
  const idx = $$(".fq-opcao", $fqOpcoesWrap).length;

  const row = document.createElement("div");
  row.className = "fq-opcao";

  const rb = document.createElement("input");
  rb.type = "radio";
  rb.name = "fq-correta";
  rb.value = String(idx);
  rb.title = "Marcar como correta";

  const tx = document.createElement("input");
  tx.type = "text";
  tx.placeholder = `Alternativa ${idx + 1}`;
  tx.value = texto;

  const rm = document.createElement("button");
  rm.type = "button";
  rm.className = "fq-remove";
  rm.textContent = "Remover";
  rm.onclick = () => {
    row.remove();
    // reindexa valores dos radios para manter sequência
    $$(".fq-opcao", $fqOpcoesWrap).forEach((el, i) => {
      const r = $("input[type=radio]", el);
      const t = $("input[type=text]", el);
      r.value = String(i);
      t.placeholder = `Alternativa ${i + 1}`;
    });
  };

  row.appendChild(rb);
  row.appendChild(tx);
  row.appendChild(rm);
  $fqOpcoesWrap.appendChild(row);
}

/** =========================
 *  Eventos de UI
 *  ========================= */
$btnCorrigir.addEventListener("click", corrigir);
$btnRefazer.addEventListener("click", refazer);
$btnSalvar.addEventListener("click", () => {
  salvarRascunho();
  alert("Rascunho salvo no navegador ✅");
});

$btnToggleForm.addEventListener("click", () => {
  const show = $formNew.style.display !== "block";
  toggleForm(show);
  if (show) resetForm();
});

$fqTipo.addEventListener("change", () => {
  const isBool = $fqTipo.value === "boolean";
  $fqBoolArea.style.display = isBool ? "block" : "none";
  $fqMcArea.style.display = isBool ? "none" : "block";
  if (!isBool) montarEditorOpcoesMC();
});

$fqAddOpcao.addEventListener("click", () => adicionarOpcaoEditor());

$fqCancelar.addEventListener("click", () => {
  toggleForm(false);
});

/* Submit do form de nova questão */
$formNew.addEventListener("submit", (e) => {
  e.preventDefault();

  const enunciado = $fqEnunciado.value.trim();
  if (!enunciado) {
    alert("Digite o enunciado da questão.");
    return;
  }

  const tipo = $fqTipo.value; // "unica" | "boolean"
  const obrigatoria = !!$fqObrigatoria.checked;
  const explicacao = $fqExplicacao.value.trim();

  let alternativas = [];
  let correta = 0;

  if (tipo === "boolean") {
    alternativas = ["Verdadeiro", "Falso"];
    correta = Number($fqBoolCorreta.value);
  } else {
    const linhas = $$(".fq-opcao", $fqOpcoesWrap);
    if (linhas.length < 2) {
      alert("Crie pelo menos duas alternativas.");
      return;
    }
    alternativas = linhas.map((el) => $("input[type=text]", el).value.trim());
    if (alternativas.some(a => !a)) {
      alert("Preencha todas as alternativas.");
      return;
    }
    const marcada = $("input[name='fq-correta']:checked", $fqOpcoesWrap);
    if (!marcada) {
      alert("Marque qual alternativa é a correta.");
      return;
    }
    correta = Number(marcada.value);
  }

  // Cria ID simples e único
  const novoId = `q${Date.now()}`;

  const novaQuestao = {
    id: novoId,
    tipo,
    enunciado,
    obrigatoria,
    alternativas,
    correta,
    ...(explicacao ? { explicacao } : {})
  };

  perguntas.push(novaQuestao);
  toggleForm(false);
  // mantém respostas intactas e re-renderiza incluindo a nova
  renderizarQuestoes();
  // rola até a nova questão
  const $novo = $(`.card[data-qid="${novoId}"]`);
  if ($novo) $novo.scrollIntoView({ behavior: "smooth", block: "center" });
});

/** =========================
 *  Boot
 *  ========================= */
(function init() {
  carregarRascunho();
  renderizarQuestoes();
  $scoreCard.style.display = "none";
})();
