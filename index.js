let btnPesquisar = document.getElementById("btnPesquisar");



const api = {
    key: "7b1d9d53c7a77534cf109f2d7295795c",
    //base: "https://api.openweathermap.org/data/2.5/",
    lang: "pt_br",
    units: "metric"
}
const Pesquisar_Cidade = async() => {

    let cidade = document.getElementById("cidade").value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=${api.units}&APPID=${api.key}`;
    let promessa = await fetch(url);
    let dados = await promessa.json();
    PreencherDados(dados);
    console.log(dados);
}

const PreencherDados = (dados) => {
    let tempAtual = document.getElementById("tempAtual").innerHTML = dados.main.temp; 
    let locAtual = document.getElementById("locAtual").innerHTML = dados.name;
}

btnPesquisar.addEventListener("click", Pesquisar_Cidade);