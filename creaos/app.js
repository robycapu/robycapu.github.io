function mostra(img, str) {

      const contenitore = document.querySelector("#mostra_img")
      const image = document.querySelector("#img")
      const text = document.querySelector("#text")

      contenitore.style.display = "block"
      image.src = img
      text.innerHTML = str
}


function rimuovi() {
      const contenitore = document.querySelector("#mostra_img")
      contenitore.style.display = "none"
}


function visualizza() {
      const li = document.querySelectorAll("#contenitore_menu li")
      const contenitore_body = document.querySelector("#contenitore_body");
      const divs = document.querySelectorAll("#contenitore_menu div");

      contenitore_body.style.opacity = "0.5";
      divs.forEach((div) => {
            div.style.display = "block"
      })
      li.forEach((l) => {
            l.style.backgroundColor = "chartreuse"
      })
}

function togli() {
      const contenitore_body = document.querySelector("#contenitore_body");
      contenitore_body.style.opacity = "1";

      const li = document.querySelectorAll("#contenitore_menu li")
      li.forEach((l) => {
            l.style.backgroundColor = "DarkOrchid"
      })

      const divs = document.querySelectorAll("#contenitore_menu div");
      divs.forEach((div) => {
            div.style.display = "none"
      })
}

function make_photo() {
      window.location.href = "make_photo.html";
}

function see_books() {
      window.location.href = "libro.html";
}

