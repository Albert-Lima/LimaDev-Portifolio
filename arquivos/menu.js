var bttMenu = document.querySelector("#bttMenu")
var abaMenu = document.querySelector(".menu")
var barraMenu1 = document.querySelector("#barra-1")
var barraMenu2 = document.querySelector("#barra-2")
var barraMenu3 = document.querySelector('#barra-3')
var navButtons = document.querySelectorAll(".nav-buttons")
var copyTop = document.querySelector(".copyTop")
var menuMensage = document.querySelector(".menuMensage")
var menuMensageButton = document.querySelector("#menuMensageButton")

function alternarBotaoMenu() {
    if (menuMensageButton.innerHTML === "fechar") {
        menuMensageButton.innerHTML = "menu";
    } else {
        menuMensageButton.innerHTML = "fechar";
    }
}

function OpenMenu(){
    abaMenu.classList.toggle("menu")
    abaMenu.classList.toggle('menuOpen')

    menuMensage.classList.toggle("menuMensage")
    menuMensage.classList.toggle("menuMensageOpen")

    bttMenu.classList.toggle('bttMenu')
    bttMenu.classList.toggle("bttMenu2")

    copyTop.classList.toggle("copyTop")
    copyTop.classList.toggle("copyTop2")

    menuMensageButton.style.color = 'white'
    alternarBotaoMenu()

    barraMenu1.style.backgroundColor = 'white'
    barraMenu1.classList.toggle("barra-menu11")
    barraMenu1.classList.toggle("barra-menu12")

    barraMenu2.style.backgroundColor = "white"
    barraMenu2.classList.toggle("barra-menu21")
    barraMenu2.classList.toggle("barra-menu22")

    barraMenu3.style.backgroundColor = 'white'
    barraMenu3.classList.toggle("barra-menu31")
    barraMenu3.classList.toggle("barra-menu32")

    for(i = 0; i <= 2; i++){
        navButtons[i].classList.toggle("nav-buttons")
        navButtons[i].classList.toggle("nav-Visible")
    }
    
    bttMenu.addEventListener("click", CloseMenu)
    bttMenu.removeEventListener("click", OpenMenu)
    function CloseMenu(){
        barraMenu1.removeAttribute('style')
        barraMenu3.removeAttribute('style')
        menuMensageButton.removeAttribute('style')
        alternarBotaoMenu()

        copyTop.classList.toggle("copyTop")
        copyTop.classList.toggle("copyTop2")
        
        menuMensage.classList.toggle("menuMensage")
        menuMensage.classList.toggle("menuMensageOpen")
        
        abaMenu.classList.toggle("menu")
        abaMenu.classList.toggle('menuOpen')

        bttMenu.classList.toggle('bttMenu')
        bttMenu.classList.toggle("bttMenu2")

        for(i = 0; i <= 2; i++){
            navButtons[i].classList.toggle("nav-buttons")
            navButtons[i].classList.toggle("nav-Visible")
        }

        bttMenu.addEventListener("click", OpenMenu)
        bttMenu.removeEventListener("click", CloseMenu)
    }
}
bttMenu.addEventListener("click", OpenMenu)
