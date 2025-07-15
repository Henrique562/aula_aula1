const urlpath = window. location. pathname;
const ancora = document.getElementById("ancora-home")
     if(urlpath == '/index.html'){
        ancora.style.display = 'none';
        ancora.classiList.add("ocultar")
     }else{
        ancora.classiList.remove("ocultar")
    }