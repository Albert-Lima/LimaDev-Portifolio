var bttToProjects = document.querySelector("#bttToProjects")
var bttToAbout = document.querySelector("#bttToAbout")
var containerLogo = document.querySelector(".container-logo")
var boxAbout = document.querySelector(".box-about")
var AbaProjects = document.querySelector("#presentProject")

var bttToContact = document.querySelector("#buttonToCall")
var Footer = document.querySelector("#footer")

function ScrollProjects(){
    let elementoRect1 = AbaProjects.getBoundingClientRect()
    let centerY = elementoRect1.top
    window.scrollTo({
        top: centerY + window.scrollY,
        behavior: 'smooth'
    })
}
bttToProjects.addEventListener('click', ScrollProjects)

function ScrollAboutMe(){
    let elementoRect1 = boxAbout.getBoundingClientRect()
    let centerY = elementoRect1.top
    window.scrollTo({
        top: centerY + window.scrollY,
        behavior: 'smooth'
    })
}
bttToAbout.addEventListener("click", ScrollAboutMe)

function ScrollTop(){
    let elementoRect1 = containerLogo.getBoundingClientRect()
    let centerY = elementoRect1.top - 100
    window.scrollTo({
        top: centerY + window.scrollY,
        behavior: 'smooth'
    })
}
bttToContact.addEventListener("click", ScrollTop)