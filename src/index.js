let btnPesquisar = document.getElementById("btnPesquisar");

const CarregarPagina = async() => {
    let cidade = "Sao Paulo";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=${api.units}&APPID=${api.key}`;
    let promessa = await fetch(url);
    let dados = await promessa.json();
    console.log(dados);
    PreencherDados(dados);
    let caixas = document.querySelectorAll(".caixa_hidden");
    caixas.forEach(item => {
        item.classList.toggle("hidden");
    });
    document.getElementById("spinner_1").classList.toggle("hidden");// loading
}

const api = {
    key: "7b1d9d53c7a77534cf109f2d7295795c",
    //base: "https://api.openweathermap.org/data/2.5/",
    lang: "pt_br",
    units: "metric"
}
const Pesquisar_Cidade = async() => {
    document.getElementById("spinner").classList.toggle("hidden"); // loading
    let cidade = document.getElementById("cidade").value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=${api.units}&APPID=${api.key}`;
    let promessa = await fetch(url);
    let dados = await promessa.json();
    PreencherDados(dados);
    document.getElementById("spinner").classList.toggle("hidden");// loading
}

const PreencherDados = (dados) => {
    let tempAtual = document.getElementById("tempAtual").innerHTML = dados.main.temp + " °C"; 
    let locAtual = document.getElementById("locAtual").innerHTML = dados.name;
    let tempMin = document.getElementById("tempMin").innerHTML = dados.main.temp_min + " °C"; 
    let tempMax = document.getElementById("tempMax").innerHTML = dados.main.temp_max + " °C";
}

btnPesquisar.addEventListener("click", Pesquisar_Cidade);
window.addEventListener("load",CarregarPagina);