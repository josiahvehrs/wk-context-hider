function toggleDisplay(node) {
    if (node.style.display === "none") {
        node.style.display = "block";
    }
    else {
        node.style.display = "none";
    }
}

function clickHandler(e) {
    toggleDisplay(e.target.nextElementSibling);
}

const sentences = document.querySelectorAll(".context-sentences");
sentences.forEach((node) => {
    node.children[0].style.cursor = "pointer";
    node.addEventListener('click', clickHandler);
    node.children[1].style.display = "none";
});
