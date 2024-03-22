var bttMenu = document.querySelector("#bttMenu")
var abaMenu = document.querySelector(".menu")
var barraMenu = document.querySelectorAll(".barra-menu")
var navButtons = document.querySelectorAll(".nav-buttons")
var copyTop = document.querySelector(".copyTop")
var menuMensage = document.querySelector(".menuMensage")
var menuMensageButton = document.querySelector("#menuMensageButton")

function OpenMenu(){
    abaMenu.classList.toggle("menu")
    abaMenu.classList.toggle('menuOpen')

    menuMensage.classList.toggle("menuMensage")
    menuMensage.classList.toggle("menuMensageOpen")

    bttMenu.classList.toggle('bttMenu')
    bttMenu.classList.toggle("bttMenu2")

    copyTop.classList.toggle("copyTop")
    copyTop.classList.toggle("copyTop2")

    menuMensageButton.innerHTML = "fechar"

    for(i = 0; i <= 2; i++){
        navButtons[i].classList.toggle("nav-buttons")
        navButtons[i].classList.toggle("nav-Visible")
    }
    //animações para o botão de menu:
        for(i = 0; i <= 2; i++){
            barraMenu[i].style.backgroundColor = "white"
        }
        barraMenu[0].style.rotate = "-45deg"
        barraMenu[0].style.marginBottom = "-3px"
        barraMenu[1].style.display = "none"
        barraMenu[2].style.rotate = "45deg"
    
    bttMenu.addEventListener("click", CloseMenu)
    bttMenu.removeEventListener("click", OpenMenu)


    function CloseMenu(){
        copyTop.classList.toggle("copyTop")
        copyTop.classList.toggle("copyTop2")
        
        menuMensage.classList.toggle("menuMensage")
        menuMensage.classList.toggle("menuMensageOpen")
        
        abaMenu.classList.toggle("menu")
        abaMenu.classList.toggle('menuOpen')

        bttMenu.classList.toggle('bttMenu')
        bttMenu.classList.toggle("bttMenu2")

        menuMensageButton.innerHTML = "menu"
        for(i = 0; i <= 2; i++){
            barraMenu[i].removeAttribute('style')
        }
        for(i = 0; i <= 2; i++){
            navButtons[i].classList.toggle("nav-buttons")
            navButtons[i].classList.toggle("nav-Visible")
        }

        bttMenu.addEventListener("click", OpenMenu)
        bttMenu.removeEventListener("click", CloseMenu)
    }
}
bttMenu.addEventListener("click", OpenMenu)