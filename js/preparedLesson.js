let holder = document.querySelector(".numbersJs")
let repeatNum = document.querySelector(".numbersJs tr")
let numberOrder = document.querySelectorAll(".numbersJs tr td:first-of-type")

repeatNum.remove()

function showPre() {


  for (i = 0; i < lessons; i++) {
    repeatNum.remove()
    numberOrder.forEach((order) => {
      order.innerHTML = i + 1;
    })
    let ele = document.createElement("tr")
    ele.innerHTML = repeatNum.innerHTML;
    holder.appendChild(ele)
  }
}