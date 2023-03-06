function mostra(img) {

      const contenitore = document.querySelector("#mostra_img")
      const menu = document.querySelector("#menu")
      const image = document.querySelector("#img")

      contenitore.style.display = "block"
      image.src = img
      menu.style.display = 'none'

}

function rimuovi() {
      const contenitore = document.querySelector("#mostra_img")
      contenitore.style.display = "none"

      const menu = document.querySelector("#menu")
      menu.style.display = "block"
}


