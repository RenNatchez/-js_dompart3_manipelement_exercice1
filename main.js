//--1--
let a  = document.querySelectorAll("h2")[0].innerText
console.log(a)

//--2--
let b  = document.querySelectorAll("h2")[0].innerHTML = "Exercice 1";
console.log(b)

//--3--
let c  = document.querySelectorAll("p")[0].innerHTML = "Exercice 1";
console.log(c)

//--4--
let d  = document.querySelectorAll("section")[0]
console.log(d)

//--5--
let e  = document.querySelectorAll("h1")[0]
console.log(e.classList)

//--6--
let f  = document.querySelectorAll("h1")
let g = Array.from(f)

g.forEach(element => {
    console.log(element.className)
});

//--7--
//
//
console.log(e.attributes)

//
//

//--8--
let h = document.querySelectorAll('input')[0]
console.log(h)
let type = h.getAttribute('class')
console.log(type)

let j = document.querySelectorAll('#inputPassword3')[0]
j.setAttribute('type', 'color')
console.log(j)