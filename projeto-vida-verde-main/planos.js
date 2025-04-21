const imagens = document.querySelectorAll(".item img");

imagens.forEach(imagem => {
    const infoExtra = imagem.nextElementSibling;

    imagem.addEventListener("click", () => {
        if (infoExtra.style.display === "block") {
            infoExtra.style.display = "none";
        } else {
            infoExtra.style.display = "block";
        }
    });
});