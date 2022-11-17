let footerA = document.querySelectorAll(".footer a")

footerA.forEach((one) => {
  one.target = '_blank'
})

let putTime = document.querySelectorAll("#atime")

putTime.forEach((one) => {
  one.innerHTML = new Date()
})

let putTimeYear = document.querySelectorAll("#atimeYear")

putTimeYear.forEach((one) => {
  one.style.color = '#0075ff';
  one.innerHTML = new Date().getFullYear()
})

let gearPull = document.querySelector(".gear")

gearFull.onclick = function () {

  gearPull.style.display = 'grid'

  let shade = document.createElement("div")
  shade.classList.add("shader")
  document.body.appendChild(shade)

  shade.onclick = function () {
    gearPull.style.display = 'none';
    shade.remove()
  }
  gearFull.onclick = function () {
    gearPull.style.display = 'none';
    location.reload()
  }
}


let navShower = document.querySelector(".navShower")
let navbar = document.querySelector(".navbar")
let all = document.querySelector(".all")

navShower.onclick = function () {
  navbar.classList.toggle("showNav")

  let shade = document.createElement("div")
  shade.classList.add("shader")
  document.body.appendChild(shade)

  all.classList.toggle("goRight")

  shade.onclick = function () {
    navbar.classList.remove("showNav")
    all.classList.toggle("goRight")
    shade.remove()
  }
}


let homeworks = 10;



let exams = 2;



let messages = 7;


let lessons = 57;




let HomeworkNav = document.querySelector(".HomeworkNav")
let HomeworkNavI = document.querySelector(".HomeworkNav .to-change")
let changer = document.querySelector(".changer")

HomeworkNav.onclick = function () {
  changer.classList.toggle("aGoDownHome")
  HomeworkNavI.classList.toggle("fa-angle-down")
  HomeworkNavI.classList.toggle("fa-angle-up")
}


let TestsNav = document.querySelector(".TestsNav")
let TestNavI = document.querySelector(".TestsNav .to-change")

TestsNav.onclick = function () {
  changer.classList.toggle("aGoDownTest")
  TestNavI.classList.toggle("fa-angle-down")
  TestNavI.classList.toggle("fa-angle-up")
}


let TicketNav = document.querySelector(".TicketNav")
let TicketNavI = document.querySelector(".TicketNav .to-change")

TicketNav.onclick = function () {
  changer.classList.toggle("aGoDownTicket")
  TicketNavI.classList.toggle("fa-angle-down")
  TicketNavI.classList.toggle("fa-angle-up")
}


let MessageNav = document.querySelector(".MessageNav")
let MessageNavI = document.querySelector(".MessageNav .to-change")

MessageNav.onclick = function () {
  changer.classList.toggle("aGoDownMessage")
  MessageNavI.classList.toggle("fa-angle-down")
  MessageNavI.classList.toggle("fa-angle-up")
}
// -=-=-=-=-=-=