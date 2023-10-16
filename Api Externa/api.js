import Usuario from "./usuarios.js"

let usuario_elemento = new Usuario()
//mocki.io/v1/ 8f1d fb1a- ecff- 456c- 837a - 204f2 de 94b34
let Conteudo_Pagina = document.getElementById("Conteudo")
fetch("./Pessoas.json")
    .then(Response => Response.json())
    .then(json => {
        usuario_elemento._ListaUsuarios = json
        json.forEach(element => {
            usuario_elemento.CriarUsuario(element.bio,element.name,element.language,element.id,Conteudo_Pagina)
        });
    })
let TipoBusca = "name"
let BuscaAlt =false

let Resposta = setInterval(() => {
    console.log(usuario_elemento._ListaUsuarios)
    clearInterval(Resposta) 

    document.getElementById("LangBusca").addEventListener("click",()=>{
        if(BuscaAlt == false)
        {
            TipoBusca = "language"
            BuscaAlt = true
        }
        else
        {
            TipoBusca = "name"
            BuscaAlt = false
        }
    })

    document.getElementById("busca").addEventListener("click",()=>{
        let ValorBusca = document.getElementById("filtro").value
        let Busca_Feita = false
        Conteudo_Pagina.innerHTML=""
        usuario_elemento._ListaUsuarios.forEach(element => {
            if(element[TipoBusca] == ValorBusca)
            {
                
                usuario_elemento.CriarUsuario(element.bio,element.name,element.language,element.id,Conteudo_Pagina)
                Busca_Feita = true

            }
        });
        if(Busca_Feita == false){
            alert("Usuario digitado não existe")
        }
    })   
}, 90);


