const nav = document.getElementById("navbar");
nav.innerHTML =  `<img src="img/logo.svg" alt="Logo da página" class="logo">

<input type="checkbox" id="menu-toggle" class="menu-toggle">
<label for="menu-toggle" class="menu-icon">
    <div class="linha-menu-top"></div>
    <div class="linha-menu-center"></div>
    <div class="linha-menu-bottom"></div>
</label>
<nav class="navbar-desktop">
    <a href="index.html"id="ancora-home">Home</a>
    <a href="sobre.html">Sobre</a>
    <a href="contato.html">Contato</a>
    <a href="serviços.html">Serviços</a>
     <ul>
    <li>
        <a href="#">
            <img src="img/facebook.svg" alt="link do facebook" class="redes">
        </a>
    </li>
    <li>
        <a href="#">
            <img src="img/instagram.svg" alt="link do instagram" class="redes">
        </a>
    </li>
    <li>
        <a href="#">
            <img src="img/github.svg" alt="link do github" class="redes">
        </a>
    </li>
</ul>
</nav>

`