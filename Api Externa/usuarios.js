class Usuario{
    _ListaUsuarios = []
    CriarUsuario(bio,name,language,id,elemento){
        elemento.innerHTML+="<div class='card'><h1>"+
        ""+name+"</h1><h3>"+id+"</h3>"+
        "<h4>"+bio+"</h4>"+
        "<h4>"+language+"</h4>"
    }
}

export default Usuario