var Projetos = document.querySelectorAll('.Project1, .Project2')
var btt1 = document.querySelector('#btt1')
var btt2 = document.querySelector('#btt2')
var projetos1 = document.querySelector('#projetos-1')
var projetos2 = document.querySelector('#projetos-2')
var AbaProjetos = document.querySelector('#projetos')
//funções para interação AbaProjetos
function Opacity1(){
    i = 1
    while( i >= 1 && i <= 6){
        Projetos[i].style.filter = 'brightness(0.5)'
        Projetos[i].style.transition = '0.5s'
        i++
    }
}
function Opacity2(){
    i = 0
    while(i >= 0 && i <=6){
        Projetos[i].style.filter = 'brightness(0.5)'
        Projetos[i].style.transition = '0.5s'
        i++
        Projetos[1].style.filter = 'brightness(1)'
    }
}
function Opacity3(){
    i = 0
    while(i >= 0 && i <=6){
        Projetos[i].style.filter = 'brightness(0.5)'
        Projetos[i].style.transition = '0.5s'
        i++
        Projetos[2].style.filter = 'brightness(1)'
    }
}
function Opacity4(){
    i = 0
    while(i >= 0 && i <=6){
        Projetos[i].style.filter = 'brightness(0.5)'
        Projetos[i].style.transition = '0.5s'
        i++
        Projetos[3].style.filter = 'brightness(1)'
    }
}
function Opacity5(){
    i = 0
    while(i >= 0 && i <=6){
        Projetos[i].style.filter = 'brightness(0.5)'
        Projetos[i].style.transition = '1s'
        i++
        Projetos[4].style.filter = 'brightness(1)'
    }
}
function Opacity6(){
    i = 0
    while(i >= 0 && i <=6){
        Projetos[i].style.filter = 'brightness(0.5)'
        Projetos[i].style.transition = '1s'
        i++
        Projetos[5].style.filter = 'brightness(1)'
    }
}
function NoOpacity(){
    i = 0
    while( i >= 0 && i <= 6){
        Projetos[i].style.filter = 'brightness(1)'
        Projetos[i].style.transition = '1s'
        i++
    }
}
Projetos[0].addEventListener('mouseenter', Opacity1)
Projetos[0].addEventListener('mouseleave', NoOpacity)
Projetos[1].addEventListener('mouseenter', Opacity2)
Projetos[1].addEventListener('mouseleave', NoOpacity)
Projetos[2].addEventListener('mouseenter', Opacity3)
Projetos[2].addEventListener('mouseleave', NoOpacity)
Projetos[3].addEventListener('mouseenter', Opacity4)
Projetos[3].addEventListener('mouseleave', NoOpacity)
Projetos[4].addEventListener('mouseenter', Opacity5)
Projetos[4].addEventListener('mouseleave', NoOpacity)
Projetos[5].addEventListener('mouseenter', Opacity6)
Projetos[5].addEventListener('mouseleave', NoOpacity)
function ScrollRight(){
    projetos1.style.filter = 'opacity(0)'
    projetos1.style.width = '0%'
    projetos1.style.transition = '1s'
}
btt2.addEventListener('click', ScrollRight)
function ScrollRightBtt(){
    projetos1.style.filter = 'opacity(0)'
    projetos1.style.width = '0%'
    projetos1.style.transition = '1s'
    bttmais.style.display = 'none'
    bttmenos.style.display = 'block'
    bttmais.removeEventListener('click', ScrollRightBtt)
}
bttmais.addEventListener('click', ScrollRightBtt)
function ScrollLeft(){
    projetos1.style.filter = 'opacity(1)'
    projetos1.style.width = '50%'
    projetos1.style.transition = '1s'
    btt2.addEventListener('click', ScrollRight)
}
function ScrollLeftBtt(){
    projetos1.style.filter = 'opacity(1)'
    projetos1.style.width = '50%'
    projetos1.style.transition = '1s'
    bttmenos.style.display = 'none'
    bttmais.removeAttribute('style')
    bttmais.addEventListener('click', ScrollRightBtt)
    
}
var bttmenos = document.querySelector('#bttmenos')
btt1.addEventListener('click', ScrollLeft)
bttmenos.addEventListener('click', ScrollLeftBtt)
//scroll nos botes de navegação
var bttSobreMim = document.querySelector('#bttSobreMim')
var periodos = document.querySelector('#periodos')
var bttProjetos = document.querySelector('#bttProjetos')
var perfil = document.querySelector('#perfil')
var topo = document.querySelector('#btttopo')
function ScrollSobreMim(){
    var SobreRect = periodos.getBoundingClientRect()
    var centerY1 = SobreRect.top + SobreRect.height / 2 - window.innerHeight / 2
    window.scrollTo({
        top: centerY1 + window.scrollY,
        behavior: 'smooth'
    })
}
function ScrollProjetos(){
    var ProjetosRect = AbaProjetos.getBoundingClientRect()
    var centerY2 = ProjetosRect.top + ProjetosRect.height / 2 - window.innerHeight / 2
    window.scrollTo({
        top: centerY2 + window.scrollY,
        behavior: 'smooth'
    })
}
function ScrollTop(){
    var perfilRect = perfil.getBoundingClientRect()
    var centerY3 = perfilRect.top + perfil.height / 2 - window.innerHeight / 2
    window.scrollTo({
        top: centerY3 + window.scrollY,
        behavior: 'smooth'
    })
}
bttSobreMim.addEventListener('click', ScrollSobreMim)
bttProjetos.addEventListener('click', ScrollProjetos)
topo.addEventListener('click', ScrollTop)
//abre as Abas Sobre mim no click
var Dezembro = document.querySelector('#dezembro')
var p1 = document.querySelector('#p1')
var Fevereiro = document.querySelector('#fevereiro')
var p2 = document.querySelector('#p2')
var Junho = document.querySelector('#junho')
var p3 = document.querySelector('#p3')
var periodo1 = document.querySelector('#periodo-1')
var periodo2 = document.querySelector('#periodo-2')
var periodo3 = document.querySelector('#periodo-3')
function Aba1(){
    periodo1.style.transition = '0.5s'
    periodo1.style.height = '300px'
    p1.style.display = 'block'
    Dezembro.removeEventListener('click', Aba1)
    function recolherAba1(){
        periodo1.style.height = '100px'
        p1.style.display = 'none'
        Dezembro.removeEventListener('click', recolherAba1)
        Dezembro.addEventListener('click', Aba1)
    }
    Dezembro.addEventListener('click', recolherAba1)
}
Dezembro.addEventListener('click', Aba1)
function Aba2(){
    periodo2.style.transition = '0.5s'
    periodo2.style.height = '300px'
    p2.style.display = 'block'
    Fevereiro.removeEventListener('click', Aba2)
    function recolherAba2(){
        periodo2.style.height = '100px'
        p2.style.display = 'none'
        Fevereiro.removeEventListener('click', recolherAba2)
        Fevereiro.addEventListener('click', Aba2)
    }
    Fevereiro.addEventListener('click', recolherAba2)
}
Fevereiro.addEventListener('click', Aba2)
function Aba3(){
    periodo3.style.transition = '0.5s'
    periodo3.style.height = '300px'
    p3.style.display = 'block'
    Junho.removeEventListener('click', Aba3)
    function recolherAba3(){
        periodo3.style.height = '100px'
        p3.style.display = 'none'
        Junho.removeEventListener('click', recolherAba3)
        Junho.addEventListener('click', Aba3)
    }
    Junho.addEventListener('click', recolherAba3)
}
Junho.addEventListener('click', Aba3)
//estilização do navegador direito em Menu
var certificações = document.querySelector('#certificações')
var navLeft = document.querySelector('#navegador-esquerdo')
var largura = window.innerWidth
var bttmenu = document.querySelector('#Menu')
function AbrirMenu(){
    bttSobreMim.style.display = 'block'
    bttProjetos.style.display =  'block'
    certificações.style.display = 'block'
    navLeft.style.width = '200px'
    navLeft.style.height = '350px'
    navLeft.style.transition = '0.2s'
    navLeft.style.borderRadius = '15px'
    navLeft.style.backdropFilter = 'blur(15px)'
    bttmenu.removeEventListener('click', AbrirMenu)
    function FecharMenu(){
            bttmenu.removeEventListener('click', FecharMenu)
            bttmenu.addEventListener('click', AbrirMenu)
            navLeft.removeAttribute('style')
            bttProjetos.removeAttribute('style')
            bttSobreMim.removeAttribute('style')
            certificações.removeAttribute('style')
    }
    bttmenu.addEventListener('click', FecharMenu)
}
bttmenu.addEventListener('click', AbrirMenu)