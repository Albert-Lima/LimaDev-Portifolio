//navegação pela página
var bttcontact = document.querySelector('#Contact')
var bttProjetos = document.querySelector('#bttProjetos')
var bttServiços =document.querySelector('#bttServiços')
var FormContact = document.querySelector('#FormContact')
var Projeto1 = document.querySelector('#projeto1')
var abaServiços = document.querySelector('#ServicesMain')
var bttTop = document.querySelector('#returnTopo')
var navegador = document.querySelector('#navegador')
var perfil = document.querySelector('#imagem-perfil')

function ScrollTop(){
    var elementoRectTop = bttProjetos.getBoundingClientRect()
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
    var elementoRect2 = Projeto1.getBoundingClientRect()
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
bttMenu.addEventListener('click', ()=>{
    bttMenu.classList.toggle('Menu1')
    bttMenu.classList.toggle('Menu2')

    navegador.classList.toggle('Navegador1')
    navegador.classList.toggle('Navegador2')

    bttProjetos.classList.toggle('botao-normal1')
    bttProjetos.classList.toggle('botao-normal2')

    bttServiços.classList.toggle('botao-normal1')
    bttServiços.classList.toggle('botao-normal2')

    bttcontact.classList.toggle('botao-normal1')
    bttcontact.classList.toggle('botao-normal2')
})

var bttVerMais = document.querySelector('#SeeMore')
bttVerMais.addEventListener('click', ()=>{
    alert('Mais projetos em breve')
})