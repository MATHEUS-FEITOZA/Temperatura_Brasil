let btnPesquisar = document.getElementById("btnPesquisar");
let cidade = document.getElementById("cidade");
const api = {
    key: "a19fdd96f6ef69878b8ea0b449a4939d",
    base: "https://api.openweathermap.org/data/3.0/",
    lang: "pt_br",
    units: "metric"
}
const Pesquisar_Cidade = () => {
    
    
    console.log(api);
}

btnPesquisar.addEventListener("click", Pesquisar_Cidade);