var btt1 = document.querySelector('#btt1')
var btt2 = document.querySelector('#btt2')
var btt3 = document.querySelector('#btt3')

var Card1 = document.querySelector('#card1')
var Card2 = document.querySelector('#card2')
var Card3 = document.querySelector('#card3')

var barra11 = document.querySelector('#barra11')
var barra21 = document.querySelector('#barra21')
var barra31 = document.querySelector('#barra31')

var barra12 = document.querySelector('#barra12')
var barra22 = document.querySelector('#barra22')
var barra32 = document.querySelector('#barra32')

var barra13 = document.querySelector('#barra13')
var barra23 = document.querySelector('#barra23')
var barra33 = document.querySelector('#barra33')

var descriProjeto11 = document.querySelector('#DescriProjeto11')
var descriProjeto21 = document.querySelector('#DescriProjeto21')
var descriProjeto31 = document.querySelector('#DescriProjeto31')

var AcessoLink = document.querySelector('#LinkCode')
var AcessoLink2 =document.querySelector('#LinkCode22')
var AcessoLink3 = document.querySelector('#LinkCode32')

function projeto1(){
    Card1.classList.toggle('card1-1')
    Card1.classList.toggle('card1-2')
    barra11.classList.toggle('barra1-1')
    barra11.classList.toggle('barra1-2')
    barra21.classList.toggle('barra2-1')
    barra21.classList.toggle('barra2-2')
    barra31.classList.toggle('barra3-1')
    barra31.classList.toggle('barra3-2')
    descriProjeto11.classList.toggle('DescriProjeto1')
    descriProjeto11.classList.toggle('DescriProjeto2')
    AcessoLink.classList.toggle('LinkCode1')
    AcessoLink.classList.toggle('LinkCode2')
}
btt1.addEventListener('click', projeto1)
window.addEventListener('load', projeto1)

function projeto2(){
    Card2.classList.toggle('card1-1')
    Card2.classList.toggle('card1-2')
    barra12.classList.toggle('barra1-1')
    barra12.classList.toggle('barra1-2')
    barra22.classList.toggle('barra2-1')
    barra22.classList.toggle('barra2-2')
    barra32.classList.toggle('barra3-1')
    barra32.classList.toggle('barra3-2')
    descriProjeto21.classList.toggle('DescriProjeto1')
    descriProjeto21.classList.toggle('DescriProjeto2')
    AcessoLink2.classList.toggle('LinkCode1')
    AcessoLink2.classList.toggle('LinkCode2')
}
btt2.addEventListener('click', projeto2)

function projeto3(){
    Card3.classList.toggle('card1-1')
    Card3.classList.toggle('card1-2')
    barra13.classList.toggle('barra1-1')
    barra13.classList.toggle('barra1-2')
    barra23.classList.toggle('barra2-1')
    barra23.classList.toggle('barra2-2')
    barra33.classList.toggle('barra3-1')
    barra33.classList.toggle('barra3-2')
    descriProjeto31.classList.toggle('DescriProjeto1')
    descriProjeto31.classList.toggle('DescriProjeto2')
    AcessoLink3.classList.toggle('LinkCode1')
    AcessoLink3.classList.toggle('LinkCode2')
}
btt3.addEventListener('click', projeto3)