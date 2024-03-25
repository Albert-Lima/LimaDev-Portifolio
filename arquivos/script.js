var bttToProjects = document.querySelector("#bttToProjects")
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

function ScrollContact(){
    let elementoRect1 = Footer.getBoundingClientRect()
    let centerY = elementoRect1.top
    window.scrollTo({
        top: centerY + window.scrollY,
        behavior: 'smooth'
    })
}
bttToContact.addEventListener("click", ScrollContact)