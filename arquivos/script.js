//navegação pela página
var bttcontact = document.querySelector('#Contact')
var bttProjetos = document.querySelector('#bttProjetos')
var bttServiços =document.querySelector('#bttServiços')
var FormContact = document.querySelector('#FormContact')
var Projeto1 = document.querySelector('#projeto1')
var abaServiços = document.querySelector('#ServicesMain')
var bttTop = document.querySelector('#returnTopo')
var navegador = document.querySelector('#navegador')
var header = document.querySelector("#header")
var perfil = document.querySelector('#imagem-perfil')


function ScrollContato(){
    var elementoRect1 = FormContact.getBoundingClientRect()
    var centerY1 = elementoRect1.top + elementoRect1.height/ 2 - window.innerHeight/ 2
    window.scrollTo({
        top: centerY1 + window.scrollY,
        behavior: 'smooth'
    })
}
bttcontact.addEventListener('click', ScrollContato)

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






//enviando mensagem de email:
const emailCamp = document.querySelector("#CampoEmail").value
const nameCamp = document.querySelector("#CampoName").value
const textCamp = document.querySelector("#textoEnvio").value

if( emailCamp && nameCamp && textCamp){
    E-mail.send({
        Host: "smtp.elasticemail.com",
        Username: "albertsousalima@gmail.com",
        Password: "40888DAE4F9AFB3585FD0CC3B20782DF4056",
        To: 'them@website.com',
        From: "albertsousalima@gmail.com",
        Subject: nameCamp + " enviou uma mensagem",
        Body: "conteúdo: \n \n"+ textCamp
    }).then(
        window.alert("mensagem enviada com sucesso")
    )
}else{
    window.alert("preencha todos os campos!")
}
