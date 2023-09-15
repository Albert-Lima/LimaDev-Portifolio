var Projetos = document.querySelectorAll('.Project1, .Project2')
var btt1 = document.querySelector('#btt1')
var btt2 = document.querySelector('#btt2')
var projetos1 = document.querySelector('#projetos-1')
var projetos2 = document.querySelector('#projetos-2')
var AbaProjetos = document.querySelector('#projetos')

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

var ScrollProjetos = AbaProjetos.scrollLeft

function ScrollRight(){
    projetos1.style.filter = 'opacity(0)'
    projetos1.style.width = '0%'
    projetos1.style.transition = '1s'
    btt2.removeEventListener('click', ScrollRight)
}
btt2.addEventListener('click', ScrollRight)
function ScrollLeft(){
    projetos1.style.filter = 'opacity(1)'
    projetos1.style.width = '50%'
    projetos1.style.transition = '1s'
    btt2.addEventListener('click', ScrollRight)
}
btt1.addEventListener('click', ScrollLeft)