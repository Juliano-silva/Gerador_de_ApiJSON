var array = []
var Conteudo = []
function Submit() {
    if (localStorage.ApiCreate) {
        array = JSON.parse(localStorage.getItem("ApiCreate"))
    }
    var Name = document.getElementById("name").value
    var Description = document.getElementById("Conteudo").value
    var Data = new Date().getTime().toString();
    array.push({
        Id: array.length,
        Key: Data,
        Name: Name,
        Description: Description,
    })
    localStorage.setItem("ApiCreate", JSON.stringify(array))
}
var InputsAdd = document.createElement("input")
var Texto = document.createElement("textarea")
var inputImg = document.createElement("input")
var Buttons = document.createElement("button")
function Add() {
    InputsAdd.placeholder = "Insira o Titulo"
    Texto.placeholder = "Insira o texto"
    inputImg.placeholder = "Insira a imagem"
    InputsAdd.id = "News"
    Texto.id = "Texti"
    inputImg.id = "InptImg"
    Buttons.innerText = "Enviar"
    ConteudoAdicionar.append(InputsAdd, Texto, inputImg, Buttons)
    Buttons.addEventListener("click", AdiconarInput)
}

var Valores = localStorage.getItem("ApiCreate")
var selects = document.createElement("select")
var Key = localStorage.getItem("ApiCreate")
var JSonKey = JSON.parse(Key)
selects.addEventListener("change", Carregador)
for (var i = 0; i < JSonKey.length; i++) {
    var options = document.createElement("option")
    options.innerText = JSonKey[i].Key
    options.value = JSonKey[i].Key
    selects.append(options)
    ConteudoAdicionar.append(selects)
}
function AdiconarInput() {
    if (localStorage.ConteudoAPI) {
        Conteudo = JSON.parse(localStorage.getItem("ConteudoAPI"))
    }
    Conteudo.push({
        Key: selects.value,
        id: Conteudo.length,
        Name: document.getElementById("News").value,
        Texto: document.getElementById("Texti").value,
        InptImg: document.getElementById("InptImg").value

    })
    location.reload()
    localStorage.setItem("ConteudoAPI", JSON.stringify(Conteudo))
}
var Key = localStorage.getItem("ApiCreate")
var Key2 = localStorage.getItem("ConteudoAPI")
var JSonKey = JSON.parse(Key)
var JSonKey2 = JSON.parse(Key2)
var Filtrar = JSonKey.filter(JSonKey => (JSonKey.Key == selects.value))
var Titulo = document.createElement("h1")
var Comentario = document.createElement("div")
function Carregador() {
    var Html = ''
    var Filtrar = JSonKey.filter(JSonKey => (JSonKey.Key == selects.value))
    var Filtrar2 = JSonKey2.filter(JSonKey2 => (JSonKey2.Key == selects.value))
    for (var i = 0; i < Filtrar2.length; i++) {
        Html += `
          <h2> ${Filtrar2[i].Name} </h2>
          <p> ${Filtrar2[i].Texto} </p>
          <img src=${Filtrar2[i].InptImg}>
        `
    }
    Comentario.innerHTML = Html
    Titulo.innerHTML = Filtrar.map((x) => " " + x.Name + " ")
    document.getElementById("TituloName").innerText = Filtrar.map((x) => " " + x.Name + " ")
    Corpo_API.append(Titulo, Comentario)
    var Conteudo = {
        "Id": Filtrar[0].Id,
        "Key": Filtrar[0].Key,
        "Name": Filtrar[0].Name,
        "Description": Filtrar[0].Description,
        "Conteudos":{
                "Lista":Filtrar2
            }
      }
    document.getElementById("JsonVersion").innerHTML = JSON.stringify(Conteudo)
}
var Html = ''
var Filtrar = JSonKey.filter(JSonKey => (JSonKey.Key == selects.value))
var Filtrar2 = JSonKey2.filter(JSonKey2 => (JSonKey2.Key == selects.value))
for (var i = 0; i < Filtrar2.length; i++) {
    Html += `
      <h2> ${Filtrar2[i].Name} </h2>
      <p> ${Filtrar2[i].Texto} </p>
      <img src=${Filtrar2[i].InptImg}>
    `
}
Comentario.innerHTML = Html
Titulo.innerHTML = Filtrar.map((x) => " " + x.Name + " ")
document.getElementById("TituloName").innerText = Filtrar.map((x) => " " + x.Name + " ")
Corpo_API.append(Titulo, Comentario)
