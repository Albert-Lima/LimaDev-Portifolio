//navegação pela página
var bttcontact = document.querySelector('#contact')
var bttProjetos = document.querySelector('#bttProjetos')
var bttServiços =document.querySelector('#bttServiços')
var FormContact = document.querySelector('#FormContact')
var projeto1 = document.querySelector('#projeto1')
var abaServiços = document.querySelector('#ServicesMain')
var bttTop = document.querySelector('#returnTopo')
var navegador = document.querySelector('#navegador')

function ScrollTop(){
    var elementoRectTop = navegador.getBoundingClientRect()
    var centeryTop = elementoRectTop.top + elementoRectTop.height/2 - window.innerHeight/ 2
    window.scrollTo({
        top: centeryTop + window.scrollY,
        behavior: 'smooth'
    })
}
bttTop.addEventListener('click', ScrollTop)

function ScrollContato(){
    var elementoRect1 = FormContact.getBoundingClientRect()
    var centerY1 = elementoRect1.top + elementoRect1.height/ 2 - window.innerHeight/ 2
    window.scrollTo({
        top: centerY1 + window.scrollY,
        behavior: 'smooth'
    })
}
bttcontact.addEventListener('click', ScrollContato)

function ScrollProjetos(){
    var elementoRect2 = projeto1.getBoundingClientRect()
    var centerY2 = elementoRect2.top + elementoRect2.height/ 2 - window.innerHeight/ 2
    window.scrollTo({
        top: centerY2 + window.scrollY,
        behavior: 'smooth'
    })
}
bttProjetos.addEventListener('click', ScrollProjetos)

function ScrollServices(){
    var elementoRect3 = abaServiços.getBoundingClientRect()
    var centerY3 = elementoRect3.top + elementoRect3.height/ 2 - window.innerHeight/ 2
    window.scrollTo({
        top: centerY3 + window.scrollY,
        behavior: 'smooth'
    })
}
bttServiços.addEventListener('click', ScrollServices)

//Aba De Menu para navegar pela página
var bttMenu = document.querySelector('#Menu')
var divselector = document.querySelectorAll('.divselector')
var imgAba = document.querySelector('#imgAba')
function OpenMenu(){
    navegador.style.width = '200px'
    navegador.style.height = '400px'
    imgAba.style.display = 'none'
    navegador.style.backgroundColor = '#1e1825'
    navegador.style.display = 'flex'
    navegador.style.flexDirection = 'column'
    navegador.style.justifyContent = 'space-evenly'
    navegador.style.position = 'fixed'
    navegador.style.top = '10px'
    navegador.style.right = '10px'
    navegador.style.transition = '0.2s'
    bttProjetos.style.opacity = '1'
    bttcontact.style.opacity = '1'
    bttServiços.style.opacity = '1'
    function CloseMenu(){
        navegador.removeAttribute('style')
        imgAba.removeAttribute('style')
        bttProjetos.removeAttribute('style')
        bttcontact.removeAttribute('style')
        bttServiços.removeAttribute('style')
        bttMenu.addEventListener('click', OpenMenu)
    }
    bttMenu.removeEventListener('click', OpenMenu)
    navegador.addEventListener('mouseleave', CloseMenu)
}
bttMenu.addEventListener('click', OpenMenu)


var bttVerMais = document.querySelector('#SeeMore')
bttVerMais.addEventListener('click', ()=>{
    alert('Mais projetos em breve')
})
/*
var projeto5 = document.querySelector('#projeto5')
function MostrarProjetos(){
    var largura = window.innerWidth
    if( largura < 900){
        projeto5.style.flexDirection = 'column' 
    }else{
        projeto5.style.flexDirection = 'row'
    }
    projeto5.style.display = 'flex'
    projeto5.style.justifyContent = 'space-evenly'
    projeto5.style.alignItems = 'center'
    bttVerMais.innerHTML = 'Ver Menos'
    bttVerMais.removeEventListener('click', MostrarProjetos)
    bttVerMais.addEventListener('click', OcultarProjetos)
    function OcultarProjetos(){
        projeto5.removeAttribute('style')
        bttVerMais.innerHTML = 'Ver Mais'
        bttVerMais.removeEventListener('click', OcultarProjetos)
        bttVerMais.addEventListener('click', MostrarProjetos)
    }
}
bttVerMais.addEventListener('click', MostrarProjetos)*/