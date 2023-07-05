function toggleMode() {
    const html =document.documentElement
    html.classList.toggle("light") 

    //pegar a img
    const img = document.querySelector("#profile img")

    // substituir a imagem
    if (html.classList.contains("light")) {
        // se tiver no modo light, adicionar a imagem
    img.setAttribute("src", "./assets/Avatar_LIGHT.png")

    }
    else {
        img.setAttribute("src", "./assets/Avatar.png")
    }
}
