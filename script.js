// adiciona na var form de dentro do documento o formulario de id form-habits
const form = document.querySelector("#form-habits")

//adiciona na var nlwSetup um novo ? com o form anterior
const nlwSetup = new NLWSetup(form)

// adiciona na var button a button de dentro do header
const button = document.querySelector("header button")

// evento que ao clicar no botao executa a função add
button.addEventListener("click", add)

// evento que quando houver mudança no form executa a função save
form.addEventListener("change", save)

function add() {
  // var today puxa usando a função Date() a data atual
  // .toLocaleDataString converte pra data brasileira
  // .slice define os datas não cortando nada do inicio 0 e cortando 5 do fim pro começo deixando a data sem o ano
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)

  // var dayExists é igual o formulario com a data atual do today
  const dayExists = nlwSetup.dayExists(today)

  //se a data ja existir da um alerta e para a execução
  if (dayExists) {
    alert("Dia já incluso ⚠")
    return
  }

  //senão da uma mensagem de sucesso e adiciona a data com a função addDay da biblioteca da Rocketseat
  alert("Adicionado com sucesso ✅")
  nlwSetup.addDay(today)
}

//função criada para salvar os dados através da chave nomeada NLWSetup@habits o JSON tranformado em string no localStorage
function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}
// const data = {
//   run: ["01-01", "01-02", "01-06", "01-07", "01-08", "01-09"],
//   takePills: ["01-03"],
//   journal: ["01-02"],
// }

// armazena na var data as informações ndo local storage e converte no objeto ou(||) se nao houver info armazena objeto vazio
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}

// adiciona os dados da var data no nlwSetup com a função do JS .setData
nlwSetup.setData(data)

//carrega as informações do nlwSetup
nlwSetup.load()
